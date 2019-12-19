import React from 'react';
import ReviewCard from './ReviewCard';
import { interviewReviews } from '../utils/data.js';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
`;

const ReviewList = () => {
  return (
    <StyledDiv>
      {interviewReviews.map(review => (
        <ReviewCard
          key={review.user_id}
          text={review.text}
          name={review.company_name}
        />
      ))}
    </StyledDiv>
  );
};

export default ReviewList;
