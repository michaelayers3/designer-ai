import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_COMMENT } from "../../utils/mutations";

import Auth from "../../utils/auth";
import {
  DesignFormContainer,
  DesignFormInput,
  DesignInputTitle,
  FormContainer,
  SubmitButton,
} from "./EditDesignFormStyle";

const CommentForm = ({ thoughtId }) => {
  const [commentText, setCommentText] = useState("");

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComment({
        variables: {
          thoughtId,
          commentText,
          commentAuthor: Auth.getProfile().data.username,
        },
      });

      setCommentText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "commentText" && value.length <= 280) {
      setCommentText(value);
    }
  };

  return (
    <DesignFormContainer>
      <FormContainer onSubmit={handleFormSubmit}>
        <DesignInputTitle>Title</DesignInputTitle>
        <DesignFormInput
          name="commentText"
          placeholder="Design Title..."
          value={commentText}
          onChange={handleChange}
        ></DesignFormInput>
        <DesignInputTitle>Website Type</DesignInputTitle>
        <DesignFormInput
          name="commentText"
          placeholder="Website Type..."
          value={commentText}
          onChange={handleChange}
        ></DesignFormInput>
        <DesignInputTitle>Primary Color</DesignInputTitle>
        <DesignFormInput
          name="commentText"
          placeholder="Primary Color..."
          value={commentText}
          onChange={handleChange}
        ></DesignFormInput>
        <DesignInputTitle>Secondary Color</DesignInputTitle>
        <DesignFormInput
          name="commentText"
          placeholder="Secondary Color..."
          value={commentText}
          onChange={handleChange}
        ></DesignFormInput>
        
      <SubmitButton type="submit">Update Design</SubmitButton>
      </FormContainer>


    </DesignFormContainer>
  );
};

export default CommentForm;
