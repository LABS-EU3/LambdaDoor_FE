/* eslint-disable no-shadow */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Rate, Switch, Icon, Card, Button, Spin, Skeleton } from 'antd';
import styled from 'styled-components';
import { withRouter, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteCompanyReview } from '../state/actions/reviews';
import openNotification from '../utils/openNotification';

const DetailedReviewCard = ({
  history,
  reviews: {
    reviews: { company },
  },
  deleteCompanyReview,
}) => {
  const reviewId = useParams().id;
  const review = company.find(elem => elem.id === Number(reviewId));

  const handleDelete = async id => {
    await deleteCompanyReview(id);
    history.push(`/reviews/`);
    openNotification('Review deleted successfully!');
  };

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
        onClick={() => history.push(`/reviews/`)}
      >
        <Icon type="left" />
        Back to Reviews
      </Button>
      <StyledReview>
        <div className="title-div">
          <h3>
            Company Name
            <span className="company">{review.name}</span>
          </h3>
        </div>
        <div className="ratings">
          <h3>Overall Rating</h3>
          <Rate disabled defaultValue={review.ratings} />
        </div>
        <div className="switch-statements">
          <h3>I am a current employee</h3>
          {review.is_currently_employed ? (
            <Switch
              checkedChildren={<Icon type="check" />}
              unCheckedChildren={<Icon type="close" />}
              defaultChecked
              disabled
            />
          ) : (
            <Switch
              checkedChildren={<Icon type="check" />}
              unCheckedChildren={<Icon type="close" />}
              disabled
            />
          )}

          <h3>Accepting questions</h3>
          {review.is_accepting_questions ? (
            <Switch
              checkedChildren={<Icon type="check" />}
              unCheckedChildren={<Icon type="close" />}
              defaultChecked
              disabled
            />
          ) : (
            <Switch
              checkedChildren={<Icon type="check" />}
              unCheckedChildren={<Icon type="close" />}
              disabled
            />
          )}
        </div>
        <div>
          <div className="headline-div">
            <h3>
              Review Headline{' '}
              <span className="headline">{review.review_headline}</span>
            </h3>
          </div>
          <h3>Review</h3>
          <p>{review.review}</p>
        </div>
        <div className="buttons">
          <Button
            type="danger"
            size="medium"
            onClick={() => handleDelete(review.id)}
          >
            <Icon type="delete" /> Delete
          </Button>
          <Button size="medium">
            <Icon type="edit" /> Edit
          </Button>
        </div>
      </StyledReview>
    </>
  );
};

const StyledReview = styled(Card)`
  max-width: 800px;
  padding: 50px !important;

  .title-div {
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin-bottom: 20px;
  }
  .company {
    font-size: 1.2rem;
    margin-left: 42px;
    margin-bottom: 20px;
  }
  .ratings {
    display: flex;
    width: 50%;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .switch-statements {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .headline-div {
    margin-bottom: 20px;
  }
  .headline {
    font-size: 1.2rem;
    margin-left: 42px;
    margin-bottom: 20px;
  }
  .buttons {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    width: 30%;
  }
`;

export default withRouter(
  connect(state => state, { deleteCompanyReview })(DetailedReviewCard)
);
