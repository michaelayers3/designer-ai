import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";

import Auth from "../../utils/auth";
import { FormContainer, FormTitle, SubmitButton } from "./LoginStyle";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

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
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <FormContainer onSubmit={handleFormSubmit}>
      <FormTitle>Login</FormTitle>
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
        <SubmitButton type="submit">Submit</SubmitButton>

      {error && <div className="my-3 p-3 bg-danger text-white">{error.message}</div>}
    </FormContainer>
  );
};

export default Login;
