import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

import { getApiPhotos } from '../actions/api';

class Gallery extends Component {
  componentWillMount() {
    this.props.getApiPhotos(this.props.match.params.album);
  }

  render() {
    if (this.props.checkingLogin || this.props.isLoading) {
      return <span> carregando... </span>;
    }

    return (
      <div className="albums">
        <div className="row gallery">
          {this.props.photos.map(photo => (
            <a href={photo.url} target="_blank">
              <img src={photo.thumbnailUrl} alt={photo.title} className="col-xs-2" />
            </a>
          ))}
        </div>
      </div>
    );
  }
}

Gallery.propTypes = {
  isLoading: PropTypes.bool,
  checkingLogin: PropTypes.bool,
  getApiPhotos: PropTypes.func,
  photos: PropTypes.array,
  match: ReactRouterPropTypes.match,
};

const mapStateToProps = state => ({
  photos: state.api.apiPhotosResultData,
  isLoading: state.api.apiPhotosResultData.isLoading,
  checkingLogin: state.loggedUser.checking,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getApiPhotos,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
