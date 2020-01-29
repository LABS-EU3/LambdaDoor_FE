import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';

const InterviewSearchCard = ({ history, name, text, interest, id }) => {
  return (
    <StyledCard onClick={() => history.push(`/search-results/interview/${id}`)}>
      <h2>{name}</h2>
      <p>{interest}</p>
      <p>
        {text.slice(0, 100)}
        ...
      </p>
    </StyledCard>
  );
};

export default InterviewSearchCard;

const StyledCard = styled(Card)`
  height: 200px;
  width: 350px;
`;
