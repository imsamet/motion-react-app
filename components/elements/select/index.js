import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';
import cn from 'classnames';
import Text from '../texts/text';

const Select = ({
  placeholder,
  label,
  error = false,
  errorMessage,
  disabled = false,
  touched,
  className,
  onChange,
  onFocus,
  onBlur,
  options,
  value,
  ...props
}) => {
  const [isFocused, setFocused] = useState(false);
  const [val, setValue] = useState(false);
  const handleChange = e => {
    onChange && onChange(e);
    setValue(e.target.value);
  };
  const handleFocus = e => {
    onFocus && onFocus(e);
    setFocused(true);
  };
  const handleBlur = e => {
    onBlur && onBlur(e);
    setFocused(e.target.value !== '' && val);
  };
  const isValue = value?.length > 0;
  return (
    <div className={cn(styles.container, disabled && styles.disabled, isFocused && styles.isFocused, className)}>
      {label && (
        <Text tag="span" color="black" size="xl" className={styles.label}>
          {label}
        </Text>
      )}
      <select
        onChange={handleChange}
        autocomplete="off" // stop chrome autocomplete
        className={cn(styles.input, error && touched && styles['error'], isValue && styles.open)}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        {...props}
      >
        {options?.map(i => (
          <option value={i?.value}>{i?.label}</option>
        ))}
      </select>
      {error && touched && (
        <Text tag="span" color="black" size="xs" className={cn(styles.errorLabel)}>
          {errorMessage}
        </Text>
      )}
    </div>
  );
};
Select.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  touched: PropTypes.bool,
  className: PropTypes.string,
};
Select.defaultProps = {
  error: false,
  disabled: false,
  options: [
    { value: 'value-1', label: 'Value 1' },
    { value: 'value-2', label: 'Value 2' },
  ],
};
export default Select;
