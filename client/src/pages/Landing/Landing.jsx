import React, { useState } from "react";
import { Link } from "react-router-dom";

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
} from "./LandingStyle";

// Import the components to be displayed when Login or Sign Up is clicked
import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";

const Home = () => {
  // State variable to manage the visibility of the buttons and displayed component
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
            {/* Check if either Login or Sign Up button is clicked to show the respective component */}
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
                    {/* Set the state variable to show the Login component */}
                    <LightButton onClick={() => setShowLogin(true)}>
                      Log In
                    </LightButton>
                    {/* Set the state variable to show the Signup component */}
                    <DarkButton onClick={() => setShowSignup(true)}>
                      Sign Up
                    </DarkButton>
                  </>
                )}
                {/* Display the Login component when the Login button is clicked */}
                {showLogin &&  <Login />}
                
                {/* (
                <div>
                  <button onClick = {handleBack}>Back</button>
                  <Login />
                  </div>
                )} */}
                {/* Display the Signup component when the Sign Up button is clicked */}
                {showSignup && <Signup />}
                
                {/* // (
                // <div>
                //    <button onClick = {handleBack}>Back</button>
                //    <Signup />
                //    </div>
                // )} */}
              </>
            )}
          </LoginSectionContainer>
        </LoginSection>
      </LandingPage>
    </>
  );
};

export default Home;
