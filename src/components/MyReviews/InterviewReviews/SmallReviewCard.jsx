/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable camelcase */
import React from 'react';
import { Card } from 'antd';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const StyledCard = styled(Card)`
  margin: 1.5rem !important;
  margin-left: 0 !important;
  width: 270px;
  height: 200px;
  cursor: pointer;

  &:hover {
    border: 2px solid #bb1333;
  }

  .card-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.8rem;
    height: 60px;
    h2 {
      margin-bottom: 0;
      padding-top: 35px !important;
      font-size: 20px;
      font-weight: 900;
    }
  }

  .stars {
    margin-top: 20px;
    font-size: 10px;
  }
`;

export const SmallReviewCard = ({
  history,
  review: { id, text: review, name },
}) => {
  return (
    <StyledCard onClick={() => history.push(`/reviews/interview/${id}`)}>
      <div className="card-top">
        <h2>{name}</h2>
      </div>
      {review.length > 30 ? (
        <span>{review.slice(0, 30)}...</span>
      ) : (
        <span>{review}</span>
      )}
    </StyledCard>
  );
};

export default withRouter(SmallReviewCard);
