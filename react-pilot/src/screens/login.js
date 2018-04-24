// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TextInput from '../components/textInput';

import { submitLogin, changeEmail, changePassword, cleanLoginMessages } from '../actions/userLogin';

class Login extends Component {
  handleLogin = (event) => {
    event.preventDefault();
  };

  render() {
    if (this.props.isLoading) {
      return <span> carregando </span>;
    }

    return (
      <div className="login">
        <h1>React Pilot</h1>
        <div className="form-signin">
          <form onSubmit={this.handleLogin}>
            <TextInput type="email" placeholder="E-mail" error="errro" label="E-mail" />
            <TextInput type="password" placeholder="E-mail" error="errro" label="Senha" />
            <button type="submit" className="btn btn-primary btn-lg">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  isLoading: PropTypes.bool,
};

const mapStateToProps = state => ({
  apiResponse: state.api.apiUsersResultData,
  isLoading: state.api.isLoading,
});

export default connect(mapStateToProps)(Login);
