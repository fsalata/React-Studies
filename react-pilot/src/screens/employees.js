// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

import { getApiUsers } from '../actions/api';

class Employees extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    this.props.dispatch(getApiUsers());

    this.checkLoginStatus();
  }

  checkLoginStatus = () => {
    this.setState({ redirect: !this.props.isloggedIn });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }

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
  isloggedIn: PropTypes.bool,
};

const mapStateToProps = state => ({
  ...state,
  isloggedIn: !!state.userProfile.email,
});

export default connect(mapStateToProps)(Employees);
