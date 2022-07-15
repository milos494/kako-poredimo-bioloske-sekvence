import React from 'react';
import PropTypes from 'prop-types';

import { InputLabel } from '@mui/material';
import { StyledInput, StyledInputWrapper } from './InputStyles';

const Input = ({ id, label, ...props }) => {
  return (
    <StyledInputWrapper>
      <InputLabel>{label}</InputLabel>
      <StyledInput id={id} {...props} />
    </StyledInputWrapper>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
