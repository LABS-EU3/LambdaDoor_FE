import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';

const SalarySearchCard = ({ history, name, salary, job_title, id }) => {
  return (
    <StyledCard onClick={() => history.push(`/search-results/salary/${id}`)}>
      <h2>{name}</h2>
      <p>{salary}</p>
      <p>{job_title}</p>
    </StyledCard>
  );
};

export default SalarySearchCard;

const StyledCard = styled(Card)`
  height: 200px;
  width: 350px;
`;
