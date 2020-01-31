/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Typography, Alert, Icon } from 'antd';
import styled from 'styled-components';
import decode from 'jwt-decode';

import { connect } from 'react-redux';
import { LoginUser, SetAuthenticated } from '../../state/actions/auth';
import Footer from '../../components/Layout/FooterNav/FooterNav';

import {
  tabletPortrait,
  tabletLandscape,
  mobileLandscape,
  mobilePortrait,
  FlexFunc,
} from '../../styles/theme.styles';
import Logo from '../../components/Layout/SideNav/Logo';
import background from '../../assets/lambda-door-lp-vector.svg';
import AppInfoContainer from '../../components/AppInfoContainer';

const { Title, Paragraph } = Typography;

// eslint-disable-next-line no-shadow
export const Home = ({ history, SetAuthenticated }) => {
  const [error, setError] = useState(null);
  const [infoVisible, setInfoVisible] = useState(false);

  const viewInfo = () => {
    setInfoVisible(true);
  };

  const hideInfo = () => {
    setInfoVisible(false);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const { id } = decode(token);
      SetAuthenticated(id);
      history.push('/dashboard');
    }
  }, [history, SetAuthenticated]);

  return (
    <div>
      <HomeContainer infoVisible={infoVisible}>
        <HomeContentContainer>
          <Logo />

          <OnboardingContainer>
            <div className="title-and-arrow">
              <Title className="siteTitle">Lambda Door</Title>
              {/* <Icon
                type="down-circle"
                theme="filled"
                style={{ fontSize: 30, color: '#bb1333' }}
                onClick={viewInfo}
              /> */}
            </div>
            <Paragraph>
              The one-stop portal for Lambda graduates looking for company
              information in the quest for a job. &nbsp;
              <a onClick={viewInfo}>Learn more</a>
            </Paragraph>
            <a
              href={`https://slack.com/oauth/authorize?scope=identity.basic,identity.email,identity.team,identity.avatar&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`}
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
          <Paragraph style={{ color: 'white' }} className="tag-paragraph">
            Built by Lambda students, for Lambda students.
          </Paragraph>
        </HomeContentContainer>
      </HomeContainer>
      <AppInfoContainer infoVisible={infoVisible} hideInfo={hideInfo} />
      <Footer className="footer" />
    </div>
  );
};

export default connect(null, { LoginUser, SetAuthenticated })(Home);

const HomeContainer = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: top right;
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
  ${FlexFunc('column', 'flex-start')};
  height: 100%;
  width: 50%;
  padding: 1% 10%;

  .tag-paragraph {
    display: none;
  }
  @media (max-width: 705px) {
    .tag-paragraph {
      display: block;
      margin-bottom: 80px;
    }
    ${FlexFunc('column', 'space-between', 'flex-start')};
  }
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
  .title-and-arrow {
    display: flex;
    width: 75%;
    align-items: center;
    justify-content: space-between;
  }

  margin-top: 30%;
  @media (max-width: 705px) {
    margin-top: 0;
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
