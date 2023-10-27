import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';
import cn from 'classnames';
import Text from '../texts/text';

const Input = ({
  placeholder,
  label,
  error = false,
  errorMessage,
  disabled = false,
  isOnlyLetter,
  touched,
  className,
  onChange,
  onFocus,
  onBlur,
  ...props
}) => {
  const [isFocused, setFocused] = useState(false);
  const handleLetterInputChange = e => {
    const { value } = e.target;
    const lettersOnly = value.replace(/[^A-Za-z]/g, '');
    if (lettersOnly !== value) {
      e.target.value = lettersOnly;
    }
    // İstenilen işlemler
  };
  const handleChange = e => {
    isOnlyLetter && handleLetterInputChange(e);
    onChange && onChange(e);
  };
  const handleFocus = e => {
    onFocus && onFocus(e);
    setFocused(true);
  };
  const handleBlur = e => {
    onBlur && onBlur(e);
    setFocused(e.target.value !== '');
  };
  return (
    <div className={cn(styles.container, disabled && styles.disabled, isFocused && styles.isFocused, className)}>
      {label && (
        <Text tag="span" color="black" size="xl" className={styles.label}>
          {label}
        </Text>
      )}
      <input
        onChange={handleChange}
        // autocomplete="off" // stop chrome autocomplete
        className={cn(styles.input, error && touched && styles['error'])}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      {error && touched && (
        <Text tag="span" color="black" size="xs" className={cn(styles.errorLabel)}>
          {errorMessage}
        </Text>
      )}
    </div>
  );
};
Input.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  isOnlyLetter: PropTypes.string,
  touched: PropTypes.bool,
  className: PropTypes.string,
};
Input.defaultProps = {
  error: false,
  disabled: false,
};
export default Input;
