/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { Button, Icon, Skeleton, Card } from 'antd';
import { withRouter, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getSalaryReviewsByCompanyId } from '../../../state/actions/reviews';
import currencies from '../../../utils/currencies';

let salaryFormatted;

const SalaryReviewDetails = ({
  history,
  singleCompanyReviews: {
    reviews: { salaryReview },
  },
  getSalaryReviewsByCompanyId,
}) => {
  const { id, companyId } = useParams();
  const review = salaryReview.find(elem => elem.id === Number(id));
  if (review) {
    const currencyUnit = currencies.find(curr => curr.name === review.currency)
      .symbol;
    salaryFormatted = `${currencyUnit}${Number(review.salary)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
  }

  useEffect(() => {
    if (!review) {
      getSalaryReviewsByCompanyId(companyId);
    }
  }, []);

  return !salaryReview.length ? (
    <Skeleton />
  ) : (
    <div>
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
      <StyledCard>
        <div className="title-div">
          <h1>{review.name}</h1>
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
      </StyledCard>
    </div>
  );
};

const StyledCard = styled(Card)`
  @media (min-width: 1024px) {
    width: 60%;

    .interest {
      margin-top: 20px;
    }

    .description {
      margin-top: 20px;
    }
  }
`;

export default withRouter(
  connect(state => state, { getSalaryReviewsByCompanyId })(SalaryReviewDetails)
);
