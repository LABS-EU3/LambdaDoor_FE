/* eslint-disable react/self-closing-comp */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-wrap-multilines */
import React, { useEffect } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Rate, Card, Empty, Button } from 'antd';
import styled from 'styled-components';
import { getReviewsByCompanyId } from '../../state/actions/reviews';
import { mobilePortrait, tabletPortrait } from '../../styles/theme.styles';

const ReviewCard = styled.div`
  display: flex;
  flex-direction: row;
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
  margin: 2rem 1.5rem 1rem 0rem !important;
  width: 280px;
  height: 180px;
  padding-top: 1rem !important;
  font-size: 16px;
  cursor: pointer;

  span {
    font-size: 18px;
  }

  .stars {
    margin-top: 30px;
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
  history,
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
        <StyledCard
          key={companyReview.id}
          onClick={() => history.push(`/companyReviews/${companyReview.id}`)}
        >
          <p>
            Headline:
            <br />
            {companyReview.review_headline.length > 25 ? (
              <span>
                {companyReview.review_headline.slice(0, 25)}
                ...
              </span>
            ) : (
              <span>{companyReview.review_headline}</span>
            )}
          </p>
          <div className="stars">
            Rating:
            <br />
            <Rate disabled defaultValue={companyReview.ratings} size="small" />
          </div>
        </StyledCard>
      ))}
    </ReviewCard>
  );
};
export default withRouter(
  connect(state => state, {
    getReviewsByCompanyId,
  })(CompanyReviewCard)
);
