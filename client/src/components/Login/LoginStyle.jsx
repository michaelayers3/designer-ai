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
  color: ${colors.mid};
  font-size: 4rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const SubmitButton = styled.button`
  border: 5px solid ${colors.mid};
  color: ${colors.mid};
  font-size: 2.6rem;
  font-weight: bold;
  font-family: monospace;
  background-color: ${colors.light};
  border-radius: 100px;
  width: 350px;
  height: 80px;

  &:hover {
    border-color: ${colors.light};
    color: ${colors.light};
    background-color: ${colors.mid};
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-top: 30px;
    width: 250px;
    height: 90px;
  }
`;
