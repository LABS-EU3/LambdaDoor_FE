import React from 'react';
import { Button, Icon, Skeleton, Card } from 'antd';
import { connect } from 'react-redux';
import { useParams, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import currencies from '../../../utils/currencies';

let salaryFormatted;

const DetailedSalarySearchCard = ({ search: { searchResults }, history }) => {
  const reviewId = useParams().id;
  const review = searchResults[0].find(elem => elem.id === Number(reviewId));

  const currencyUnit = currencies.find(curr => curr.name === review.currency)
    .symbol;
  salaryFormatted = `${currencyUnit}${Number(review.salary)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;

  const handleCompanyClick = e => {
    e.stopPropagation();
    history.push(`/company-page/${review.company_id}`);
  };

  return (
    <SalaryCardContainer>
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

      <div className="salary-div">
        <h2>Salary</h2>
        <h3>{salaryFormatted}</h3>
      </div>

      <div className="interest">
        <h2>Job Category</h2>
        <h3>{review.interest}</h3>
      </div>

      <div className="description">
        <h2>Job Description</h2>
        <span>{review.description}</span>
      </div>

      <div className="bottom">
        <div className="contact">
          {review.is_accepting_questions ? (
            <p>
              Have questions?
              <Button>Contact Me</Button>
            </p>
          ) : (
            ''
          )}
        </div>
        <div className="username">{review.full_name}</div>
      </div>
    </SalaryCardContainer>
  );
};

export default withRouter(connect(state => state)(DetailedSalarySearchCard));

const SalaryCardContainer = styled.div`
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
