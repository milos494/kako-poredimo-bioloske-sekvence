import React from 'react';
import PropTypes from 'prop-types';

import { InputLabel } from '@mui/material';
import { StyledInput } from './InputStyles';

const Input = ({ id, label, ...props }) => {
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <StyledInput id={id} {...props} />
    </>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
