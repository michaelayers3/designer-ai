import React, {useState} from "react";
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
  UserName
} from "./HeaderStyle";
import "./hamburgerStyle.css";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);

    if (!sidebarOpen) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }
  };

  return (
    <HeaderContainer>
      <HeaderTitleContainer>
        <HeaderTitle to="/">DESIGNER AI</HeaderTitle>
      </HeaderTitleContainer>
      <div>
        <input type="checkbox" class="toggler" onChange={toggleSidebar} />
        <div class="hamburger">
          <div></div>
        </div>
        <div class="menu">
          <div>
            <ul>
              {Auth.loggedIn() ? (
                <>
                  <MenuTitle>
                    <UserName>{Auth.getProfile().data.username}</UserName>
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
