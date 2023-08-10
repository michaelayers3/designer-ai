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

export const InputContainer = styled.div`
`;

export const ColorInputContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`

export const DesignFormInput = styled.input`
  border: 5px solid ${colors.dark};
  width: 60vw;
  outline: none;
  border-radius: 15px;
  padding: 15px;
  color: ${colors.jet};
  font-size: 2rem;
  height: 4rem;

  &:focus {
    border: 5px solid ${colors.jet};
  }
`;

export const ColorFormInput = styled.input`
  border: 5px solid ${colors.dark};
  width: 20vw;
  outline: none;
  border-radius: 15px;
  padding: 15px;
  color: ${colors.jet};
  font-size: 2rem;
  height: 10rem;

  &:focus {
    border: 5px solid ${colors.jet};
  }
`;

export const DesignInputTitle = styled.h4`
  margin-top: 2rem;
  color: ${colors.jet};
  text-align: left;
`;

export const SubmitButton = styled.button`
  color: ${colors.jet};
  border: 5px solid ${colors.jet};
  background-color: ${colors.lightest};
  font-size: 1.8rem;
  border-radius: 15px;
  height: 80px;
  width: 20rem;
  margin-top: 3rem;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background-color: ${colors.jet};
    color: ${colors.lightest};
  }
`;
