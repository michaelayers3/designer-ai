import React from "react";
import { Link } from "react-router-dom";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import Header from "../../components/Header";
import CodeDisplay from "../../components/CodeDisplay/CodeDisplay";

import Auth from "../../utils/auth";
import { QUERY_SINGLE_WIREFRAME, QUERY_USER, QUERY_ME } from "../../utils/queries"; 
import {
  DesignContainer,
  DesignDetailsContainer,
  DesignTitle,
} from "./DesignStyle";

const SingleWireframe = () => {
  const { wireframeId } = useParams();

  const { loading: wireframeLoading, data: wireframeData } = useQuery(QUERY_SINGLE_WIREFRAME, {
    variables: { wireframeId: wireframeId },
  });

  const wireframe = wireframeData?.wireframe || {};
  console.log("wireframe title", wireframe.websiteTitle);

  const { username: userParam } = useParams();

  const { loading: userLoading, data: userData } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = userData?.me || userData?.user || {};

  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (wireframeLoading || userLoading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Header />
      <DesignContainer>
        <DesignDetailsContainer>
          <Link to={`/me/`}>All Designs</Link>
          <DesignTitle>{wireframe.websiteTitle}</DesignTitle>
          <CodeDisplay code={wireframe.apiResponseText || " "} />
        </DesignDetailsContainer>
      </DesignContainer>
    </>
  );
};

export default SingleWireframe;
