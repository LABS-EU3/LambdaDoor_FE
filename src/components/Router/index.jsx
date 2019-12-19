import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import UserDashboard from '../../pages/UserDashboard';
import DashboardLayout from '../Layout/DashboardLayout';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <DashboardLayout path="/dashboard" component={UserDashboard} />
    </BrowserRouter>
  );
};

export default AppRouter;
