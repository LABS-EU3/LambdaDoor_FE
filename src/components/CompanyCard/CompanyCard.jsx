import React from 'react';
import { useParams } from 'react-router-dom';
import { Rate, Spin, Card } from 'antd';
import styled from 'styled-components';
import { mobilePortrait, tabletPortrait } from '../../styles/theme.styles';

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
  .location-rating {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      margin: 0;
    }
    .ant-rate {
      padding-left: 1rem !important;
    }
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
  console.log(company);
  return (
    <StyledDiv>
      <h2>{company.name}</h2>
      <div className="location-rating">
        <p>{company.location}</p>
        <span>
          Average Rating:
          <Rate defaultValue={Number(company.average_rating)} />
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
        {company.description}
      </p>
    </StyledDiv>
  );
};

export default CompanyCard;
