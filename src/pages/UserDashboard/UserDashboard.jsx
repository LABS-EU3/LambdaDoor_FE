/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import axios from 'axios';
import decode from 'jwt-decode';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { LoginUser, SetAuthenticated } from '../../state/actions/auth';
import ReviewList from '../../components/ReviewList/ReviewList';
import { editProfile } from '../../state/actions/user';
import { getLocation } from '../../utils/getLocation';

const StyledH1 = styled.h1`
  font-family: Roboto;
  padding-left: 9px;
`;

export const UserDashboard = ({
  authState: {
    credentials: { id, location },
  },
  LoginUser,
  SetAuthenticated,
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
        await LoginUser(userId, name, email, profilePicture);
      };
      if (code) {
        await getUserDetails();
      }
    }

    start();
  }, [history, LoginUser, SetAuthenticated]);

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
      <StyledH1>Top Rated Companies</StyledH1>
      <ReviewList />
      <br /> <br /> <br />
      <StyledH1>Recommended Based on Location</StyledH1>
      <ReviewList />
    </div>
  );
};
export default connect(state => state, {
  LoginUser,
  SetAuthenticated,
  editProfile,
})(UserDashboard);
