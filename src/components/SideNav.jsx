/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Typography, Spin } from 'antd';
import styled from 'styled-components';

import { editProfile } from '../state/actions/user';

import Logo from './Logo';
import Avatar from './Avatar';
import { primaryGrey } from '../styles/theme.styles';
import openNotification from '../utils/openNotification';

const { Paragraph } = Typography;

const StyledSpin = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const SideNav = ({ user, editProfile, isLoading }) => {
  const handleChange = async fullname => {
    await editProfile({ full_name: fullname }, user.id);
    openNotification('Full name updated');
  };

  return (
    <StyledContainer>
      {isLoading ? (
        <StyledSpin>
          <Spin />
        </StyledSpin>
      ) : (
        <>
          <Logo smaller />
          <div className="user-profile-wrap">
            <Avatar userImage={user.profile_picture} />
            <Paragraph
              className="heading"
              editable={{ onChange: handleChange }}
            >
              {user.full_name}
            </Paragraph>
            <Paragraph>{user.username}</Paragraph>
          </div>
          <nav className="navlinks">
            <NavLink
              exact
              to="/dashboard"
              className="link"
              activeClassName="active"
            >
              Home
            </NavLink>
            <NavLink to="/manage-reviews" className="link">
              Manage Reviews
            </NavLink>
            <NavLink to="/leave-review" className="link">
              Leave a Review
            </NavLink>
          </nav>
        </>
      )}
    </StyledContainer>
  );
};

const mapStateToProps = state => ({
  user: state.authState.credentials,
  isLoading: state.authState.isLoading,
});

export default connect(mapStateToProps, { editProfile })(SideNav);

const StyledContainer = styled.div`
  max-width: 250px;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  background: ${primaryGrey};

  .link {
    color: #262626;
    display: block;
    font-weight: 500;
    font-size: 1rem;
    padding: 0.25rem 0;

    &.active {
      color: #bb1333;
    }
  }

  .user-profile-wrap {
    padding: 5rem 0 2rem;

    .ant-typography,
    .ant-typography p {
      margin-bottom: 0;
    }

    .ant-typography.heading {
      font-size: 1.1rem;
      font-weight: 600;
      color: #000;
    }
  }
`;
