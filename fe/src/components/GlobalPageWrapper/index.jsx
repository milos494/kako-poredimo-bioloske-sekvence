import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { StyledButtonsWrapper } from './GlobalPageWrapperStyles';
import Button from '../../basic/Button';
import useHashNavigation from '../../hooks/navigation';

const GlobalPageWrapper = ({ prethodno, sledece, children, title }) => {
  const navigate = useNavigate();

  useHashNavigation();
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
        {title && <h1>{title}</h1>}
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
  title: null,
};

GlobalPageWrapper.propTypes = {
  prethodno: PropTypes.string,
  sledece: PropTypes.string,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default GlobalPageWrapper;
