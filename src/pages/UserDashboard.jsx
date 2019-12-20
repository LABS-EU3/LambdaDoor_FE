/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { actions } from '../state/actions';
import ReviewList from '../components/ReviewList';

const StyledH1 = styled.h1`
  font-family: Roboto;
  padding-left: 9px;
`;

const UserDashboard = props => {
  return (
    <div>
      <StyledH1>Latest Reviews</StyledH1>
      <ReviewList />
    </div>
  );
};

export default connect(state => state, actions)(UserDashboard);
