import React from "react";
import { FooterContainer, FooterTitle, GithubLink } from "./FooterStyle";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTitle>@2023 Team-TBD | All Rights Reserved 
      <a href="https://github.com/michaelayers3/project-3">
        <GithubLink className="fab fa-github"></GithubLink>
      </a>
	  </FooterTitle>
    </FooterContainer>
  );
};

export default Footer;
