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
  border-radius: 15px;
  padding: 15px;
  color: ${colors.dark};
  font-size: 2rem;

  &:focus {
    border: 5px solid ${colors.jet};
  }
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
  border-radius: 100px;

  height: 80px;
  width: 220px;
  background-color: ${colors.dark};
  margin-top: 3rem;

  &:hover {
    cursor: pointer;
    background-color: ${colors.light};
  }
`;
