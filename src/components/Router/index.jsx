import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { decode } from 'jsonwebtoken';
import Home from '../../pages/Home/Home';
import UserDashboard from '../../pages/UserDashboard/UserDashboard';
import DashboardLayout from '../Layout/DashboardLayout';
import ReviewDetails from '../ReviewDetails';
import AddReview from '../../pages/AddReview';
import ReviewList from '../ReviewList/ReviewList';
import CompanyPage from '../../pages/CompanyPage';
import store from '../../state/store';
import { SetAuthenticated } from '../../state/actions/auth';
import ManageReviews from '../../pages/ManageReviews';
import { getCompanyReviews } from '../../state/actions/reviews';

const start = async () => {
  const token = localStorage.getItem('token');
  if (token) {
    const { id } = decode(token);
    await store.dispatch(SetAuthenticated(id));
    await store.dispatch(getCompanyReviews(id));
  }
};
start();
// eslint-disable-next-line react/prop-types
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <DashboardLayout path="/dashboard" component={UserDashboard} />
        <DashboardLayout path="/companies" component={UserDashboard} />
        <DashboardLayout path="/reviews" exact component={ManageReviews} />
        <DashboardLayout path="/salaries" exact component={ReviewList} />
        <DashboardLayout path="/interviews" exact component={ReviewList} />
        <DashboardLayout path="/interviews/:id" component={ReviewDetails} />
        <DashboardLayout path="/salaries/:id" component={ReviewDetails} />
        <DashboardLayout path="/reviews/:id" component={ReviewDetails} />
        <DashboardLayout path="/add-review" component={AddReview} />
        <DashboardLayout path="/company-page/:id" component={CompanyPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
