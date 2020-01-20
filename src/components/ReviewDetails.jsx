import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { interviewReviews } from '../utils/data';
import DetailedReviewCard from './MyReviews/DetailedReviewCard';

const ReviewDetails = () => {
  const reviewId = useParams().id;
  // eslint-disable-next-line no-shadow
  const review = interviewReviews.find(review => `${review.id}` === reviewId);

  return (
    <div>
      <DetailedReviewCard />
    </div>
  );
};

export default ReviewDetails;
