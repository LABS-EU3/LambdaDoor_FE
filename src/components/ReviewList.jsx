import React from 'react';
import styled from 'styled-components';
import ReviewCard from './ReviewCard';
import { interviewReviews } from '../utils/data';

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1400px;
`;

const ReviewList = () => {
  return (
    <StyledDiv>
      {interviewReviews.map((review, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ReviewCard key={index} text={review.text} name={review.company_name} />
      ))}
    </StyledDiv>
  );
};

export default ReviewList;
