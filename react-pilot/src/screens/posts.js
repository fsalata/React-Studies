import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { getApiToDos } from '../actions/api';

class Posts extends Component {
  componentDidMount() {
    this.props.getApiToDos(this.props.match.params.id);
  }

  render() {
    if (this.props.checkingLogin || this.props.isLoading) {
      return <span> carregando... </span>;
    }

    return <div>{this.props.todos.map(todo => <div key={todo.id}>{todo.title}</div>)}</div>;
  }
}

Posts.propTypes = {
  isLoading: PropTypes.bool,
  checkingLogin: PropTypes.bool,
  getApiToDos: PropTypes.func,
  todos: PropTypes.array,
};

const mapStateToProps = state => ({
  todos: state.api.apiToDosResultData,
  isLoading: state.api.apiToDosResultData.isLoading,
  checkingLogin: state.loggedUser.checking,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getApiToDos,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
