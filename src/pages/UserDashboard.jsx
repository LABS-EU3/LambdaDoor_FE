/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import axios from 'axios';
import decode from 'jwt-decode';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { loginUser, setAuthenticated } from '../state/actions/auth';
// import ReviewList from '../components/ReviewList';
import JobTitleVisualization from '../components/JobTitleVisualization';
import { editProfile } from '../state/actions/user';
import { getLocation } from '../utils/getLocation';

const StyledH1 = styled.h1`
  font-family: Roboto;
  padding-left: 9px;
`;

const UserDashboard = ({
  authState: {
    credentials: { id, location },
  },
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
        await setAuthenticated(id);
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

    start();
  }, [history, loginUser, setAuthenticated]);

  useEffect(() => {
    async function start() {
      const token = localStorage.getItem('token');

      if (token) {
        if (location === null) {
          await getLocation(id);
        }
      }
    }
    start();
  }, [location]);

  return (
    <div>
      <StyledH1>Latest Reviews</StyledH1>
      <JobTitleVisualization />
    </div>
  );
};
export default connect(state => state, {
  loginUser,
  setAuthenticated,
  editProfile,
})(UserDashboard);
