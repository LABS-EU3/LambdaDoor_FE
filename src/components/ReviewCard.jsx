/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Rate } from 'antd';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin: 10px;
`;

const StyledH3 = styled.h3`
  font-family: Roboto;
`;

export default function ReviewCard(props) {
  const { text, name } = props;
  
  return (
    <StyledDiv>
      <Card style={{ width: 400, height: 280 }}>
        <div>
          <StyledH3>Company Name: {name}</StyledH3>
          <p>{text}</p>
          <Rate disabled defaultValue={4} />
        </div>
      </Card>
    </StyledDiv>
  );
}
