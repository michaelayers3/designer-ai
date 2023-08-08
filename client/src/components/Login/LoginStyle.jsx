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
  color: ${colors.dark};
  font-size: 4rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const SubmitButton = styled.button`
  border: 5px solid ${colors.dark};
  color: ${colors.dark};
  font-size: 2.6rem;
  font-weight: bold;
  background-color: white;
  border-radius: 100px;
  width: 350px;
  height: 80px;

  &:hover {
    border-color: ${colors.light};
    color: ${colors.light};
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-top: 30px;
    width: 250px;
    height: 90px;
  }
`;
