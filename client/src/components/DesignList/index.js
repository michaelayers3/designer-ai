import React from "react";
import { useMutation, useQuery} from "@apollo/client";
import { REMOVE_WIREFRAME } from "../../utils/mutations";
import { QUERY_WIREFRAMES, QUERY_ME } from "../../utils/queries";
import {
  DesignContainer,
  DesignTitle,
  LinkButton,
  LinkContainer,
} from "./DesignListStyle";
import "./DesignListCSS.css";

const WireframeList = ({ wireframes, showTitle }) => {

  const [removeWireframe] = useMutation(REMOVE_WIREFRAME);
  const { data: userData,  refetch: refetchUser } = useQuery(QUERY_ME);

  const handleDelete = async (wireframeId) => {
    console.log('handleDelete called with wireframeId:', wireframeId);

    try {
      await removeWireframe({
        variables: { wireframeId },
        // refetchQueries: [{ query: QUERY_WIREFRAMES }],
      });

      // Manually refetch the data to update the UI
      refetchUser();
    } catch (error) {
      console.error('Error deleting wireframe:', error);
    }
  };
  
  


  if (!wireframes.length) {
    return <h3>No Designs Yet</h3>;
  }

  return (
    <>
      {showTitle && <h3>{wireframes[0].websiteTitle}</h3>}
      {wireframes &&
        wireframes
        .slice()
        .reverse()
        .map((wireframe) => (
          <DesignContainer className="image-wrapper" key={wireframe._id}>
            <DesignTitle>{wireframe.websiteTitle}</DesignTitle>
            <LinkContainer className="details">
                <LinkButton to={`/wireframes/${wireframe._id}`}>View </LinkButton>
                <LinkButton onClick={() => {
                  if(window.confirm('Are you sure you want to delete this wireframe?')) {
                    handleDelete(wireframe._id);
                  }
                }}>Delete
                </LinkButton>
            </LinkContainer>
          </DesignContainer>
        ))}
    </>
  );
};

export default WireframeList;
