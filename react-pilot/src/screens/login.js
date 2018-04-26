// @flow

import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import TextInput from '../components/textInput';
import Modal from '../components/modal';

import { submitLogin, changeEmail, changePassword, cleanLoginMessages } from '../actions/userLogin';
import { validateEmail } from '../helpers/utilities';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailError: null,
      passwordError: null,
      loginSuccess: false,
    };
  }

  emailChangeHandler = (event) => {
    const text = event.target.value;

    this.props.changeEmail(text);
    this.setState({
      emailError:
        validateEmail(this.props.email) === false && [...text].length > 3
          ? 'E-mail inválido'
          : null,
    });
  };

  passwordChangeHandler = (event) => {
    const text = event.target.value;

    this.setState({ passwordError: null });

    this.props.changePassword(text);
  };

  handleLogin = (event) => {
    event.preventDefault();

    let isValid = true;

    this.setState({ emailError: null, passwordError: null });

    if (this.props.email === null || this.props.email === '') {
      isValid = false;
      this.setState({ emailError: 'O e-mail é obrigatório' });
    }
    if (this.props.password === null || this.props.password === '') {
      isValid = false;
      this.setState({ passwordError: 'A senha é obrigatória' });
    }

    if (isValid) {
      this.props.submitLogin();
    }
  };

  handleSuccessLoginModal = () => {
    this.setState({ loginSuccess: true });
  };

  closeModal = () => {
    this.props.cleanLoginMessages();
  };

  render() {
    if (this.props.isSubmiting) {
      return <span> carregando... </span>;
    }

    if (this.state.loginSuccess || this.props.isloggedIn) {
      return <Redirect to="/funcionarios" />;
    }

    return (
      <div>
        {this.props.submitErrorMessage ? (
          <Modal
            title="Atenção"
            message={this.props.submitErrorMessage}
            closeTitle="Ok"
            closeAction={this.closeModal}
          />
        ) : null}

        {this.props.submitSuccessMessage ? (
          <Modal
            title="Sucesso"
            message={this.props.submitSuccessMessage}
            closeTitle="Ok"
            closeAction={this.closeModal}
            showCloseButton={false}
            showConfirmButton
            confirmTitle="Ok"
            confirmAction={this.handleSuccessLoginModal}
          />
        ) : null}

        <div className="login">
          <h4>Login</h4>
          <div className="form-signin">
            <form onSubmit={this.handleLogin}>
              <TextInput
                type="email"
                value={this.props.email}
                placeholder="E-mail"
                error={this.state.emailError}
                label="E-mail"
                onTextChange={this.emailChangeHandler}
              />
              <TextInput
                type="password"
                value={this.props.password}
                placeholder="Senha"
                error={this.state.passwordError}
                label="Senha"
                onTextChange={this.passwordChangeHandler}
              />
              <div className="form-group buttons">
                <button type="submit" className="btn btn-primary btn-lg btn-block">
                  Login
                </button>

                <Link to="/cadastro" className="btn btn-secondary btn-lg btn-block">
                  Cadastro
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  isSubmiting: PropTypes.bool,
  email: PropTypes.string,
  password: PropTypes.string,
  submitErrorMessage: PropTypes.string,
  submitSuccessMessage: PropTypes.string,
  submitLogin: PropTypes.func,
  changeEmail: PropTypes.func,
  changePassword: PropTypes.func,
  cleanLoginMessages: PropTypes.func,
  isloggedIn: PropTypes.bool,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      submitLogin,
      changeEmail,
      changePassword,
      cleanLoginMessages,
    },
    dispatch,
  );
}
const mapStateToProps = state => ({
  ...state.userLogin,
  isloggedIn: !!state.userProfile.email,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
