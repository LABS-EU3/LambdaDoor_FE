import React from 'react';
// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Upload, Icon, Button, message } from 'antd';
import {
  mobileLandscape,
  mobilePortrait,
  primaryGrey,
} from '../styles/theme.styles';
import Logo from './Logo';

const SideNav = ({ visible }) => {
  return (
    <StyledContainer className={visible ? 'show-drawer' : null}>
      <Logo smaller />

      <div className="user-profile-wrap">
        <div>
          <div className="user-avatar" />
          <Button type="primary" icon="download" />
        </div>
      </div>

      <nav className="navlinks">
        {
          //<NavLink />
          // <NavLink />
          // <NavLink />
        }
      </nav>
    </StyledContainer>
  );
};

export default SideNav;

const StyledContainer = styled.div`
  max-width: 250px;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  background: ${primaryGrey};
  @media ${mobilePortrait} {
    height: 100vh;
    overflow-y: auto;
    position: fixed;
    top: 0;
    left: -300px;
    width: 100%;
    z-index: 3;
    max-width: 300px;
    transition: all 0.25s linear;
    &.show-drawer {
    left: 0;
  }
  
  }
 
  .user-profile-wrap {
    padding: 5rem 0 2rem;
    /* @media ${mobilePortrait} {
      display: none; */
    }
  }

  .user-avatar {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: #bb1333;
    @media ${mobilePortrait} {
      width: 30px;
      height: 30px;
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      @media ${mobilePortrait} {
        display: none;
    }
  }

`;
