/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import MyReviewList from '../components/MyReviewList';
import { getCompanyReviews } from '../state/actions/reviews';

const ManageReviews = ({
  authState: {
    credentials: { id },
  },
  getCompanyReviews,
}) => {
  return (
    <div>
      <h1>My Reviews</h1>
      <MyReviewList />
    </div>
  );
};

export default connect(state => state, { getCompanyReviews })(ManageReviews);
