import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";

import Auth from "../../utils/auth";

import { FormContainer, FormTitle, SubmitButton } from "./SignupStyle";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <FormContainer onSubmit={handleFormSubmit}>
      <FormTitle>Sign Up</FormTitle>
      <input
        className="form-input"
        placeholder="Your username"
        name="username"
        type="text"
        value={formState.name}
        onChange={handleChange}
      />
      <input
        className="form-input"
        placeholder="Your email"
        name="email"
        type="email"
        value={formState.email}
        onChange={handleChange}
      />
      <input
        className="form-input"
        placeholder="******"
        name="password"
        type="password"
        value={formState.password}
        onChange={handleChange}
      />
      <SubmitButton type="submit">
        Submit
      </SubmitButton>

      {error && <div className="my-3 p-3 bg-danger text-white">{error.message}</div>}
    </FormContainer>
  );
};

export default Signup;
