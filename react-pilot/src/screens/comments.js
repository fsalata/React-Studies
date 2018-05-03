import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

import { getApiComments } from '../actions/api';

import ListItem from '../components/listItem';

class Comments extends Component {
  componentWillMount() {
    this.props.getApiComments(this.props.match.params.post);
  }

  render() {
    if (this.props.checkingLogin || this.props.isLoading) {
      return <span> carregando... </span>;
    }

    return (
      <div className="posts">
        <ul className="list-group">
          {this.props.posts.map(comment => (
            <ListItem
              key={comment.id}
              title={comment.name}
              subtitle={comment.email}
              body={comment.body}
            />
          ))}
        </ul>
      </div>
    );
  }
}

Comments.propTypes = {
  isLoading: PropTypes.bool,
  checkingLogin: PropTypes.bool,
  getApiComments: PropTypes.func,
  posts: PropTypes.array,
  match: ReactRouterPropTypes.match,
};

const mapStateToProps = state => ({
  posts: state.api.apiCommentsResultData,
  isLoading: state.api.apiCommentsResultData.isLoading,
  checkingLogin: state.loggedUser.checking,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getApiComments,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
