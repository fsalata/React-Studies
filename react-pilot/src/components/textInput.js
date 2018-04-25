import React from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

const TextInput = ({
  label,
  value,
  type,
  inputId,
  placeholder,
  error,
  mask = null,
  onFocus,
  onTextChange,
  onBlur,
}) => (
  <div className="form-group custom-text-input">
    <label htmlFor={inputId} className="text-primary">
      {label}
    </label>
    {mask ? (
      <InputMask
        type={type}
        className="form-control"
        id={inputId}
        placeholder={placeholder}
        value={value}
        mask={mask}
        maskChar=" "
        onFocus={onFocus}
        onChange={onTextChange}
        onBlur={onBlur}
      />
    ) : (
      <input
        type={type}
        className="form-control"
        id={inputId}
        placeholder={placeholder}
        value={value}
        onFocus={onFocus}
        onChange={onTextChange}
        onBlur={onBlur}
      />
    )}

    <small id={`${inputId}Help`} className="form-text text-danger">
      {error === null ? '' : error}
    </small>
  </div>
);

TextInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  inputId: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string,
  mask: PropTypes.string,
  onFocus: PropTypes.func,
  onTextChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default TextInput;
