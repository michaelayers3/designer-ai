import React from "react";


// import DesignResults from "../../components/DesignResults";
import WireframeForm from '../../components/NewDesignForm';
import Header from "../../components/Header";

import {
  // DesignCodeContainer,
  DesignContainer,
  DesignDetailsContainer,
  DesignTitle,
} from "./DesignStyle";

const NewWireframeForm = () => {
  return (
    <>
      <Header />
      <DesignContainer>
        <DesignDetailsContainer>
          <DesignTitle>Create Your Design</DesignTitle>
            <WireframeForm />
        </DesignDetailsContainer>
      </DesignContainer>
    </>
  );
};

export default NewWireframeForm;
