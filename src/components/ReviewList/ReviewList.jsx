import React from 'react';
import styled from 'styled-components';
import ReviewCard from '../ReviewCard/ReviewCard';
import { interviewReviews } from '../../utils/data';

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1400px;
`;

const ReviewList = () => {
  return (
    <StyledDiv>
      {interviewReviews.map(review => (
        <ReviewCard
          key={review.company_id}
          text={review.text}
          name={review.company_name}
        />
      ))}
    </StyledDiv>
  );
};

export default ReviewList;
