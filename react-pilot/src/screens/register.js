import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import TextInput from '../components/textInput';
import Modal from '../components/modal';

class Register extends Component {
  render() {
    return (
      <div>
        <span>cadastro</span>
      </div>
    );
  }
}

export default Register;
