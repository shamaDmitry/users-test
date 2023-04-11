import React from 'react';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';

import { Outlet } from 'react-router-dom';

const BasicLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <Outlet />

      <Footer />
    </div>
  );
}

export default BasicLayout;
