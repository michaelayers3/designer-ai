import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_WIREFRAME } from "../../utils/mutations";
import { QUERY_WIREFRAMES, QUERY_ME } from "../../utils/queries";

import {
  DesignFormContainer,
  InputContainer,
  DesignFormInput,
  DesignInputTitle,
  FormContainer,
  SubmitButton,
} from "./NewDesignFormStyle";

import Auth from "../../utils/auth";

const WireframeForm = () => {
  const [websiteTitle, setWebsiteTitle] = useState("");
  const [primaryColor, setPrimaryColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");
  const [websitePurpose, setWebsitePurpose] = useState("");
  const [designStyle, setDesignStyle] = useState("");

  const navigate = useNavigate();

  const [addWireframe, { loading, error }] = useMutation(ADD_WIREFRAME, {
    update(cache, { data: { addWireframe } }) {
      try {
        const { wireframes } = cache.readQuery({ query: QUERY_WIREFRAMES });

        cache.writeQuery({
          query: QUERY_WIREFRAMES,
          data: { wireframes: [addWireframe, ...wireframes] },
        })
      } catch (e) {
        console.log("error:", error);
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME }) || { me: { wireframes: [] } };
      const updatedMe = {
        ...me,
        wireframes: [...me.wireframes, addWireframe],
      };

      cache.writeQuery({
        query: QUERY_ME,
        // data: { me: { ...me, wireframes: [...me.wireframes, addWireframe] } },
        data: { me: updatedMe },
      });
    },
    
    // onCompleted: ({addWireframe}) => {
    //   navigate(`/wireframes/${addWireframe._id}`);
    // },
  });

  console.log("addWireframe:", addWireframe._id);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addWireframe({
        variables: {
          websiteTitle,
          primaryColor,
          secondaryColor,
          websitePurpose,
          designStyle,
        },
      });

      // setUserText('');
    } catch (err) {
      console.log("error");
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "websiteTitle") {
      setWebsiteTitle(value);
    }
    if (name === "primaryColor") {
      setPrimaryColor(value);
    }
    if (name === "secondaryColor") {
      setSecondaryColor(value);
    }
    if (name === "websitePurpose") {
      setWebsitePurpose(value);
    }
    if (name === "designStyle") {
      setDesignStyle(value);
    }
    // setFormState({ ...formState, wireframeText: value });
  };

  return (
    <DesignFormContainer>
        <FormContainer onSubmit={handleFormSubmit}>
          <InputContainer>
            <DesignInputTitle>Website Title</DesignInputTitle>
            <DesignFormInput
              name="websiteTitle"
              placeholder="Title..."
              type="text"
              value={websiteTitle}
              onChange={handleChange}
            ></DesignFormInput>
          </InputContainer>
          <InputContainer>
            <DesignInputTitle>Primary Color</DesignInputTitle>
            <DesignFormInput
              name="primaryColor"
              placeholder="Primary Color..."
              type="color"
              value={primaryColor}
              onChange={handleChange}
            ></DesignFormInput>
          </InputContainer>
          <InputContainer>
            <DesignInputTitle>Secondary Color</DesignInputTitle>
            <DesignFormInput
              name="secondaryColor"
              placeholder="Secondary Color..."
              type="color"
              value={secondaryColor}
              onChange={handleChange}
            ></DesignFormInput>
          </InputContainer>
          <InputContainer>
            <DesignInputTitle>Website Purpose</DesignInputTitle>
            <DesignFormInput
              name="websitePurpose"
              placeholder="Purpose..."
              type="text"
              value={websitePurpose}
              onChange={handleChange}
            ></DesignFormInput>
          </InputContainer>
          <InputContainer>
            <DesignInputTitle>Design Style</DesignInputTitle>
            <DesignFormInput
              name="designStyle"
              placeholder="Style..."
              type="text"
              value={designStyle}
              onChange={handleChange}
            ></DesignFormInput>
          </InputContainer>

          {loading ? (
            <div className="col-12 my-3 bg-success text-white p-3">
              Please wait while your wireframe is being generated...
            </div>
          ) : (
            <>
              <SubmitButton type="submit">Create New Design</SubmitButton>
              {/* {error && (
                <div className="col-12 my-3 bg-danger text-white p-3">{error.message}</div>
              )} */}
            </>
          )}
        </FormContainer>
    </DesignFormContainer>
  );
};

export default WireframeForm;
