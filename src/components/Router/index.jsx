import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import DashboardLayout from '../Layout/DashboardLayout';
import Home from '../../pages/Home';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <DashboardLayout exact path="/" component={Home} />
    </BrowserRouter>
  );
};

export default AppRouter;
