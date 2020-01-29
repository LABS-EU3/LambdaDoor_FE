import React from 'react';
import { Button, Icon, Skeleton, Card } from 'antd';
import { connect } from 'react-redux';
import { useParams, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const DetailedInterviewSearchCard = ({
  search: { searchResults },
  history,
}) => {
  const reviewId = useParams().id;
  const review = searchResults[0].find(elem => elem.id === Number(reviewId));

  const handleCompanyClick = e => {
    e.stopPropagation();
    history.push(`/company-page/${review.company_id}`);
  };

  return (
    <InterviewCardContainer>
      <Button
        style={{
          marginBottom: '30px',
          border: '1px solid #BB1333',
          color: '#BB1333',
        }}
        onClick={() => history.goBack()}
      >
        <Icon type="left" />
        Back to Results
      </Button>
      <div className="title-div">
        <h1 onClick={handleCompanyClick}>{review.name}</h1>
      </div>
      <div>{review.text}</div>
      <div>{review.interest}</div>
    </InterviewCardContainer>
  );
};

export default withRouter(connect(state => state)(DetailedInterviewSearchCard));

const InterviewCardContainer = styled.div`
  h1 {
    margin-bottom: 0;
    padding-top: 35px !important;
    font-size: 20px;
    font-weight: 900;
    transition: 1s hover;
    &:hover {
      opacity: 0.6;
      cursor: pointer;
    }
    &:active {
      transform: scale(1.05);
    }
  }
`;
