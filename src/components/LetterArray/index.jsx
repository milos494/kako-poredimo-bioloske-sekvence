import React from 'react';
import PropTypes from 'prop-types';
import { StyledLetterArrayWrapper, StyledLetterElement } from './LetterArrayStyles';

const LetterArray = ({ sequence, horizontal }) => {
  const letters = sequence.split('');
  return (
    <StyledLetterArrayWrapper horizontal={horizontal}>
      {letters.map((letter, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <StyledLetterElement key={index}>{letter}</StyledLetterElement>
      ))}
    </StyledLetterArrayWrapper>
  );
};

LetterArray.defaultProps = {
  horizontal: false,
};

LetterArray.propTypes = {
  sequence: PropTypes.string.isRequired,
  horizontal: PropTypes.bool,
};

export default LetterArray;
