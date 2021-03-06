import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

import { getApiAlbums } from '../actions/api';

import ListItem from '../components/listItem';

class Albums extends Component {
  componentWillMount() {
    this.props.getApiAlbums(this.props.match.params.id);
  }

  render() {
    if (this.props.checkingLogin || this.props.isLoading) {
      return <span> carregando... </span>;
    }

    return (
      <div className="albums">
        <ul className="list-group">
          {this.props.albums.map(album => (
            <ListItem
              key={album.id}
              body={album.title}
              link={`/albuns/${this.props.match.params.id}/${album.id}`}
            />
          ))}
        </ul>
      </div>
    );
  }
}

Albums.propTypes = {
  isLoading: PropTypes.bool,
  checkingLogin: PropTypes.bool,
  getApiAlbums: PropTypes.func,
  albums: PropTypes.array,
  match: ReactRouterPropTypes.match,
};

const mapStateToProps = state => ({
  albums: state.api.apiAlbumsResultData,
  isLoading: state.api.apiAlbumsResultData.isLoading,
  checkingLogin: state.loggedUser.checking,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getApiAlbums,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
