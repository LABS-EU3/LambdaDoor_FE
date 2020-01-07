/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { Button, Icon } from 'antd';
import SideNav from '../SideNav';
import SearchForm from '../Search';
// import PrivateRoute from '../Router/PrivateRoute';
  

import { primaryGrey, textGrey } from '../../styles/theme.styles';
import { mobileLandscape, mobilePortrait } from '../../styles/theme.styles';
import logo from '../../assets/img/lambda-logo.png';

const DashboardLayout = ({ component: Component, ...rest }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <Route
      {...rest}
      render={props => (
        <StyledContainer>
          <SideNav visible={visible}/>
          <div className="main-container">
            <div className="top-bar">
              <button
                type="button"
                className="mobile-logo-btn"
                onClick={toggleVisible}
              >
                <img src={logo} alt="Lambda logo" />
              </button>
              <SearchForm />
              <div className="sign-out-btn">
                <Button type="link">
                  Sign Out
                  <Icon type="right" />
                </Button>
              </div>
            </div>
            <div className="main-content">
              <Component {...props} />
            </div>
          </div>
        </StyledContainer>
      )}
    />
  );
};

export default DashboardLayout;

const StyledContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  @media ${mobilePortrait} {
    height: 100%;
  }

  .mobile-logo-btn {
    display: none;
    @media ${mobilePortrait} {
      display: inherit;
      width: 50px;
      padding: 12px;
      img {
        width: 1.88rem;
      }
    }
  }

  .main-container {
    width: calc(100% - 250px);
    height: 100%;
    @media ${mobilePortrait} {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  }

  .top-bar {
    width: 100%;
    padding: 1.5rem 1.5rem 2.5rem 0;
    background: ${primaryGrey};
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media ${mobilePortrait} {
      height: 80px;
      background-color: #fafafa;
      padding: 5px;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 100;
    }

    .ant-input {
      background: transparent;
    }

    .ant-input-affix-wrapper {
      font-size: 18px;
    }

    .ant-btn-link {
      color: ${textGrey};
      font-weight: 500;
    }
  }

  .main-content {
    padding: 1.5rem;
    @media ${mobilePortrait} {
      padding-top: 100px;
    }
  }

  .sign-out-btn {
    @media ${mobilePortrait} {
      display: none;
    }
  }
`;
