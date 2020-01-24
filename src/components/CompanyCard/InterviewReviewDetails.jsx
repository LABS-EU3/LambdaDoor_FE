/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Icon, Skeleton } from 'antd';
import styled from 'styled-components';
import { getInterviewReviews } from '../../state/actions/singleCompanyReviews';

const InterviewReviewDetails = ({
  singleCompany: {
    reviews: { interview },
  },
  history,
  getInterviewReviews,
}) => {
  const { id, companyId } = useParams();
  let review = interview.find(elem => elem.id === Number(id));
  useEffect(() => {
    review = interview.find(elem => elem.id === Number(id));
  }, [interview]);

  useEffect(() => {
    if (!review) {
      getInterviewReviews(companyId);
    }
  }, []);
  return !review ? (
    <Skeleton />
  ) : (
    <StyledDiv>
      <Button
        style={{
          marginBottom: '30px',
          border: '1px solid #BB1333',
          color: '#BB1333',
        }}
        onClick={() => history.goBack()}
      >
        <Icon type="left" />
        Back
      </Button>
      <div className="title-div">
        <h2>Company Name</h2>
        <span className="company">{review.name}</span>
      </div>
      <div className="review-body">
        <h2>Review</h2>
        <p>{review.text}</p>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  @media (min-width: 1024px) {
    width: 60%;
  }
  .review-body {
    margin-top: 30px;
  }
`;

export default withRouter(
  connect(state => state, { getInterviewReviews })(InterviewReviewDetails)
);
