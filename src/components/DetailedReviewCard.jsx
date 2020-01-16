/* eslint-disable no-shadow */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import {
  Rate,
  Switch,
  Icon,
  Card,
  Button,
  Spin,
  Skeleton,
  Popconfirm,
  Typography,
} from 'antd';
import styled from 'styled-components';
import { withRouter, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  deleteCompanyReview,
  updateCompanyReview,
} from '../state/actions/reviews';
import openNotification from '../utils/openNotification';

const { Paragraph } = Typography;
let updatedReview;

const DetailedReviewCard = ({
  history,
  reviews: {
    reviews: { company },
  },
  deleteCompanyReview,
  updateCompanyReview,
}) => {
  const [isEditing, setEditing] = useState(false);
  const reviewId = useParams().id;
  const review = company.find(elem => elem.id === Number(reviewId));

  useEffect(() => {
    updatedReview = { ...review };
    delete updatedReview['name'];
  }, [review]);

  const handleDelete = async id => {
    await deleteCompanyReview(id);
    history.push(`/reviews/`);
    openNotification('Review deleted successfully!');
  };

  const updateReview = (key, value) => {
    updatedReview[key] = value;
  };

  const handleEdit = async () => {
    await updateCompanyReview(updatedReview);
    setEditing(false);
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
          <h2>
            Company Name
            <span className="company">{review.name}</span>
          </h2>
        </div>
        <div className="ratings">
          <h2>Overall Rating</h2>
          <Rate
            disabled={!isEditing}
            defaultValue={review.ratings}
            onChange={e => updateReview('ratings', e)}
          />
        </div>
        <div className="switch-statements">
          <h2>I am a current employee</h2>
          {review.is_currently_employed ? (
            <Switch
              checkedChildren={<Icon type="check" />}
              unCheckedChildren={<Icon type="close" />}
              defaultChecked
              disabled={!isEditing}
              onChange={e => {
                updateReview('is_currently_employed', e === true ? 1 : 0);
              }}
            />
          ) : (
            <Switch
              checkedChildren={<Icon type="check" />}
              unCheckedChildren={<Icon type="close" />}
              disabled={!isEditing}
              onChange={e => {
                updateReview('is_currently_employed', e === true ? 1 : 0);
              }}
            />
          )}

          <h2>Accepting questions</h2>
          {review.is_accepting_questions ? (
            <Switch
              checkedChildren={<Icon type="check" />}
              unCheckedChildren={<Icon type="close" />}
              defaultChecked
              disabled={!isEditing}
              onChange={e => {
                updateReview('is_accepting_questions', e === true ? 1 : 0);
              }}
            />
          ) : (
            <Switch
              checkedChildren={<Icon type="check" />}
              unCheckedChildren={<Icon type="close" />}
              disabled={!isEditing}
              onChange={e => {
                updateReview('is_accepting_questions', e === true ? 1 : 0);
              }}
            />
          )}
        </div>
        <div>
          <div className="headline-div">
            <h2>Review Headline </h2>
            <Paragraph
              editable={{
                onChange: e => {
                  updateReview('review_headline', e);
                },
                editing: isEditing,
              }}
              className="editable-text headline"
            >
              {review.review_headline}
            </Paragraph>
          </div>
          <h2>Review</h2>
          <Paragraph
            className="editable-text"
            editable={{
              onChange: e => {
                updateReview('review', e);
              },
              editing: isEditing,
            }}
          >
            {review.review}
          </Paragraph>
        </div>
        <div className="buttons">
          {!isEditing && (
            <Popconfirm
              placement="bottom"
              title="Are you sure to delete this review?"
              onConfirm={() => handleDelete(review.id)}
              okText="Yes"
              cancelText="No"
            >
              <Button type="danger" size="medium">
                <Icon type="delete" /> Delete
              </Button>
            </Popconfirm>
          )}

          {isEditing ? (
            <Button
              style={{ backgroundColor: '#40A9FF', color: 'white' }}
              size="medium"
              onClick={handleEdit}
            >
              <span>
                <Icon type="save" /> Save
              </span>
            </Button>
          ) : (
            <Button
              style={{
                border: '1px solid #40A9FF',
                color: '#40A9FF',
              }}
              size="medium"
              onClick={() => setEditing(!isEditing)}
            >
              <span>
                <Icon type="edit" /> Edit
              </span>
            </Button>
          )}

          {isEditing && (
            <Button
              size="medium"
              type="danger"
              onClick={() => setEditing(false)}
            >
              <Icon type="close" /> Cancel
            </Button>
          )}
        </div>
      </StyledReview>
    </>
  );
};

const StyledReview = styled(Card)`
  max-width: 800px;
  padding: 50px !important;

  Paragraph {
    font-size: 20px;
  }
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
    display: flex;
    align-items: center;

    h2 {
      margin: 0;
    }
  }
  .headline {
    font-size: 1.1rem;
    margin: 0;
    margin-left: 42px;
    width: 50%;
  }
  .buttons {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    width: 30%;
  }

  .editable-text {
    .ant-typography-edit {
      display: none !important;
    }
  }
`;

export default withRouter(
  connect(state => state, { deleteCompanyReview, updateCompanyReview })(
    DetailedReviewCard
  )
);
