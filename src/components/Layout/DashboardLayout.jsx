/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Button, Icon } from 'antd';
import styled from 'styled-components';
import SideNav from '../SideNav';
import SearchForm from '../Search';
import PrivateRoute from '../Router/PrivateRoute';
import { primaryGrey, textGrey } from '../../styles/theme.styles';

const DashboardLayout = ({ component: Component, ...rest }) => {
  return (
    <PrivateRoute
      {...rest}
      component={matchProps => (
        <StyledContainer>
          <SideNav />
          <div className="main-container">
            <div className="top-bar">
              <SearchForm />
              <Button type="link">
                Sign Out
                <Icon type="right" />
              </Button>
            </div>
            <div className="main-content">
              <Component {...matchProps} />
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

  .main-container {
    width: calc(100% - 250px);
    height: 100%;
  }

  .top-bar {
    width: 100%;
    padding: 1.5rem 1.5rem 2.5rem 0;
    background: ${primaryGrey};
    display: flex;
    align-items: center;
    justify-content: space-between;

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
  }
`;
