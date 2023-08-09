import React from "react";
import { useMutation } from "@apollo/client";
import { REMOVE_WIREFRAME } from "../../utils/mutations";

import {
  DesignContainer,
  DesignTitle,
  LinkButton,
  LinkContainer,
} from "./DesignListStyle";
import "./DesignListCSS.css";

const WireframeList = ({ wireframes, showTitle }) => {

  const [removeWireframe] = useMutation(REMOVE_WIREFRAME);

  const handleDelete = async (wireframeId) => {
    try {
      await removeWireframe({
        variables: { wireframeId },
        refetchQueries: [{query:'QUERY_WIREFRAMES'}]
      });
    } catch (error) {
      console.error('Error deleting wireframe:', error);
    }
  };

  if (!wireframes.length) {
    return <h3>No Designs Yet</h3>;
  }

  return (
    <>
      {showTitle && <h3>{wireframes.websiteTitle}</h3>}
      {wireframes &&
        wireframes.map((wireframes) => (
          <DesignContainer className="image-wrapper" key={wireframes._id}>
            <DesignTitle>{wireframes.websiteTitle}</DesignTitle>
            <LinkContainer className="details">
                <LinkButton to={`/wireframes/${wireframes._id}`}>View </LinkButton>
                <LinkButton onClick={() => handleDelete(wireframes._id)}>Delete</LinkButton>
            </LinkContainer>
          </DesignContainer>
        ))}
    </>
  );
};

export default WireframeList;
