import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import { HeaderContainer, HeaderSubtitle, HeaderTitle, LoginButton, ProfileButton, SignupButton, LogoutButton, ButtonContainer, HeaderTitleContainer } from './HeaderStyle';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <HeaderContainer>
        <HeaderTitleContainer>
          <Link to="/">
            <HeaderTitle>DESIGNER AI</HeaderTitle>
          </Link>
          <HeaderSubtitle>VIRTUAL WEBSITE BUILDER</HeaderSubtitle>
        </HeaderTitleContainer>
        <ButtonContainer>
          {Auth.loggedIn() ? (
            <>
              <Link to="/me">
                <ProfileButton>View Designs</ProfileButton>
              </Link>
              <LogoutButton onClick={logout}>
                Logout
              </LogoutButton>
            </>
          ) : (
            <>
              <Link to="/login">
                <LoginButton>Login</LoginButton>
              </Link>
              <Link to="/signup">
                <SignupButton>Sign Up</SignupButton>
              </Link>
            </>
          )}
        </ButtonContainer>
    </HeaderContainer>
  );
};

export default Header;
