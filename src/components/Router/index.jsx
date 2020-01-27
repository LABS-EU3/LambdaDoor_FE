/* eslint-disable import/no-named-as-default */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { decode } from 'jsonwebtoken';
import Home from '../../pages/Home/Home';
import UserDashboard from '../../pages/UserDashboard/UserDashboard';
import DashboardLayout from '../Layout/DashboardLayout';
import ReviewDetails from '../ReviewDetails';
import DetailedSalaryReview from '../MyReviews/Salary/DetailedSalaryReviewCard';
import AddReview from '../../pages/AddReview';
// import ReviewList from '../ReviewList/ReviewList';
import CompanyPage from '../../pages/CompanyPage';
import store from '../../state/store';
import { SetAuthenticated } from '../../state/actions/auth';
import ManageReviews from '../../pages/ManageReviews';
import {
  getCompanyReviews,
  getSalaryReviews,
  getInterviewReviews,
} from '../../state/actions/reviews';
import { getClosestCompanies } from '../../state/actions/closestCompanies';

import { getCompanies } from '../../state/actions/companies';
import DetailedCompanyReviewCard from '../MyReviews/CompanyReviews/DetailedReviewCard';
import DetailedInterviewReviewCard from '../MyReviews/InterviewReviews/DetailedReviewCard';
import CompanyReview from '../CompanyReview/CompanyReviewCardDetails';
import InterviewReview from '../CompanyReviews/InterviewReviews/InterviewReviewDetails';
import SalaryReview from '../CompanyReviews/SalaryReviews/SalaryReviewDetails';
import NotFound from '../../pages/NotFound';

const start = async () => {
  const token = localStorage.getItem('token');
  if (token) {
    const { id } = decode(token);
    await store.dispatch(SetAuthenticated(id));
    await store.dispatch(getCompanies());
    await store.dispatch(getCompanyReviews(id));
    await store.dispatch(getSalaryReviews(id));
    await store.dispatch(getInterviewReviews(id));
    await store.dispatch(getClosestCompanies(id));
  }
};
start();
// eslint-disable-next-line react/prop-types
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <DashboardLayout path="/dashboard" exact component={UserDashboard} />
        <DashboardLayout path="/companies" exact component={UserDashboard} />
        <DashboardLayout path="/reviews" exact component={ManageReviews} />
        <DashboardLayout
          path="/interviews/:id"
          exact
          component={ReviewDetails}
        />
        <DashboardLayout
          exact
          path="/salaries/:id"
          component={DetailedSalaryReview}
        />
        <DashboardLayout
          exact
          path="/reviews/company/:id"
          component={DetailedCompanyReviewCard}
        />
        <DashboardLayout
          exact
          path="/reviews/interview/:id"
          component={DetailedInterviewReviewCard}
        />
        <DashboardLayout path="/add-review" exact component={AddReview} />
        <DashboardLayout
          path="/company-page/:id"
          exact
          component={CompanyPage}
        />
        <DashboardLayout
          path="/companyReviews/:id"
          exact
          component={CompanyReview}
        />
        <DashboardLayout
          path="/interviewreviews/:id"
          exact
          component={InterviewReview}
        />
        <DashboardLayout
          path="/company/:companyId/salary/:id"
          exact
          component={SalaryReview}
        />
        <DashboardLayout component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
