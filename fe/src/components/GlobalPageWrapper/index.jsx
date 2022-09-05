import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { StyledButtonsWrapper } from './GlobalPageWrapperStyles';
import Button from '../../basic/Button';

const GlobalPageWrapper = ({ prethodno, sledece, children }) => {
  const navigate = useNavigate();

  const prethodnoHandler = () => {
    if (prethodno) {
      navigate(prethodno);
    }
  };

  const sledeceHandler = () => {
    if (sledece) {
      navigate(sledece);
    }
  };

  return (
    <div>
      <StyledButtonsWrapper className="border">
        <Button label="prethodno" disabled={!!prethodno} onClick={prethodnoHandler} />
        <Button label="sledeće" disabled={!!sledece} onClick={sledeceHandler} />
      </StyledButtonsWrapper>
      {children}
      <StyledButtonsWrapper>
        <Button label="prethodno" disabled={!!prethodno} onClick={prethodnoHandler} />
        <Button label="sledeće" disabled={!!sledece} onClick={sledeceHandler} />
      </StyledButtonsWrapper>
    </div>
  );
};

GlobalPageWrapper.defaultProps = {
  prethodno: null,
  sledece: null,
};

GlobalPageWrapper.propTypes = {
  prethodno: PropTypes.string,
  sledece: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default GlobalPageWrapper;
