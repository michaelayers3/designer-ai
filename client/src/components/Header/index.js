import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";
import {
  HeaderContainer,
  HeaderTitle,
  ButtonContainer,
  HeaderTitleContainer,
  DarkButton,
  MenuTitle,
  LogoutButton,
  MenuButtons,
} from "./HeaderStyle";
import "./hamburgerStyle.css";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <HeaderContainer>
      <HeaderTitleContainer>
        <HeaderTitle to="/">DESIGNER AI</HeaderTitle>
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
                <>
                  <MenuTitle>
                    <h1>{Auth.getProfile().data.username}</h1>
                    <LogoutButton onClick={logout}>Log Out</LogoutButton>
                  <ButtonContainer>
                    <MenuButtons to="/design">Create A Design</MenuButtons>
                    <MenuButtons to="/me">Saved Designs</MenuButtons>
                  </ButtonContainer>
                  </MenuTitle>
                </>
              ) : (
                <ButtonContainer>
                  <Link to="/">
                    <DarkButton>Log In</DarkButton>
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
