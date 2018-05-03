import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

import { getApiPosts } from '../actions/api';

import ListItem from '../components/listItem';

class Comments extends Component {
  componentWillMount() {
    this.props.getApiPosts(this.props.match.params.id);
  }

  render() {
    if (this.props.checkingLogin || this.props.isLoading) {
      return <span> carregando... </span>;
    }

    return (
      <div className="posts">
        <ul className="list-group">
          {this.props.posts.map(post => (
            <ListItem
              key={post.id}
              title={post.title}
              body={post.body}
              link={`/posts/${this.props.match.params.id}/${post.id}`}
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
  getApiPosts: PropTypes.func,
  posts: PropTypes.array,
  match: ReactRouterPropTypes.match,
};

const mapStateToProps = state => ({
  posts: state.api.apiPostsResultData,
  isLoading: state.api.apiPostsResultData.isLoading,
  checkingLogin: state.loggedUser.checking,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getApiPosts,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
