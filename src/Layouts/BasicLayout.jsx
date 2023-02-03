import React from 'react';
import Navigation from '../Components/Navigation';

const BasicLayout = ({ children }) => {
  return (
    <div className="container px-3 mx-auto">
      <Navigation />

      {children}
    </div>
  );
}

export default BasicLayout;
