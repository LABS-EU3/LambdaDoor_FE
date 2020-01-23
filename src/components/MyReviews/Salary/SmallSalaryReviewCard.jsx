/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable camelcase */
import React from 'react';
import { Button, Card, Rate } from 'antd';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const StyledCard = styled(Card)`
  margin: 1.5rem !important;
  margin-left: 0 !important;
  width: 270px;
  height: 200px;
  cursor: pointer;

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

  .description {
    padding-top: 1rem;
  }
`;

export const SmallSalaryReviewCard = ({
  history,
  review: { id, name, description, salary, interest },
}) => {
  return (
    <StyledCard onClick={() => history.push(`/salaries/${id}`)}>
      <div className="card-top">
        <h2>{name}</h2>
      </div>
      <div>{salary}</div>
      <div className="description">
        {description.length > 30 ? (
          <span>{description.slice(0, 30)}...</span>
        ) : (
          <span>{description}</span>
        )}
      </div>
    </StyledCard>
  );
};

export default withRouter(SmallSalaryReviewCard);
