/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Typography, Alert } from 'antd';
import styled from 'styled-components';
import axios from 'axios';
import decode from 'jwt-decode';

import { connect } from 'react-redux';
import { loginUser, setAuthenticated } from '../state/actions/auth';

import {
  tabletPortrait,
  tabletLandscape,
  mobileLandscape,
  mobilePortrait,
  FlexFunc,
} from '../styles/theme.styles';
import Logo from '../components/Logo';
import background from '../assets/img/lambda-door-lp-vector.svg';

const { Title, Paragraph } = Typography;

const HomeContainer = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: top right;
  background-attachment: fixed;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;

  @media ${tabletPortrait} {
    background-position: -180px 50px;
  }
  @media ${tabletLandscape} {
    background-position: bottom left;
  }
  @media ${mobileLandscape} {
    background-image: none;
  }
`;

const HomeContentContainer = styled.div`
  ${FlexFunc('column', 'space-between', 'flex-start')};
  height: 100%;
  width: 50%;
  padding: 1% 10%;

  @media ${tabletPortrait} {
    align-items: center;
    width: 100%;
    padding: 5% 5%;
  }
  @media ${tabletLandscape} {
    align-items: center;
    width: 100%;
    padding: 5% 5%;
  }
  @media ${mobilePortrait} {
    text-align: center;
    font-size: 12px;
  }
  @media ${mobileLandscape} {
    text-align: center;
    color: black;
    padding: 2% 5%;
  }
`;

const OnboardingContainer = styled.div`
  padding-bottom: 10%;
  ${FlexFunc('column', 'space-between', 'flex-start')};
  h1 {
    font-weight: 500;
    font-size: 64px;
    line-height: 64px;
    font-family: 'Roboto', san-serif;
    margin-bottom: 10px;
  }
  div {
    font-size: 20px;
    line-height: 32px;
  }

  @media ${tabletPortrait} {
    align-items: center;
    width: 100%;
    text-align: center;
    padding: 0 5%;
  }
  @media ${tabletLandscape} {
    align-items: center;
    width: 100%;
    text-align: center;
    padding: 0 20%;
  }
  @media ${mobilePortrait} {
    padding-bottom: 50px;
    h1 {
      font-size: 32px;
      line-height: 48px;
    }
    div {
      font-size: 16px;
      line-height: 24px;
    }
  }
  @media ${mobileLandscape} {
    h1 {
      font-size: 32px;
      line-height: 48px;
    }
    div {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;
// eslint-disable-next-line no-shadow
const Home = ({ history, loginUser, setAuthenticated }) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const { userId, name, email, profilePicture } = decode(token);
      setAuthenticated(userId, name, email, profilePicture);
      history.push('/dashboard');
    }

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const errorData = urlParams.get('error');

    const getUserDetails = async () => {
      const {
        data: {
          user_id: userId,
          user: { name, email, image_1024: profilePicture },
        },
      } = await axios.get(
        `https://slack.com/api/oauth.access?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&code=${code}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`
      );
      await loginUser(userId, name, email, profilePicture);

      history.push('/dashboard');
    };

    const handleError = () => {
      setError(errorData);
      history.push('/');
    };

    if (code) getUserDetails();
    if (errorData) handleError();
  }, []);

  return (
    <HomeContainer>
      <HomeContentContainer>
        <Logo />

        <OnboardingContainer>
          <Title>Lambda Door</Title>

          <Paragraph>
            The one-stop portal for Lambda graduates looking for company
            information in the quest for a job.
          </Paragraph>

          <a
            href={`https://slack.com/oauth/authorize?scope=identity.basic,identity.email,identity.team,identity.avatar&client_id=${process.env.REACT_APP_CLIENT_ID}`}
          >
            <img
              alt="Sign in with Slack"
              height="40"
              width="172"
              src="https://platform.slack-edge.com/img/sign_in_with_slack.png"
              srcSet="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x"
            />
          </a>
          {error && (
            <Alert
              message="An error occured while signing in!!"
              type="error"
              showIcon
              closable
              style={{
                fontSize: '16px',
                marginTop: '10px',
                width: '100%',
                maxWidth: '300px',
              }}
              onClose={() => setError(null)}
            />
          )}
        </OnboardingContainer>

        <Paragraph style={{ color: 'white' }}>
          Built by Lambda students, for Lambda students.
        </Paragraph>
      </HomeContentContainer>
    </HomeContainer>
  );
};

export default connect(null, { loginUser, setAuthenticated })(Home);
