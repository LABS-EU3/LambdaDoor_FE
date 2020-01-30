import React from 'react';
import { Icon } from 'antd';
import styled from 'styled-components';

function AppInfoContainer(props) {
  return (
    <StyledDiv infoVisible={props.infoVisible}>
      <TextBox>
        <div className="heading">
          <h2>Features</h2>
          <Icon type="arrow-up" className="arrow-up" onClick={props.hideInfo} />
        </div>
        <InfoBox>
          <p className="left-outer">
            No need to sign up: Lambda students have automatic access. Just sign
            in via Slack.
          </p>
          <p className="left-center">
            Leave company reviews, salary reviews and interview reviews publicly
            or anonymously.
          </p>
          <p className="right-center">
            Access up to date information about companies in your area or around
            the world.
          </p>
          <p className="right-outer">
            Email referrals: contact fellow students at the click of a button
            with questions about the companies you're interested in.
          </p>
        </InfoBox>
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
  /* margin: 50px auto; */
  width: 80%;
  height: 70%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  h2 {
    font-size: 35px;
    font-family: 'Roboto';
    margin-bottom: 0;
  }
  .heading {
    width: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .arrow-up {
      font-size: 30px;
    }
  }
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  p {
    width: 25%;
    padding: 1rem;
    font-size: 18px;
  }
`;
