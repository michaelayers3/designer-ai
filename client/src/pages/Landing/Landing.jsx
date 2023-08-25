import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Auth from "../../utils/auth";
import {
  LandingSubtitle,
  LandingTitle,
  LandingPage,
  TitleSection,
  LoginSection,
  LightButton,
  DarkButton,
  LandingSubText,
  LoginSectionContainer,
  LoginSectionTitle,
  BackArrow,
} from "./LandingStyle";


import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";


const Home = () => {

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const handleBack = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  return (
    <>
      <LandingPage>
        <TitleSection>
          <LandingTitle>DESIGNER AI</LandingTitle>
          <LandingSubText>&lt;!doctype html&gt;</LandingSubText>
          <LandingSubText>&lt;html&gt;</LandingSubText>
          <LandingSubText>&lt;head&gt;</LandingSubText>
          <LandingSubtitle>
            &lt;h2&gt;Virtual Website Builder&lt;h2&gt;
          </LandingSubtitle>
          <LandingSubText>&lt;/head&gt;</LandingSubText>
          <LandingSubText>&lt;/html&gt;</LandingSubText>
        </TitleSection>
        <LoginSection>
          <LoginSectionContainer>
            <LoginSectionTitle>Design Now</LoginSectionTitle>
            
            {Auth.loggedIn() ? (
              <>
                <Link to="/me">
                  <LightButton>View Designs</LightButton>
                </Link>
                <Link to="/design">
                  <LightButton>New Design</LightButton>
                </Link>
                <DarkButton onClick={logout}>Log Out</DarkButton>
              </>
            ) : (
              <>
                {!showLogin && !showSignup && (
                  <>
                
                    <LightButton onClick={() => setShowLogin(true)}>
                      Log In
                    </LightButton>
                   
                    <DarkButton onClick={() => setShowSignup(true)}>
                      Sign Up
                    </DarkButton>
                  </>
                )}
                
                {showLogin && (
                <div>
                  <Login />
                  <BackArrow onClick = {handleBack}> <i class="fa fa-arrow-left" aria-hidden="true"></i></BackArrow>
                  </div>
                )}
                
                {showSignup && (
                <div>
                   <Signup />
                   <BackArrow onClick = {handleBack}> <i class="fa fa-arrow-left" aria-hidden="true"></i></BackArrow>
                   </div>
                )}
              </>
            )}
          </LoginSectionContainer>
        </LoginSection>
      </LandingPage>
    </>
  );
};

export default Home;
