import React from 'react';
import { Link } from 'react-router-dom';
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
      {interviewReviews.map((review, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Link to={`interviews/${review.id}`}>
          <ReviewCard
            key={index}
            text={review.text}
            name={review.company_name}
            id={review.id}
          />
        </Link>
      ))}
    </StyledDiv>
  );
};

export default ReviewList;
