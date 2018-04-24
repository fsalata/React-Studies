import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
  label, value, type, onTextChange, inputId, placeholder, error,
}) => (
  <div className="form-group custom-text-input">
    <label htmlFor={inputId}>{label}</label>
    <input
      type={type}
      className="form-control"
      id={inputId}
      placeholder={placeholder}
      onChange={onTextChange}
      value={value}
    />
    <small id={`${inputId}Help`} className="form-text text-danger">
      {error === null ? '' : error}
    </small>
  </div>
);

TextInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onTextChange: PropTypes.func,
  inputId: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string,
};

export default TextInput;
