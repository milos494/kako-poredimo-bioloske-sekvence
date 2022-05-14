import React, { FC, SyntheticEvent } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Link from 'next/link';

import { Link as LinkData, RouteData } from '../../api/mocks/routes';
import {
  StyledAccordionTitle,
  StyledAccordionTriggerLink,
  StyledLink, StyledLinkList,
  StyledLinkListItem, StyledWrapper
} from './SideBarStyle';


interface SideBarStructureProps {
  routes: RouteData[];
  expanded: string;
  handleChange: (panel: string) => (_: SyntheticEvent, newExpanded: boolean) => void;
  path: string;
  auditLog?: LinkData;
}

const SideBarStructure: FC<SideBarStructureProps> = ({
  routes,
  expanded,
  handleChange,
  path,
  auditLog,
}) => (
  <StyledWrapper>
    <div>
      {routes?.map(({ label, path: triggerPath, icon, children }) => (
        <Accordion
          disableGutters
          key={triggerPath}
          expanded={expanded === triggerPath}
          onChange={handleChange(triggerPath)}
          sx={{
            boxShadow: 'none',
            '&:before': {
              display: 'none',
            }
          }}
        >

          {children && children.length > 0 ?
            <AccordionSummary
              expandIcon={<FontAwesomeIcon icon={icon as IconProp} />}
              className='accordion-trigger'
            >
              <StyledAccordionTitle>{label}</StyledAccordionTitle>
            </AccordionSummary> :
            <Link href={triggerPath}>
              <StyledAccordionTriggerLink href={triggerPath}>
                <AccordionSummary
                  expandIcon={<FontAwesomeIcon icon={icon as IconProp} />}
                  className='accordion-trigger'
                >
                  <StyledAccordionTitle>{label}</StyledAccordionTitle>
                </AccordionSummary>
              </StyledAccordionTriggerLink>
            </Link>
          }
          <AccordionDetails
            className='accordion-details'
          >
            {children && children.length > 0 &&
              <StyledLinkList>
                {children.map((listItem) => (
                  <StyledLinkListItem
                    key={listItem.path}
                    active={listItem.path === path}
                  >
                    <Link href={listItem.path}>
                      <a href={listItem.path}>
                        {listItem.label}
                      </a>
                    </Link>
                  </StyledLinkListItem>
                ))}
              </StyledLinkList>}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
    {auditLog && <StyledLink href={auditLog.path}>{auditLog.label}</StyledLink>}
  </StyledWrapper>
);

export default SideBarStructure;
