import React from 'react';
import styled from 'styled-components';
import { Card, Rate } from 'antd';
import SmallReviewCard from './SmallReviewCard';
import { interviewReviews } from '../utils/data';

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MyReviewList = () => {
  return (
    <StyledDiv>
      {interviewReviews.map((review, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <SmallReviewCard />
      ))}
    </StyledDiv>
  );
};

export default MyReviewList;
