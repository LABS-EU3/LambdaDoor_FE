/* eslint-disable camelcase */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Rate } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobilePortrait } from '../../styles/theme.styles';

const StyledDiv = styled.div`
  margin: 10px;
  @media ${mobilePortrait} {
    width: 100%;
  }
`;

const StyledH3 = styled.h3`
  font-family: Roboto;
`;

const StyledCardDiv = styled.div`
  width: 350px;
  height: 200px;
  @media ${mobilePortrait} {
    width: 98%;
    /* min-width: 200px; */
    /* max-width: 200px; */
    height: 200px;
  }
`;

export default function TopRatedCard(props) {
  const { text, name, id, rating } = props;
  return (
    <Link to={`topratings/${id}`}>
      <StyledDiv>
        <Card>
          <StyledCardDiv>
            <StyledH3>Company Name: {name}</StyledH3>
            <p>{text}</p>
            <Rate disabled defaultValue={Math.floor(Number(rating))} />
          </StyledCardDiv>
        </Card>
      </StyledDiv>
    </Link>
  );
}
