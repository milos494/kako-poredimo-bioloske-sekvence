import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './ButtonStyles';

const Button = ({ label, ...otherProps }) => {
  return (
    <StyledButton variant="outlined" type {...otherProps}>
      {label}
    </StyledButton>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
