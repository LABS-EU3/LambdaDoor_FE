/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Card, Spin, Empty } from 'antd';
import { withRouter } from 'react-router-dom';

const InterviewReviews = ({
  singleCompany: {
    reviews: { interview },
  },
  history,
  companyId,
}) => {
  return !interview.length ? (
    <StyledEmpty>
      <Empty
        image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
        imageStyle={{
          height: 60,
        }}
        description={
          <span className="text">
            Oops!! <br />
            No interview reviews yet
          </span>
        }
      />
    </StyledEmpty>
  ) : (
    interview.map(elem => {
      return (
        <StyledCard
          key={elem.id}
          onClick={() =>
            history.push(`/company/${companyId}/interview/${elem.id}`)
          }
        >
          <div className="card-top">
            <h2>{elem.name}</h2>
          </div>
          {elem.text.length > 30 ? (
            <span>{elem.text.slice(0, 30)}...</span>
          ) : (
            <span>{elem.text}</span>
          )}
        </StyledCard>
      );
    })
  );
};

const StyledCard = styled(Card)`
  margin: 1.5rem !important;
  margin-left: 0 !important;
  width: 270px;
  height: 200px;
  cursor: pointer;

  .card-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.8rem;
    height: 60px;
    h2 {
      margin-bottom: 0;
      padding-top: 35px !important;
      font-size: 20px;
      font-weight: 900;
    }
  }

  .stars {
    margin-top: 20px;
    font-size: 10px;
  }
`;

const StyledEmpty = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  height: 40vh;
  align-items: center;
  .text {
    font-size: 20px;
  }
`;

export default withRouter(connect(state => state)(InterviewReviews));
