/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import axios from 'axios';
import decode from 'jwt-decode';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { loginUser, setAuthenticated } from '../state/actions/auth';
import ReviewList from '../components/ReviewList';
import { editProfile } from '../state/actions/user';

const StyledH1 = styled.h1`
  font-family: Roboto;
  padding-left: 9px;
`;

const UserDashboard = ({
  authState: {
    isLoading,
    credentials: { id },
  },
  loginUser,
  setAuthenticated,
  history,
  editProfile,
}) => {
  useEffect(() => {
    async function showPosition(position, id) {
      const { longitude } = position.coords;
      const { latitude } = position.coords;
      const {
        data: { results },
      } = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&result_type=country&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
      );

      await editProfile({ longitude }, id);
      await editProfile({ latitude }, id);
      await editProfile({ location: results[0].formatted_address }, id);
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
    function getLocation(id) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => showPosition(position, id),
          showError
        );
      } else {
        console.log('Geolocation is not supported by this browser.');
      }
    }
    async function start() {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      const token = localStorage.getItem('token');
      if (!code && !token) {
        history.push('/');
      }
      if (token) {
        const { id } = decode(token);
        await setAuthenticated(id);
        getLocation(id);
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
        getLocation(id);
      }
    }

    start();
  }, [history, loginUser, setAuthenticated]);

  return (
    <div>
      <StyledH1>Latest Reviews</StyledH1>
      <ReviewList />
    </div>
  );
};
export default connect(state => state, {
  loginUser,
  setAuthenticated,
  editProfile,
})(UserDashboard);
