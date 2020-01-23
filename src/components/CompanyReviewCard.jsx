/* eslint-disable react/self-closing-comp */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-wrap-multilines */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Rate, Card, Empty, Button } from 'antd';
import styled from 'styled-components';
import { getReviewsByCompanyId } from '../state/actions/reviews';
import { mobilePortrait, tabletPortrait } from '../styles/theme.styles';

const ReviewCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

const StyledCard = styled(Card)`
  margin: 1rem 1.5rem 1rem 0rem !important;
  width: 270px;
  height: 300px;
  cursor: pointer;

  .card-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.3rem;
    height: 50px;
    h2 {
      margin-bottom: 0;
      padding-top: 5px !important;
      font-size: 18px;
      font-weight: 900;
    }
  }

  .stars {
    margin-top: 20px;
    font-size: 14px;
  }

  @media ${mobilePortrait} {
    padding: 0 !important;
  }
  @media ${tabletPortrait} {
    padding: 0 !important;
  }
`;

const CompanyReviewCard = ({
  getReviewsByCompanyId,
  singleCompanyReviews: {
    reviews: { companyReview },
  },
}) => {
  const companyId = useParams().id;
  useEffect(() => {
    getReviewsByCompanyId(companyId);
  }, []);
  return companyReview.length === 0 ? (
    <StyledEmpty>
      <Empty
        image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
        imageStyle={{
          height: 60,
        }}
        description={
          <span className="text">
            No review found yet, perhaps none has been given.
          </span>
        }
      >
        <Button>Post a Review</Button>
      </Empty>
    </StyledEmpty>
  ) : (
    <ReviewCard>
      {companyReview.map(companyReview => (
        <StyledCard>
          <div className="card-top">
            <h2>
              Company Name
              {companyReview.name}
            </h2>
          </div>
          <p>
            <i>
              <div>Review Headline:</div>
              {companyReview.review_headline.length > 50 ? (
                <span>
                  {companyReview.review_headline.slice(0, 50)}
                  ...
                </span>
              ) : (
                <span>{companyReview.review_headline}</span>
              )}
            </i>
          </p>
          <i>
            <div>Review</div>
            {companyReview.review.length > 30 ? (
              <span>
                {companyReview.review.slice(0, 30)}
                ...
              </span>
            ) : (
              <span>{companyReview.review}</span>
            )}
          </i>
          <div className="stars">
            <div>Rating:</div>
            <Rate disabled defaultValue={companyReview.ratings} size="small" />
          </div>
        </StyledCard>
      ))}
    </ReviewCard>
  );
};
export default connect(state => state, {
  getReviewsByCompanyId,
})(CompanyReviewCard);
