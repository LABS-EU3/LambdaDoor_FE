import React from 'react';
import { Button, Card, Rate } from 'antd';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin: 1.5rem !important;
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

const SmallReviewCard = () => {
  return (
    <StyledCard>
      <div className="card-top">
        <h3>Company Name</h3>
        <Button
          type="button"
          style={{
            backgroundColor: 'white',
            color: '#3e90ff',
            border: '1px solid #3e90ff',
          }}
        >
          View
        </Button>
      </div>
      <p>Lorem ipsum blah de blah de blah ...</p>
      <div>
        <Rate disabled defaultValue={4} />
      </div>
    </StyledCard>
  );
};

export default SmallReviewCard;
