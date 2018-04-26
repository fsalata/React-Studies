// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

import { getApiUsers } from '../actions/api';

class Employees extends Component {
  componentDidMount() {
    this.props.dispatch(getApiUsers());
  }

  render() {
    return (
      <div>
        <div>React simple starter</div>
        {/* <span>{this.props.isLoading}</span>
        <span>{this.props.apiResponse.map(item => <span> {item.name}</span>)}</span> */}
      </div>
    );
  }
}

Employees.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  ...state,
  isloggedIn: !!state.userProfile.email,
});

export default connect(mapStateToProps)(Employees);
