/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ReviewList from '../../components/ReviewList/ReviewList';
import TopRatedList from '../../components/TopRated/TopRatedList';
import JobTitleVisualization from '../../components/JobTitleVisualization';
import { editProfile } from '../../state/actions/user';
import { getLocation } from '../../utils/getLocation';
import MyReviewList from '../../components/MyReviews/MyReviewList';

import { LoginUser, SetAuthenticated } from '../../state/actions/auth';

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
    <StyledContainer>
      <div className="top-layout">
        <div>
          <h2>Top Rated Companies</h2>
          <TopRatedList />
        </div>
        <div>
          <h2>Popular Job Roles</h2>
          <JobTitleVisualization />
        </div>
      </div>
      <div className="bottom-layout">
        <h2>Recommended Based on Location</h2>
        <ReviewList />
      </div>
    </StyledContainer>
  );
};
export default connect(state => state, {
  LoginUser,
  SetAuthenticated,
  editProfile,
})(UserDashboard);

const StyledContainer = styled.div`
  h2 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }
  .top-layout {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    & > div {
      width: calc(50% - 1.5rem);
    }
  }

  .bottom-layout {
    margin-top: 3rem;
  }
`;
