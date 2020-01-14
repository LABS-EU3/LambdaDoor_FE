import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import UserDashboard from '../../pages/UserDashboard/UserDashboard';
import DashboardLayout from '../Layout/DashboardLayout';
import ReviewDetails from '../ReviewDetails'
import AddReview from '../AddReview';
import ReviewList from '../ReviewList';

// eslint-disable-next-line react/prop-types
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <DashboardLayout path="/dashboard" component={UserDashboard} />
        <DashboardLayout path="/companies" component={UserDashboard} />
        <DashboardLayout path="/reviews" exact component={ReviewList} />
        <DashboardLayout path="/salaries" exact component={ReviewList} />
        <DashboardLayout path="/interviews" exact component={ReviewList} />
        <DashboardLayout path="/interviews/:id" component={ReviewDetails} />
        <DashboardLayout path="/salaries/:id" component={ReviewDetails} />
        <DashboardLayout path="/reviews/:id" component={ReviewDetails} />
        <DashboardLayout path="/add-review" component={AddReview} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
