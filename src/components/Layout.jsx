import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Navbar } from './NavBar';
import { Loader } from 'components/Loader';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
