// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getApiUsers } from '../actions/api';

class Employees extends Component {
  componentWillReceiveProps() {
    if (this.props.apiResponse.length === 0 && !this.props.rehydrated) {
      this.props.dispatch(getApiUsers());
    }
  }

  render() {
    if (!this.props.rehydrated) {
      return <span> carregando </span>;
    }

    return (
      <div>
        <div>React simple starter</div>
        <span>{this.props.isLoading}</span>
        <span>{this.props.apiResponse.map(item => <span> {item.name}</span>)}</span>
      </div>
    );
  }
}

Employees.propTypes = {
  apiResponse: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
  rehydrated: PropTypes.bool,
  dispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  apiResponse: state.api.apiUsersResultData,
  isLoading: state.api.isLoading,
  rehydrated: state._persist.rehydrated,
});

export default connect(mapStateToProps)(Employees);
