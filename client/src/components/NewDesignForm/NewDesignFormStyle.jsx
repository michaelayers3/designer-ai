import styled from "styled-components";
import colors from "../../colors";

export const DesignFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vw;
  padding: 50px;
`;

export const InputContainer = styled.div``;

export const DesignFormInput = styled.input`
  border: 5px solid ${colors.dark};
  width: 60vw;
  outline: none;
  border-radius: 100px;
  padding: 15px;
  color: ${colors.dark};
  font-size: 2rem;
`;

export const DesignInputTitle = styled.h4`
  margin-top: 2rem;
  color: white;
  text-align: left;
`;

export const SubmitButton = styled.button`
  border: none;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 100px;

  height: 95px;
  width: 320px;
  background-color: ${colors.dark};
  color: ${colors.light};
  margin-top: 3rem;

  &:hover {
    cursor: pointer;
    background-color: ${colors.light};
    color: ${colors.dark};
  }
`;
