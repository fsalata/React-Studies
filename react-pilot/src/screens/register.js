import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import TextInput from '../components/textInput';
import Modal from '../components/modal';
import Avatar from '../components/avatar';

import {
  submitRegister,
  changeBase64Image,
  changeCpf,
  changeEmail,
  changeName,
  changePassword,
  cleanRegisterMessages,
} from '../actions/userRegister';

import { validateEmail, validateCPF } from '../helpers/utilities';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      confirmPassword: null,
      nameError: null,
      emailError: null,
      passwordError: null,
      confirmPasswordError: null,
      cpfError: null,
    };
  }

  nameChangeHandler = (event) => {
    const text = event.target.value;

    this.setState({ nameError: null });

    this.props.changeName(text);
  };

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

  confirmPasswordChangeHandler = (event) => {
    const text = event.target.value;

    this.setState({ confirmPassword: text, confirmPasswordError: null });
  };

  cpfChangeHandler = (event) => {
    const text = event.target.value;

    this.setState({ cpfError: null });

    this.props.changeCpf(text);
  };

  checkCPF = () => {
    if (this.props.cpf !== null || this.props.cpf !== '') {
      const valid = validateCPF(this.props.cpf);

      if (valid) {
        this.setState({ cpfError: null });
      } else {
        this.setState({ cpfError: 'CPF inválido' });
      }
    }
  };

  handleRegister = (event) => {
    event.preventDefault();

    let isValid = true;

    this.setState({
      nameError: null,
      emailError: null,
      passwordError: null,
      confirmPasswordError: null,
      cpfError: null,
    });

    if (this.props.name === '' || this.props.name === null) {
      this.setState({ nameError: 'O nome deve ser preenchido' });
      isValid = false;
    }

    if (this.props.email === '' || this.props.email === null) {
      this.setState({ emailError: 'O email deve ser preenchido' });
      isValid = false;
    }

    if (this.props.password === '' || this.props.password === null) {
      this.setState({ passwordError: 'A senha deve ser preenchido' });
      isValid = false;
    } else if (this.props.password !== this.state.confirmPassword) {
      this.setState({ confirmPasswordError: 'As senhas não coincidem' });
      isValid = false;
    }

    if (this.props.cpf === '' || this.props.cpf === null) {
      this.setState({ cpfError: 'O CPF deve ser preenchido' });
      isValid = false;
    } else if (!validateCPF(this.props.cpf)) {
      this.setState({ cpfError: 'O CPF não é válido' });
      isValid = false;
    }

    if (isValid === true) {
      alert('foi');
    }
  };

  closeModal = () => {
    this.props.cleanRegisterMessages();
  };

  render() {
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
            message={this.props.submitErrorMessage}
            closeTitle="Ok"
            showConfirmButton
            closeAction={this.closeModal}
          />
        ) : null}

        {this.props.isSubmiting ? <span>carregando...</span> : null}

        <div className="register">
          <h2>Cadastro</h2>
          <div className="form-signin">
            <form onSubmit={this.handleRegister}>
              <Avatar image={this.props.profileImage} />
              <TextInput
                type="text"
                value={this.props.name}
                placeholder="Nome"
                error={this.state.nameError}
                label="Nome"
                onTextChange={this.nameChangeHandler}
              />
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
              <TextInput
                type="password"
                value={this.state.confirmPassword}
                placeholder="Confirmar senha"
                error={this.state.confirmPasswordError}
                label="Confirmar senha"
                onTextChange={this.confirmPasswordChangeHandler}
              />
              <TextInput
                type="text"
                value={this.props.cpf}
                placeholder="CPF"
                error={this.state.cpfError}
                label="CPF"
                mask="999.999.999-99"
                onTextChange={this.cpfChangeHandler}
                onBlur={this.checkCPF}
              />
              <div className="form-group buttons">
                <button type="submit" className="btn btn-primary btn-lg btn-block">
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  profileImage: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  cpf: PropTypes.string,
  isSubmiting: PropTypes.bool,
  submitSuccessMessage: PropTypes.string,
  submitErrorMessage: PropTypes.string,
  submitRegister: PropTypes.func,
  changeBase64Image: PropTypes.func,
  changeCpf: PropTypes.func,
  changeEmail: PropTypes.func,
  changeName: PropTypes.func,
  changePassword: PropTypes.func,
  cleanRegisterMessages: PropTypes.func,
};

const mapStateToProps = state => ({
  ...state.userRegister,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      submitRegister,
      changeBase64Image,
      changeCpf,
      changeEmail,
      changeName,
      changePassword,
      cleanRegisterMessages,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Register);
