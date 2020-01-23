/* eslint-disable react/self-closing-comp */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-wrap-multilines */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Rate, Card, Icon, Button, Skeleton } from 'antd';
import styled from 'styled-components';
import { getReviewsByReviewId } from '../../state/actions/reviews';
import { mobilePortrait, tabletPortrait } from '../../styles/theme.styles';

const CompanyReviewCardDetailed = ({
  history,
  getReviewsByReviewId,
  singleReview: {
    reviews: { companyReview: singleCompanyReview },
  },
  singleCompanyReviews: {
    reviews: { companyReview },
  },
}) => {
  const reviewId = useParams().id;
  const review =
    companyReview.find(elem => elem.id === Number(reviewId)) ||
    singleCompanyReview;
  useEffect(() => {
    if (!Object.keys(review).length) {
      getReviewsByReviewId(reviewId);
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
        onClick={() => history.push(`/company-page/${review.company_id}`)}
      >
        <Icon type="left" />
        Back to Reviews
      </Button>
      <StyledCard>
        <h2 className="company-name">{review.name}</h2>
        <p>
          <div>Review:</div>
          <span className="review-div">{review.review}</span>
        </p>
        <div className="stars">
          <div>Rating:</div>
          <Rate disabled defaultValue={Number(review.ratings)} size="small" />
        </div>
      </StyledCard>
    </>
  );
};

const StyledCard = styled(Card)`
  max-width: 800px;
  padding: 20px 50px 50px 50px !important;

  @media ${mobilePortrait} {
    padding: 0 !important;
  }

  @media ${tabletPortrait} {
    padding: 0 !important;
  }

  p {
    font-size: 15px;
  }
  .company-name {
    font-size: 25px;
    text-align: center;
    margin: 0;
    margin-bottom: 20px;
    font-weight: 1000px;
  }
  .review-div {
    font-size: 20px;
  }
`;

export default connect(state => state, {
  getReviewsByReviewId,
})(CompanyReviewCardDetailed);
