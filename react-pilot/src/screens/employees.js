// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { getApiUsers } from '../actions/api';
import { getLoginStatus } from '../actions/loggedUser';

import EmployeesItem from '../components/employeesItem';

class Employees extends Component {
  componentDidMount() {
    this.checkUserLogin();

    if (this.props.isloggedIn) {
      this.props.getApiUsers();
    }
  }

  checkUserLogin = async () => {
    await this.props.getLoginStatus();
  };

  render() {
    if (this.props.checkingLogin || this.props.isLoading) {
      return <span> carregando... </span>;
    }

    if (!this.props.isloggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        {this.props.users.map(user => (
          <EmployeesItem
            key={user.id}
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
  getLoginStatus: PropTypes.func,
  users: PropTypes.array,
};

const mapStateToProps = state => ({
  ...state,
  users: state.api.apiUsersResultData,
  isLoading: state.api.apiUsersResultData.isLoading,
  checkingLogin: state.loggedUser.isLoading,
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
