import React from "react";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import DesignResults from "../../components/DesignResults";
import NewDesignForm from '../../components/NewDesignForm';
import Header from "../../components/Header";

import { QUERY_SINGLE_THOUGHT } from "../../utils/queries";
import {
  DesignCodeContainer,
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
          <DesignTitle>Create Your Design</DesignTitle>
            <NewDesignForm/>
          <DesignCodeContainer>
            <DesignResults comments={thought.comments} />
          </DesignCodeContainer>
        </DesignDetailsContainer>
      </DesignContainer>
    </>
  );
};

export default SingleThought;
