/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { actions } from '../state/actions';

const UserDashboard = ({ companyReviews, getCompanyReviews }) => {
  useEffect(() => {
    getCompanyReviews();
  }, []);

  return <h1>{companyReviews.message}</h1>;
};

export default connect(state => state, actions)(UserDashboard);
