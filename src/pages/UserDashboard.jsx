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
  useEffect(() => {
    function showPosition(position) {
      const result = `${position.coords.latitude}  ${position.coords.longitude}`;
      console.log(result);
    }

    function showError(error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.log('User denied the request for Geolocation.');
          break;
        case error.POSITION_UNAVAILABLE:
          console.log('Location information is unavailable.');
          break;
        case error.TIMEOUT:
          console.log('The request to get user location timed out.');
          break;
        case error.UNKNOWN_ERROR:
          console.log('An unknown error occurred.');
          break;
        default:
          return null;
      }
      return null;
    }
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
      } else {
        console.log('Geolocation is not supported by this browser.');
      }
    }

    getLocation();
  }, []);

  return (
    <div>
      <StyledH1>Latest Reviews</StyledH1>
      <ReviewList />
    </div>
  );
};

export default connect(state => state, actions)(UserDashboard);
