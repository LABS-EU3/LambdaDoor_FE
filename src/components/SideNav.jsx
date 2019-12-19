import React from 'react';
// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Upload, Icon, Button, message } from 'antd';

import Logo from './Logo';
import { primaryGrey } from '../styles/theme.styles';


const SideNav = () => {
  return (
    <StyledContainer>
      <Logo smaller/>

      <div className="user-profile-wrap">
        <div>
          <div className="user-avatar"></div>
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
  )
};


export default SideNav;

const StyledContainer = styled.div`
  max-width: 250px;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  background: ${primaryGrey};

  .user-profile-wrap {
    padding: 5rem 0 2rem;
  }

  .user-avatar {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: #bb1333;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
`
