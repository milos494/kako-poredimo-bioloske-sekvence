import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  min-width: 360px;
  min-height: 100vh;
  padding-top: 10px;
  background: #3a3b3c;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  .Mui-expanded {
    transform: none;
  }

  .accordion-trigger {
    flex-direction: row-reverse;
    padding: 10 35px;
    background: #3a3b3c;
    color: white;

    svg {
      width: 24px;
      height: 24px;
      color: white;
    }

    &.Mui-expanded {
      color: white;

      svg {
        color: white;
      }
    }
  }

  .MuiAccordion-root {
    &:first-child {
      border-top: none;
    }

    &:last-child {
      border-bottom: none;
    }

    border: white solid;
    border-width: 1px 0;
  }

  .accordion-details {
    flex-direction: row-reverse;
    padding: 0 35px;
    background: #3a3b3c;
    color: white;
  }

  a {
    text-decoration: none;
  }
`;

export const StyledLinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 50px;
`;

export const StyledLinkListItem = styled.li`
  padding: 10px 0;

  a {
    font-size: 22px;
    line-height: 26px;
    color: white;
    text-decoration: ${({ active }) => (active ? 'underline' : 'none')};
  }
`;

export const StyledAccordionTitle = styled.p`
  margin: 0 25px;
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
`;

export const StyledLinkWithoutChildren = styled.div`
  a {
    color: white;
    text-decoration: ${({ active }) => (active ? 'underline' : 'none')};
  }
`;
