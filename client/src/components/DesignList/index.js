import React from "react";
import {
  DesignContainer,
  DesignTitle,
  LinkButton,
  LinkContainer,
} from "./DesignListStyle";
import "./DesignListCSS.css";

const DesignList = ({ thoughts, title, showTitle = true }) => {
  if (!thoughts.length) {
    return <h3>No Designs Yet</h3>;
  }

  return (
    <>
      {showTitle && <h3>{title}</h3>}
      {thoughts &&
        thoughts.map((thought) => (
          <DesignContainer className="image-wrapper" key={thought._id}>
            <DesignTitle>{thought.thoughtText}</DesignTitle>
            <LinkContainer className="details">
                <LinkButton to={`/thoughts/${thought._id}`}>View </LinkButton>
                <LinkButton to={`/thoughts/${thought._id}`}>Edit </LinkButton>
                <LinkButton to={`/thoughts/${thought._id}`}>Delete </LinkButton>
            </LinkContainer>
          </DesignContainer>
        ))}
    </>
  );
};

export default DesignList;
