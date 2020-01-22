/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Rate } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobilePortrait } from '../../styles/theme.styles';

export default function ReviewCard(props) {
  const { text, name, id } = props;

  return (
    <div className="cards">
      <Link to={`interviews/${id}`}>
        <div>
          <h3>{name}</h3>
          <p>{text}</p>
        </div>
        <Rate disabled defaultValue={4} />
      </Link>
    </div>
  );
}
