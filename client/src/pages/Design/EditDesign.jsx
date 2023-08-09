import React from "react";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import DesignResults from "../../components/DesignResults";
import EditDesignForm from "../../components/EditDesignForm";
import Header from "../../components/Header";
import CodeDisplay from "../../components/CodeDisplay/CodeDisplay";

import { QUERY_SINGLE_THOUGHT } from "../../utils/queries";
import {
  DesignContainer,
  DesignDetailsContainer,
  DesignTitle,
} from "./DesignStyle";

const SingleThought = () => {
  const { thoughtId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_THOUGHT, {
    variables: { thoughtId: thoughtId },
  });

  const thought = data?.thought || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Header />
      <DesignContainer>
        <DesignDetailsContainer>
          <DesignTitle>{thought.thoughtText}</DesignTitle>
            <EditDesignForm thoughtId={thought._id} />
            <CodeDisplay code= {thought.comments[0]?.commentText || " "} />
            <DesignResults comments={thought.comments} />
        </DesignDetailsContainer>
      </DesignContainer>
    </>
  );
};

export default SingleThought;
