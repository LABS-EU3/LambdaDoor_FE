/* eslint-disable react/self-closing-comp */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-wrap-multilines */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Icon, Button, Skeleton } from 'antd';
import styled from 'styled-components';
import { getInterviewReviewsByReviewId } from '../../../state/actions/reviews';
import { mobilePortrait, tabletPortrait } from '../../../styles/theme.styles';

const InterviewReviewDetails = ({
  history,
  getInterviewReviewsByReviewId,
  singleReview: {
    reviews: { interviewReview: singleinterviewReview },
  },
  singleCompanyReviews: {
    reviews: { interviewReview },
  },
}) => {
  const reviewId = useParams().id;
  const review =
    interviewReview.find(elem => elem.id === Number(reviewId)) ||
    singleinterviewReview;
  useEffect(() => {
    if (!Object.keys(review).length) {
      getInterviewReviewsByReviewId(Number(reviewId));
    }
  }, []);

  return !review ? (
    <Skeleton />
  ) : (
    <>
      <Button
        style={{
          marginBottom: '30px',
          border: '1px solid #BB1333',
          color: '#BB1333',
        }}
        onClick={() => history.push(`/company-page/${reviewId}`)}
      >
        <Icon type="left" />
        Back to Reviews
      </Button>
      <StyledCard>{review.text}</StyledCard>
    </>
  );
};

const StyledCard = styled(Card)`
  max-width: 800px;
  padding: 50px !important;

  @media ${mobilePortrait} {
    padding: 0 !important;
    width: 100%;
  }

  @media ${tabletPortrait} {
    padding: 0 !important;
  }

  p {
    font-size: 20px;
  }

  .buttons {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    width: 30%;
    @media ${mobilePortrait} {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
    }
    @media ${tabletPortrait} {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
    }
  }
`;

export default connect(state => state, {
  getInterviewReviewsByReviewId,
})(InterviewReviewDetails);
