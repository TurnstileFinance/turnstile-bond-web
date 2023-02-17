import { useRouter } from 'next/router';
import React from 'react';

import { Tab } from '../Tab';

const TAB_DATA = [
  { id: 1, text: 'Dashboard', path: '/dashboard' },
  { id: 2, text: 'Lend', path: '/lend' },
  { id: 3, text: 'Borrow', path: '/borrow' },
  { id: 4, text: 'About', path: '/about' },
  // { id: 5, text: 'Connect', path: '/connect' },
];

export const MainTabs = () => {
  const { push, pathname } = useRouter();
  return (
    <div className="mx-auto flex space-x-5">
      {TAB_DATA.map((tab) => (
        <Tab
          key={tab.id}
          text={tab.text}
          onClick={() => push(tab.path)}
          selected={pathname === tab.path}
        />
      ))}
    </div>
  );
};

export default MainTabs;
