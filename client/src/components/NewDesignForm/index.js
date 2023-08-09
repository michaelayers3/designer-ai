import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_THOUGHT } from "../../utils/mutations";
import { QUERY_THOUGHTS, QUERY_ME } from "../../utils/queries";

import {
  DesignFormContainer,
  InputContainer,
  DesignFormInput,
  DesignInputTitle,
  FormContainer,
  SubmitButton,
} from "./NewDesignFormStyle";

import Auth from "../../utils/auth";

const ThoughtForm = () => {
  const [thoughtText, setThoughtText] = useState("");

  const [addThought, { error }] = useMutation(ADD_THOUGHT, {
    update(cache, { data: { addThought } }) {
      try {
        const { thoughts } = cache.readQuery({ query: QUERY_THOUGHTS });

        cache.writeQuery({
          query: QUERY_THOUGHTS,
          data: { thoughts: [addThought, ...thoughts] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, thoughts: [...me.thoughts, addThought] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addThought({
        variables: {
          thoughtText,
          thoughtAuthor: Auth.getProfile().data.username,
        },
      });

      setThoughtText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "thoughtText" && value.length <= 280) {
      setThoughtText(value);
    }
  };

  return (
    <DesignFormContainer>
      {Auth.loggedIn() ? (
        <FormContainer onSubmit={handleFormSubmit}>
          <InputContainer>
            <DesignInputTitle>Title</DesignInputTitle>
            <DesignFormInput
              name="thoughtText"
              placeholder="Title..."
              value={thoughtText}
              onChange={handleChange}
            ></DesignFormInput>
          </InputContainer>
          <InputContainer>
            <DesignInputTitle>Website Type</DesignInputTitle>
            <DesignFormInput
              name="thoughtText"
              placeholder="Website Type..."
              value={thoughtText}
              onChange={handleChange}
            ></DesignFormInput>
          </InputContainer>
          <InputContainer>
            <DesignInputTitle>Primary Color</DesignInputTitle>
            <DesignFormInput
              name="thoughtText"
              placeholder="Primary Color..."
              value={thoughtText}
              onChange={handleChange}
            ></DesignFormInput>
          </InputContainer>
          <InputContainer>
            <DesignInputTitle>Secondary Color</DesignInputTitle>
            <DesignFormInput
              name="thoughtText"
              placeholder="Secondary Color..."
              value={thoughtText}
              onChange={handleChange}
            ></DesignFormInput>
          </InputContainer>

          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {error.message}
            </div>
          )}
          <SubmitButton type="submit">CREATE NEW DESIGN</SubmitButton>
        </FormContainer>
      ) : (
        <p>
          You need to be logged in to create a design. Please{" "}
          <Link to="/">login</Link>
        </p>
      )}
    </DesignFormContainer>
  );
};

export default ThoughtForm;
