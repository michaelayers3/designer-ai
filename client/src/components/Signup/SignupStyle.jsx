import styled from "styled-components";
import colors from "../../colors";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;
`;

export const FormTitle = styled.h1`
  color: ${colors.jet};
  font-size: 4rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const SubmitButton = styled.button`
  border: 5px solid ${colors.jet};
  color: ${colors.jet};
  font-size: 2.6rem;
  font-weight: bold;
  background-color: white;
  border-radius: 15px;
  width: 15rem;
  height: 4rem;
  margin-top: 1.75rem;

  &:hover {
    background-color: ${colors.jet};
    color: ${colors.lightest};
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-top: 5px;
    border: 2px solid ${colors.jet};
    width: 175px;
    height: 90px;
    font-size: 1.5rem;
  }
`;
