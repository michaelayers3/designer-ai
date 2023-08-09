import React from "react";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Editor from "../../components/CodeDisplay/Editor";
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
  console.log("wireframe title", wireframe.websiteTitle);

  if (loading) {
    return <div>bingbong...</div>;
  }
  return (
    <>
      <Header />
      <DesignContainer>
        <DesignDetailsContainer>
         <DesignTitle>{wireframe.websiteTitle}</DesignTitle>
  {/* //           <Editor wireframeId={wireframe._id} /> */}
            <CodeDisplay code= {wireframe.apiResponseText || "Nope "} />
            {/* <Editor
            language="javascript"
            initialValue={wireframe.apiResponseText || ""}
            wireframeId={wireframeId}
          /> */}
        </DesignDetailsContainer>
       </DesignContainer>
       </>
  );

};

export default SingleWireframe;
