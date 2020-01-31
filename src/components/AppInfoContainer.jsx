import React from 'react';
import { Icon } from 'antd';
import styled from 'styled-components';
import { tabletPortrait } from '../styles/theme.styles';

function AppInfoContainer({ infoVisible, hideInfo }) {
  return (
    <StyledDiv infoVisible={infoVisible}>
      <TextBox>
        <div className="heading">
          <h2>Features</h2>
        </div>
        <InfoBox>
          <p className="left-outer">
            <Icon type="slack-circle" theme="filled" className="icon" />
            No need to sign up: Lambda students have automatic access. Just sign
            in via Slack.
          </p>
          <p className="left-center">
            <Icon type="edit" theme="filled" className="icon" />
            Leave company reviews, salary reviews and interview reviews,
            publicly or anonymously.
          </p>
          <p className="right-center">
            <Icon type="info-circle" theme="filled" className="icon" />
            Access up to date information about companies in your area or around
            the world.
          </p>
          <p className="right-outer">
            <Icon type="mail" theme="filled" className="icon" />
            Email referrals: ask questions at the click of a button about the
            companies you're interested in.
          </p>
        </InfoBox>
        <a className="back-link" onClick={hideInfo}>
          Go back &nbsp;
          <Icon
            type="up-circle"
            theme="filled"
            style={{ fontSize: 22, color: '#bb1333' }}
            onClick={hideInfo}
          />
        </a>
      </TextBox>
    </StyledDiv>
  );
}

export default AppInfoContainer;

const StyledDiv = styled.div`
  position: absolute;
  background-color: #bb1333;
  transition: all 0.2s ease-in-out;
  top: ${props => (props.infoVisible ? `0%` : `100%`)};
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextBox = styled.div`
  width: 80%;
  height: 600px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  h2 {
    font-size: 35px;
    font-family: 'Roboto';
    margin-bottom: 0;
    text-align: center;
  }
  .back-link {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    font-size: 20px;
    margin-top: 30px;
  }
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;

  p {
    width: 25%;
    height: 200px;
    padding: 2rem;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    margin-top: 100px;
    @media ${tabletPortrait} {
      width: 50%;
    }
  }

  @media ${tabletPortrait} {
    flex-wrap: wrap;
  }

  .left-outer {
    border-right: 1px solid grey;
    .icon {
      font-size: 30px !important;
    }
  }

  .left-center {
    border-right: 1px solid grey;
    .icon {
      font-size: 30px !important;
    }
    @media ${tabletPortrait} {
      border-right: none;
    }
  }

  .right-center {
    border-right: 1px solid grey;
    .icon {
      font-size: 30px !important;
    }
  }

  .right-outer {
    .icon {
      font-size: 30px !important;
    }
  }
`;
