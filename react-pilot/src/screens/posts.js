import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

import { getApiPosts } from '../actions/api';

import Search from '../components/search';
import ListItem from '../components/listItem';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      filteredData: [],
    };
  }

  componentWillMount() {
    this.props.getApiPosts(this.props.match.params.id);
  }

  searchInputHandler = (event) => {
    const text = event.target.value;

    const results = this.props.posts.filter(item =>
      item.title.toLowerCase().includes(text.toLowerCase()) ||
        item.body.toLowerCase().includes(text.toLowerCase()));

    this.setState({
      term: text,
      filteredData: results,
    });
  };

  render() {
    if (this.props.checkingLogin || this.props.isLoading) {
      return <span> carregando... </span>;
    }

    const data =
      this.state.filteredData.length > 0 && this.term !== ''
        ? this.state.filteredData
        : this.props.posts;

    return (
      <div className="posts">
        <Search onChange={this.searchInputHandler} value={this.state.term} />
        <ul className="list-group">
          {data.map(post => (
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

Posts.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
