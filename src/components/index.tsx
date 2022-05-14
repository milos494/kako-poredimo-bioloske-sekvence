import React, { SyntheticEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { selectRoutesData } from '../../features/page';
import SideBarStructure from './SideBarStructure';

const SideBar = () => {
  const { routes, auditLog } = useSelector(selectRoutesData);
  const router = useRouter();
  const path = router.asPath;
  const expandedItem = routes?.find(item => item.path === path || item.children?.find(c => c.path === path));

  const [expanded, setExpanded] = useState<string | null>(expandedItem?.path || routes?.[0]?.path || null);

  const handleChange = (title: string) => (_: SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? title : null);
  };

  const componentProps = {
    routes,
    expanded,
    handleChange,
    path,
    auditLog,
  }

  return (
    <SideBarStructure {...componentProps} />
  )
}

export default SideBar;
