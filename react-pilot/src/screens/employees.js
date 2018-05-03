import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { getApiUsers } from '../actions/api';
import { getLoginStatus } from '../actions/loggedUser';

import EmployeesItem from '../components/employeesItem';
import Search from '../components/search';

class Employees extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      filteredData: [],
    };
  }

  componentWillMount() {
    this.props.getApiUsers();
  }

  searchInputHandler = (event) => {
    const text = event.target.value;

    const results = this.props.users.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase()) ||
        item.username.toLowerCase().includes(text.toLowerCase()));

    this.setState({
      term: text,
      filteredData: results,
    });
  };

  render() {
    if (this.props.checkingLogin || this.props.isLoading) {
      return <span> carregando... </span>;
    }

    if (!this.props.isloggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <div className="employees">
        <Search onChange={this.searchInputHandler} value={this.state.term} />
        {this.state.filteredData.map(user => (
          <EmployeesItem
            key={user.id}
            userID={user.id}
            name={user.name}
            username={user.username}
            lat={user.address.geo.lat}
            lng={user.address.geo.lng}
          />
        ))}
      </div>
    );
  }
}

Employees.propTypes = {
  isloggedIn: PropTypes.bool,
  isLoading: PropTypes.bool,
  checkingLogin: PropTypes.bool,
  getApiUsers: PropTypes.func,
  users: PropTypes.array,
};

const mapStateToProps = state => ({
  ...state,
  users: state.api.apiUsersResultData,
  isLoading: state.api.apiUsersResultData.isLoading,
  checkingLogin: state.loggedUser.checking,
  isloggedIn: state.loggedUser.status,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getLoginStatus,
      getApiUsers,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
