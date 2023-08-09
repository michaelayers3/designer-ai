import React from "react";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import EditDesignForm from "../../components/EditDesignForm";
import Header from "../../components/Header";
import CodeDisplay from "../../components/CodeDisplay/CodeDisplay";

import { QUERY_SINGLE_WIREFRAME } from "../../utils/queries";
import {
  DesignContainer,
  DesignDetailsContainer,
  DesignTitle,
} from "./DesignStyle";

const SingleWireframe = () => {
  const { wireframeId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_WIREFRAME, {
    variables: { wireframeId: wireframeId },
  });

  const wireframe = data?.wireframe || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Header />
      <DesignContainer>
        <DesignDetailsContainer>
          <DesignTitle>{wireframe.websiteTitle}</DesignTitle>
            <EditDesignForm wireframeId={wireframe._id} />
            <CodeDisplay code= {wireframe.apiResponseText || " "} />
        </DesignDetailsContainer>
      </DesignContainer>
    </>
  );
};

export default SingleWireframe;
