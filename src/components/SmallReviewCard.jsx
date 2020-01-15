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

  .card-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.8rem;
    height: 60px;
    h3 {
      margin-bottom: 0;
      padding-top: 35px !important;
    }
  }
`;

const SmallReviewCard = ({
  history,
  review: { id, review_headline: review, ratings, name },
}) => {
  return (
    <StyledCard>
      <div className="card-top">
        <h3>{name}</h3>
        <Button
          type="button"
          style={{
            backgroundColor: 'white',
            color: '#3e90ff',
            border: '1px solid #3e90ff',
          }}
          onClick={() => history.push(`/reviews/${id}`)}
        >
          View
        </Button>
      </div>
      {review.length > 30 ? (
        <span>{review.slice(0, 30)}...</span>
      ) : (
        <span>{review}</span>
      )}
      <div>
        <Rate disabled defaultValue={ratings} />
      </div>
    </StyledCard>
  );
};

export default withRouter(SmallReviewCard);
