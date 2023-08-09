import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_WIREFRAME } from "../../utils/mutations";

import {
  DesignFormContainer,
  InputContainer,
  DesignFormInput,
  DesignInputTitle,
  FormContainer,
  SubmitButton,
} from "./NewDesignFormStyle";

import Auth from "../../utils/auth";

// const ThoughtForm = () => {
//   const [thoughtText, setThoughtText] = useState("");

//   const [addThought, { error }] = useMutation(ADD_THOUGHT, {
//     update(cache, { data: { addThought } }) {
//       try {
//         const { thoughts } = cache.readQuery({ query: QUERY_THOUGHTS });

//         cache.writeQuery({
//           query: QUERY_THOUGHTS,
//           data: { thoughts: [addThought, ...thoughts] },
//         });
//       } catch (e) {
//         console.error(e);
//       }

//       // update me object's cache
//       const { me } = cache.readQuery({ query: QUERY_ME });
//       cache.writeQuery({
//         query: QUERY_ME,
//         data: { me: { ...me, thoughts: [...me.thoughts, addThought] } },
//       });
//     },
//   });

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const { data } = await addThought({
//         variables: {
//           thoughtText,
//           thoughtAuthor: Auth.getProfile().data.username,
//         },
//       });

//       setThoughtText("");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     if (name === "thoughtText" && value.length <= 280) {
//       setThoughtText(value);
//     }
//   };
const WireframeForm = () => {
  const [websiteTitle, setWebsiteTitle] = useState('');
  const [primaryColor, setPrimaryColor] = useState('');
  const [secondaryColor, setSecondaryColor] = useState('');
  const [websitePurpose, setWebsitePurpose] = useState('');
  const [designStyle, setDesignStyle] = useState('');
  const [apiResponseText, setApiResponseText] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [formState, setFormState] = useState({ userText: '' });

  const [addWireframe, { error, data }] = useMutation(ADD_WIREFRAME);

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
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'websiteTitle') {
      setWebsiteTitle(value);
    }
    if (name === 'primaryColor') {
      setPrimaryColor(value);
    }
    if (name === 'secondaryColor') {
      setSecondaryColor(value);
    }
    if (name === 'websitePurpose') {
      setWebsitePurpose(value);
    }
    if (name === 'designStyle') {
      setDesignStyle(value);
    }
      // setFormState({ ...formState, wireframeText: value });
    }

  return (
    <DesignFormContainer>
      {Auth.loggedIn() ? (
        <FormContainer onSubmit={handleFormSubmit}>
          <InputContainer>
            <DesignInputTitle>Website Title</DesignInputTitle>
            <DesignFormInput
              name="websiteTitle"
              placeholder="Title..."
              type= "text"
              value={websiteTitle}
              onChange={handleChange}
            ></DesignFormInput>
          </InputContainer>
          <InputContainer>
            <DesignInputTitle>Primary Color</DesignInputTitle>
            <DesignFormInput
              name="primaryColor"
              placeholder="Primary Color..."
              type= "color"
              value={primaryColor}
              onChange={handleChange}
            ></DesignFormInput>
          </InputContainer>
          <InputContainer>
            <DesignInputTitle>Secondary Color</DesignInputTitle>
            <DesignFormInput
              name="secondaryColor"
              placeholder="Secondary Color..."
              type= "color"
              value={secondaryColor}
              onChange={handleChange}
            ></DesignFormInput>
          </InputContainer>
          <InputContainer>
            <DesignInputTitle>Website Purpose</DesignInputTitle>
            <DesignFormInput
              name="websitePurpose"
              placeholder="Purpose..."
              type= "text"
              value={websitePurpose}
              onChange={handleChange}
            ></DesignFormInput>
          </InputContainer>
          <InputContainer>
            <DesignInputTitle>Design Style</DesignInputTitle>
            <DesignFormInput
              name="designStyle"
              placeholder="Style..."
              type= "text"
              value={designStyle}
              onChange={handleChange}
            ></DesignFormInput>
          </InputContainer>

          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">{error.message}</div>
          )}
          <SubmitButton type="submit">Create New Design</SubmitButton>
        </FormContainer>
      ) : (
        <p>
          You need to be logged in to create a design. Please <Link to="/">login</Link>
        </p>
      )}
    </DesignFormContainer>
  );
};

export default WireframeForm;
