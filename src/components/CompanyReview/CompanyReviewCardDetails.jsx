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
        onClick={() => history.push(`/company-page/${reviewId}`)}
      >
        <Icon type="left" />
        Back to Reviews
      </Button>
      {/* {companyReview.map(review => ( */}
      <StyledCard>
        <div className="card-top">
          <h2>
            Company Name
            {review.name}
          </h2>
        </div>
        <p>
          <i>
            <div>Review Headline:</div>
            {review.review_headline}
          </i>
        </p>
        <i>
          <div>Review</div>
          <span>{review.review}</span>
        </i>
        <div className="stars">
          <div>Rating:</div>
          <Rate disabled defaultValue={Number(review.ratings)} size="small" />
        </div>
      </StyledCard>
      {/* ))} */}
    </>
  );
};

const StyledCard = styled(Card)`
  max-width: 800px;
  padding: 50px !important;

  @media ${mobilePortrait} {
    padding: 0 !important;
  }

  @media ${tabletPortrait} {
    padding: 0 !important;
  }

  p {
    font-size: 20px;
  }
  .title-div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 70%;
    margin: 0;
    margin-bottom: 20px;
    span {
      margin-bottom: 0;
    }
    @media ${mobilePortrait} {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin: 0;
      width: 100%;
      span {
        margin: 0;
        font-size: 16px;
      }
      h2 {
        margin: 0;
        font-size: 18px;
        width: 100%;
      }
    }
    @media ${tabletPortrait} {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      margin: 0;
      width: 100%;
      span {
        margin: 0;
        font-size: 18px;
      }
      h2 {
        /* margin: 20px; */
        font-size: 20px;
        width: 50%;
      }
    }
  }
  .ratings {
    display: flex;
    width: 50%;
    justify-content: space-between;
    margin-bottom: 20px;
    @media ${mobilePortrait} {
      justify-content: flex-start;
      margin: 0;
      margin-top: 20px;
      width: 100%;

      .stars {
        transform: scale(0.8);
        width: 60%;
      }
      h2 {
        margin: 0;
        font-size: 18px;
        width: 50%;
      }
    }
    @media ${tabletPortrait} {
      justify-content: flex-start;
      margin: 0;
      margin-top: 20px;
      width: 100%;

      h2 {
        margin: 0;
        font-size: 20px;
        width: 50%;
      }
    }
  }
  .switch-statements {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
    @media ${mobilePortrait} {
      flex-direction: column;
      margin-top: 20px;
    }
    @media ${tabletPortrait} {
      flex-direction: column;
      margin-top: 20px;
    }
    .current-employee {
      display: flex;
      width: 50%;
      justify-content: space-between;
      align-items: center;

      @media ${mobilePortrait} {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        h2 {
          margin: 0;
          font-size: 18px;
        }
      }

      @media ${tabletPortrait} {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;

        h2 {
          margin: 0;
          font-size: 20px;
        }
      }
    }
  }

  .headline-div {
    margin-bottom: 20px;
    display: flex;
    align-items: center;

    @media ${mobilePortrait} {
      flex-direction: column;
      align-items: flex-start;
      h2 {
        margin: 0;
        font-size: 18px;
        width: 100%;
      }
      .headline {
        margin-left: 0;
        font-size: 16px;
      }
    }
    @media ${tabletPortrait} {
      flex-direction: column;
      align-items: flex-start;

      h2 {
        margin: 0;
        font-size: 20px;
        width: 100%;
      }
      .headline {
        margin-left: 0;
        font-size: 18px;
      }
    }
    h2 {
      margin: 0;
    }
  }

  h2 {
    margin: 0;
  }

  .headline {
    font-size: 1.1rem;
    margin: 0;
    margin-left: 42px;
    width: 50%;
  }
  .review-body {
    @media ${mobilePortrait} {
      h2 {
        font-size: 18px;
        margin-bottom: 0;
      }
    }
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
  getReviewsByReviewId,
})(CompanyReviewCardDetailed);
