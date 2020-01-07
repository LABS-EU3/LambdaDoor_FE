/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import axios from 'axios';
import decode from 'jwt-decode';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Spin } from 'antd';
import { loginUser, setAuthenticated } from '../state/actions/auth';
import ReviewList from '../components/ReviewList';

const StyledH1 = styled.h1`
  font-family: Roboto;
  padding-left: 9px;
`;

const UserDashboard = ({
  authState: { isLoggedIn },
  loginUser,
  setAuthenticated,
  history,
}) => {
  useEffect(() => {
    async function start() {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      const token = localStorage.getItem('token');
      if (!code && !token) {
        history.push('/');
      }
      if (token) {
        const { id } = decode(token);
        setAuthenticated(id);
      }
      const getUserDetails = async () => {
        const {
          data: {
            user_id: userId,
            user: { name, email, image_1024: profilePicture },
          },
        } = await axios.get(
          `https://slack.com/api/oauth.access?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&code=${code}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`
        );
        window.history.replaceState(null, null, window.location.pathname);
        await loginUser(userId, name, email, profilePicture);
      };
      if (code) {
        await getUserDetails();
      }
    }

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

    start();
  }, [history, loginUser]);

  return (
    <div>
      <StyledH1>Latest Reviews</StyledH1>
      <ReviewList />
    </div>
  );
};
export default connect(state => state, { loginUser, setAuthenticated })(
  UserDashboard
);
