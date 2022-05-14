/* stylelint-disable selector-class-pattern */
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  min-width: 36rem;
  min-height: calc(100vh - 10rem);
  padding-top: 1rem;
  background: ${({ theme }) => theme.vars.greyDark};

  .Mui-expanded {
    transform: none;
  }

  .accordion-trigger {
    flex-direction: row-reverse;
    padding: 1rem 3.5rem;
    background: ${({ theme }) => theme.vars.greyDark};
    color: ${({ theme }) => theme.vars.greyLight};

    svg {
      width: 2.4rem;
      height: 2.4rem;
      color: ${({ theme }) => theme.vars.greyLight};
    }

    &.Mui-expanded {
      background: ${({ theme }) => theme.vars.greyDarkest};
      color: ${({ theme }) => theme.vars.white};

      svg {
        color: ${({ theme }) => theme.vars.white};
      }
    }
  }

  .accordion-details {
    flex-direction: row-reverse;
    padding: 0 3.5rem;
    background: ${({ theme }) => theme.vars.greyDarkest};
    color: ${({ theme }) => theme.vars.white};
  }
`;

export const StyledAccordionTriggerLink = styled.a`
  text-decoration: none;
`

export const StyledLinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0 2rem;
`;

export const StyledLinkListItem = styled.li<{ active: boolean }>`
  padding: 1rem 0;

  a {
    font-size: 2.2rem;
    line-height: 2.6rem;
    color: ${({ theme, active }) => active ? theme.vars.white : theme.vars.greyLight};
    text-decoration: ${({ active }) => active ? 'underline' : 'none'};
  }
`;

export const StyledAccordionTitle = styled.p`
  margin: 0 2.5rem;
  font-size: 2.4rem;
  font-weight: 600;
`;


export const StyledLink = styled.a`
  padding: 3rem;
  font-size: 2.4rem;
  line-height: 2.6rem;
  color: ${({ theme }) => theme.vars.white};
  text-decoration: underline;
  cursor: pointer;
`;