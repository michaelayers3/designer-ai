import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";
import {
  HeaderContainer,
  HeaderSubtitle,
  HeaderTitle,
  LoginButton,
  ProfileButton,
  SignupButton,
  LogoutButton,
  ButtonContainer,
  HeaderTitleContainer,
} from "./Header2Style";
import "./hamburgerStyle.css";

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
      <div>
        <input type="checkbox" class="toggler" />
        <div class="hamburger">
          <div></div>
        </div>
        <div class="menu">
          <div>
            <ul>
              {Auth.loggedIn() ? (
                <ButtonContainer>
                  <Link to="/me">
                  <h1>Welcome {Auth.getProfile().data.username}</h1>
                  </Link>
                  <LogoutButton onClick={logout}>Logout</LogoutButton>
                </ButtonContainer>
              ) : (
                <ButtonContainer>
                  <Link to="/login">
                    <LoginButton>Login</LoginButton>
                  </Link>
                  <Link to="/signup">
                    <SignupButton>Sign Up</SignupButton>
                  </Link>
                </ButtonContainer>
              )}
              </ul>
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
