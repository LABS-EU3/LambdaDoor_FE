/* eslint-disable no-nested-ternary */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import CompanySearchCard from './CompanySearchCard';
import SalarySearchCard from './SalarySearchCard';
import InterviewSearchCard from './InterviewSearchCard';

const SearchResults = ({ search: { isSearching, searchResults }, history }) => {
  console.log('is searching', isSearching);
  return (
    <CardContainer>
      {!isSearching && searchResults[1] === 'companies' ? (
        searchResults[0].map(company => (
          <CompanySearchCard
            key={company.id}
            name={company.name}
            location={company.location}
            website={company.website}
            type={company.type}
            id={company.id}
            history={history}
          />
        ))
      ) : !isSearching && searchResults[1] === 'salaries' ? (
        searchResults[0].map(salaryReview => (
          <SalarySearchCard
            key={salaryReview.id}
            name={salaryReview.name}
            salary={salaryReview.salary}
            job_title={salaryReview.job_title}
            id={salaryReview.id}
            company_id={salaryReview.company_id}
            history={history}
          />
        ))
      ) : !isSearching && searchResults[1] === 'interviews' ? (
        searchResults[0].map(interviewReview => (
          <InterviewSearchCard
            key={interviewReview.id}
            name={interviewReview.name}
            text={interviewReview.text}
            website={interviewReview.website}
            type={interviewReview.type}
            id={interviewReview.id}
            interest={interviewReview.interest}
            history={history}
          />
        ))
      ) : (
        <p>Spinner</p>
      )}
    </CardContainer>
  );
};

export default withRouter(connect(state => state)(SearchResults));

const CardContainer = styled.div`
  display: flex;
  flex-direction: table-row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
