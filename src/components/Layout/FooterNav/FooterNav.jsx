import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { mobilePortrait, tabletPortrait } from '../../../styles/theme.styles';

const StyledDiv = styled.div`
  background: #bb1333;
  display: flex;
  padding: 5px 10px;
  justify-content: center;
  color: #ffffff;
  margin-top: 20px;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem; /* Footer height */

  @media ${mobilePortrait} {
    padding: 0 !important;
  }

  @media ${tabletPortrait} {
    padding: 0 !important;
  }

  a {
    margin: 0 1rem;
    transition: transform 250ms;
    display: inline-block;
    color: #ffffff;
  }

  a:hover {
    transform: translateY(-3px);
  }
  .social-handle {
    display: flex;
    text-align: right;
    margin-right: 15%;
  }
  .copy-right {
    margin-right: 10%;
  }
  .tagline {
    text-align: left;
    margin-right: 15%;
  }
  @media only screen and (max-width: 1125px) {
    .social-handle {
      margin-right: 10%;
    }
    .tagline {
      margin-right: 10%;
    }
    .copy-right {
      margin-right: 7.5%;
    }
  }
  @media only screen and (max-width: 900px) {
    .social-handle {
      margin-right: 7%;
    }
    .tagline {
      margin-right: 7%;
    }
    .copy-right {
      margin-right: 5%;
    }
  }
  @media only screen and (max-width: 775px) {
    .social-handle {
      margin-right: 4%;
    }
    .tagline {
      margin-right: 4%;
    }
    .copy-right {
      margin-right: 2.5%;
    }
  }
  @media only screen and (max-width: 705px) {
    .tagline {
      display: none;
    }
    justify-content: space-evenly;
  }
  @media only screen and (max-width: 359px) {
    a {
      margin: 0 0.2rem;
      font-size: 10px;
    }
  }
`;

export default function Footer() {
  return (
    <StyledDiv>
      <div className="tagline">
        Built by Lambda students, for Lambda students.
      </div>
      <div className="copy-right"> &copy; 2020 LambdaDoor</div>
      <div className="social-handle">
        <a
          href="https://www.linkedin.com/in/onyedikachi-martins-28b890101/"
          className="twitter"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/onyedikachi-martins-28b890101/"
          className="facebook"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/onyedikachi-martins-28b890101/"
          className="linkdIn"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </StyledDiv>
  );
}
