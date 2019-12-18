/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Typography, Alert } from 'antd';
import styled from 'styled-components';
import axios from 'axios';
import {
  tabletPortrait,
  tabletLandscape,
  mobileLandscape,
  mobilePortrait,
  FlexFunc,
} from '../styles/theme.styles';
import background from '../img/lambda-door-lp-vector.svg';
import logo from '../img/lambda-logo.png';

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

const LambdaLogo = styled.div`
  align-self: flex-start;
  img {
    width: 4rem;
  }
  @media ${mobilePortrait} {
    img {
      width: 2rem;
    }
  }
  @media ${mobileLandscape} {
    img {
      width: 3rem;
    }
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
    margin: 10px;
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

const Home = ({ history }) => {
  const [error, setError] = useState(1);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const errorData = urlParams.get('error');

    const getUserDetails = async () => {
      const res = await axios.get(
        `https://slack.com/api/oauth.access?client_id=154966377728.878377460261&client_secret=ed4cfc69cc2729d41315f95395ec8edb&code=${code}`
      );
      // Save data to redux store (and database)
      console.log(res.data);

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
        <LambdaLogo>
          <img src={logo} alt="Lambda School" />
        </LambdaLogo>

        <OnboardingContainer>
          <Title>Lambda Door</Title>

          <Paragraph>
            The one-stop portal for Lambda graduates looking for company
            information in the quest for a job.
          </Paragraph>

          <a href="https://slack.com/oauth/authorize?scope=identity.basic,identity.email,identity.team,identity.avatar&client_id=154966377728.878377460261">
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

export default Home;
