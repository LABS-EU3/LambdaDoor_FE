import React from 'react';
import { useParams } from 'react-router-dom';
import { Rate, Spin } from 'antd';
import styled from 'styled-components';
import { mobilePortrait, tabletPortrait } from '../../styles/theme.styles';
import CompanySalaryChart from '../CompanySalaryChart';

const StyledDiv = styled.div`
  max-width: 800px;
  padding: 50px !important;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h2 {
    font-size: 2rem;
    margin-bottom: 4px;
  }
  @media ${mobilePortrait} {
    padding: 0 !important;
  }

  @media ${tabletPortrait} {
    padding: 0 !important;
    width: 98%;
  }

  .location-rating {
    display: flex;
    justify-content: space-between;
    .ant-rate {
      padding-left: 1rem !important;
      margin-bottom: 40px;
    }
    @media ${mobilePortrait} {
      flex-direction: column;
    }
  }
  .company-type {
    margin-top: 1rem;
  }
  p {
    font-size: 1rem;
    margin-top: 0.5rem;
  }
  span {
    font-size: 1rem;
  }

  .text-info {
    margin-right: 20px;
  }

  .visual-info {
    margin-top: 50px;

    @media ${mobilePortrait} {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

const CompanyCard = props => {
  const { companies } = props;
  const companyId = useParams().id;
  if (companies.length === 0) return <Spin />;
  const company = companies.find(elem => elem.id === Number(companyId));
  return (
    <StyledDiv>
      <div className="textInfo">
        <h2>{company.name}</h2>
        <div className="location-rating">
          <p>{company.location}</p>
          <span>
            Average Rating:
            <Rate disabled defaultValue={Number(company.average_rating)} />
          </span>
        </div>
        <a target="_blank" rel="noopener noreferrer" href={company.website}>
          {company.website}
        </a>
        <p className="company-type">
          Company Type: &nbsp;
          {company.type}
        </p>
        <p className="description">
          Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reiciendis, iusto labore? Quae distinctio quam reprehenderit! Id est
          perspiciatis, cum recusandae nesciunt sapiente eius ex, pariatur
          obcaecati veniam dignissimos nihil ipsum.
          {/* I've added the placeholder text above for now as we don't yet have descriptions in the db. Further styling is to be done when the salary component is added. (Lisa) */}
          {company.description}
        </p>
      </div>

      <div className="visual-info">
        <CompanySalaryChart />
      </div>
    </StyledDiv>
  );
};

export default CompanyCard;
