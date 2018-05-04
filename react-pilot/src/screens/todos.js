import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

import { getApiToDos } from '../actions/api';

import Search from '../components/search';
import ListItem from '../components/listItem';

class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      filteredData: [],
    };
  }

  componentWillMount() {
    this.props.getApiToDos(this.props.match.params.id);
  }

  searchInputHandler = (event) => {
    const text = event.target.value;

    const results = this.props.todos.filter(item =>
      item.title.toLowerCase().includes(text.toLowerCase()));

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
        : this.props.todos;

    return (
      <div className="todos">
        <Search onChange={this.searchInputHandler} value={this.state.term} />
        <ul className="list-group">
          {data.map(todo => (
            <ListItem
              key={todo.id}
              body={todo.title}
              cellColor={todo.completed ? 'list-group-item-success' : 'list-group-item-danger'}
            />
          ))}
        </ul>
      </div>
    );
  }
}

Todos.propTypes = {
  isLoading: PropTypes.bool,
  checkingLogin: PropTypes.bool,
  getApiToDos: PropTypes.func,
  todos: PropTypes.array,
  match: ReactRouterPropTypes.match,
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

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
