/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import styled from 'styled-components';
import { Card, Rate, Empty, Button } from 'antd';
import { connect } from 'react-redux';
import SmallReviewCard from './SmallReviewCard';
import { interviewReviews } from '../utils/data';

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledEmpty = styled.div`
  display: flex;
  justify-content: center;
  height: 40vh;
  align-items: center;
  .text {
    font-size: 20px;
  }
`;

const MyReviewList = ({
  authState: { isLoggedIn },
  reviews: {
    reviews: { company },
  },
}) => {
  return isLoggedIn && company.length === 0 ? (
    <StyledEmpty>
      <Empty
        image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
        imageStyle={{
          height: 60,
        }}
        description={
          <span className="text">
            Oops!! <br />
            You haven&apos;t posted any reviews yet
          </span>
        }
      >
        <Button>Post a Review</Button>
      </Empty>
    </StyledEmpty>
  ) : (
    <StyledDiv>
      {company.map(review => (
        // eslint-disable-next-line react/no-array-index-key
        <SmallReviewCard review={review} key={review.id} />
      ))}
    </StyledDiv>
  );
};

export default connect(state => state)(MyReviewList);
