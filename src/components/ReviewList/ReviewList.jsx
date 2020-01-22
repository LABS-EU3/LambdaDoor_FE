import React from 'react';
import styled from 'styled-components';
import ReviewCard from '../ReviewCard/ReviewCard';
import { interviewReviews } from '../../utils/data';


const ReviewList = () => {
  return (
    <StyledDiv>
      {interviewReviews.map(review => (
        // eslint-disable-next-line react/no-array-index-key
        <ReviewCard
          key={`${review.id}${review.user_id}`}
          text={review.text}
          name={review.company_name}
          id={review.id}
        />
      ))}
    </StyledDiv>
  );
};

export default ReviewList;

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  min-height: 100%;

  .cards {
    position: relative;
    min-height: 300px;
    
    a {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      padding: 1rem;
      color: rgba(0, 0, 0, 0.65);
      border: 1px solid #e8e8e8;
      border-radius: 2px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    h3 {
      font-weight: 600;
      font-size: 1rem;
    }

    .ant-rate,
    .ant-rate-star-first,
    .ant-rate-star-second {
      height: 20px;
      width: fit-content;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .ant-rate-star-first i,
    .ant-rate-star-second i {
      font-size: 14px;
    }

    .ant-rate-star:not(:last-child) {
      margin-right: 3px;
    }
  }
`;
