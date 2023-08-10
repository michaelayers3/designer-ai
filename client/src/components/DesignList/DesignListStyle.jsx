import styled from "styled-components";
import colors from "../../colors";
import { Link } from "react-router-dom";

export const DesignContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-width: 400px;
  max-width: 700px;
  min-height: 130px;
  border: 5px solid ${colors.darkest};
  background-color: ${colors.lightest};
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 25px;

  &:hover {
    border: 8px solid ${colors.light};
  }

  @media (max-width: 800px) {
    min-width: 300px;
    max-width: 500px;
    min-height: 100px;
    padding: 15px;
  }

`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &:last-child {
    border-right: none;
  }
`;

export const LinkButton = styled(Link)`
  font-size: 2.5rem;
  background: none;
  color: ${colors.dark};
  border-right: 4px solid ${colors.light};
  padding: 15px;

  &:hover {
    color: ${colors.light};
    cursor: pointer;
    text-decoration: none;
  }

  &:last-child {
    border-right: none;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const DesignTitle = styled.h1`
  color: ${colors.dark};
  font-size: 2.7rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
