import React, { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
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
  ColorFormInput,
  ColorInputContainer,
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
      } catch (error) {
        console.log('add to query:', error);
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
    refetchQueries: [{query: QUERY_ME}],

    
    
  });
  
  console.log("addWireframe:", addWireframe.data);
  
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
          addTypename: false,
        },
      });
      
      // setUserText('');
    } catch (err) {
      console.log(addWireframe.data);
      
        navigate(`/me`);
      console.log('add wireframe:', err);
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
            <DesignInputTitle>Other Features</DesignInputTitle>
            <DesignFormInput
              name="designStyle"
              placeholder="Other Features..."
              type="text"
              value={designStyle}
              onChange={handleChange}
            ></DesignFormInput>
          <ColorInputContainer>
          <InputContainer>
            <DesignInputTitle>Primary Color</DesignInputTitle>
            <ColorFormInput
              name="primaryColor"
              placeholder="Primary Color..."
              type="color"
              value={primaryColor}
              onChange={handleChange}
            ></ColorFormInput>
          </InputContainer>
          <InputContainer>
            <DesignInputTitle>Secondary Color</DesignInputTitle>
            <ColorFormInput
              name="secondaryColor"
              placeholder="Secondary Color..."
              type="color"
              value={secondaryColor}
              onChange={handleChange}
            ></ColorFormInput>
          </InputContainer>
          </ColorInputContainer>
          </InputContainer>

          {loading ? (
            <div className="col-12 my-3 bg-success text-white p-3">
              Please wait while your wireframe is being generated...
            </div>
          ) : (
            <>
              <SubmitButton type="submit">Create New Design</SubmitButton>
              {/* {!loading && (
            <Link clasname = 'col-12 my-3 bg success text-white p-3' to={`/wireframes/${addWireframe._id}`}>Go to My Profile</Link>
          )} */}
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
