// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { submitLogin, changeEmail, changePassword } from '../actions/userLogin';
import { submitRegister } from '../actions/userRegister';

class Login extends Component {
  componentDidMount() {
    this.props.dispatch(submitRegister());
    this.props.dispatch(changeEmail('bin@bin.com'));
    this.props.dispatch(changePassword('123'));
    this.props.dispatch(submitLogin());
  }

  render() {
    if (this.props.isLoading) {
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

Login.propTypes = {
  apiResponse: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
  dispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  apiResponse: state.api.apiUsersResultData,
  isLoading: state.api.isLoading,
});

export default connect(mapStateToProps)(Login);
