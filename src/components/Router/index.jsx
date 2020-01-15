import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import UserDashboard from '../../pages/UserDashboard';
import DashboardLayout from '../Layout/DashboardLayout';
import MyReviewList from '../MyReviewList';

// eslint-disable-next-line react/prop-types
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <DashboardLayout path="/dashboard" component={UserDashboard} />
        <DashboardLayout path="/managereviews" component={MyReviewList} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
