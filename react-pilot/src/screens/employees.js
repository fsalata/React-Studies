// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";

import { getApiUsers } from "../actions/api";
import { getLoginStatus } from "../actions/loggedUser";

class Employees extends Component {
  componentDidMount() {
    this.props.getLoginStatus();
  }

  render() {
    if (this.props.isLoading) {
      return <span> carregando... </span>;
    }

    if (!this.props.isloggedIn) {
      return <Redirect to="/" />;
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
  dispatch: PropTypes.func
};

const mapStateToProps = state => ({
  ...state,
  isLoading: state.loggedUser.isLoading,
  isloggedIn: state.loggedUser.status
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getLoginStatus
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
