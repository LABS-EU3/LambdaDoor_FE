import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { interviewReviews } from '../utils/data';

const ReviewDetails = () => {
  const reviewId = useParams().id;
  const review = interviewReviews.find(review => `${review.id}` === reviewId);


  return (
    <div>
      Company Review
      {review.company_name}
    </div>
  );
};

export default ReviewDetails;
