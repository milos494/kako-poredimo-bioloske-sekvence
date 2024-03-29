import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import React, { useState } from 'react';
import { HiOutlineCheck, HiPlus } from 'react-icons/hi';

import { Link, useLocation } from 'react-router-dom';
import routes from '../../config/routes';
import {
  StyledAccordionTitle,
  StyledLinkList,
  StyledLinkListItem,
  StyledWrapper,
  StyledLinkWithoutChildren,
  StyledInnerWrapper,
} from './SideBarStyle';

const SideBar = () => {
  const location = useLocation();
  const path = `${location.pathname}${location.hash}`;

  const expandedItem = routes?.find(
    (item) => item.path === path || item.children?.find((c) => c.path === path),
  );

  const [expanded, setExpanded] = useState(expandedItem?.path || routes?.[0]?.path || null);

  const handleChange = (title) => (_, newExpanded) => {
    setExpanded(newExpanded ? title : null);
  };

  return (
    <StyledWrapper>
      <StyledInnerWrapper>
        {routes?.map(({ label, path: triggerPath, children }) => (
          <Accordion
            disableGutters
            key={triggerPath}
            expanded={expanded === triggerPath}
            onChange={handleChange(triggerPath)}
            sx={{
              boxShadow: 'none',
              '&:before': {
                display: 'none',
              },
            }}
          >
            {children && children.length > 0 ? (
              <AccordionSummary expandIcon={<HiPlus />} className="accordion-trigger">
                <StyledAccordionTitle>{label}</StyledAccordionTitle>
              </AccordionSummary>
            ) : (
              <StyledLinkWithoutChildren active={triggerPath === path}>
                <Link to={triggerPath}>
                  <AccordionSummary expandIcon={<HiOutlineCheck />} className="accordion-trigger">
                    <StyledAccordionTitle>{label}</StyledAccordionTitle>
                  </AccordionSummary>
                </Link>
              </StyledLinkWithoutChildren>
            )}
            <AccordionDetails className="accordion-details">
              {children && children.length > 0 && (
                <StyledLinkList>
                  {children.map((listItem) => (
                    <StyledLinkListItem key={listItem.path} active={listItem.path === path}>
                      <Link to={listItem.path}>{listItem.label}</Link>
                    </StyledLinkListItem>
                  ))}
                </StyledLinkList>
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

export default SideBar;
