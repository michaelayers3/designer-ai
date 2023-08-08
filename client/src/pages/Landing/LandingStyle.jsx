import styled from "styled-components";
import colors from "../../colors";

export const LandingPage = styled.main`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 55%;
  height: 100vh;
  background-color: ${colors.mid};

  @media (max-width: 768px) {
    width: 100%;
    height: 20vh;
  }
`;

export const LandingTitle = styled.h1`
  font-size: 5rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const LandingSubtitle = styled.h2`
  color: ${colors.dark};
  font-size: 3rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const LoginSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 100vh;
  gap: 120px;

  @media (max-width: 768px) {
    width: 100%;
    height: 80vh;
    padding-top: 30px;
    justify-content: start;
    gap: 50px;
  }
`;

export const LightButton = styled.button`
  border: 5px solid ${colors.dark};
  color: ${colors.dark};
  font-size: 2.6rem;
  font-weight: bold;
  background-color: white;
  border-radius: 100px;
  width: 350px;
  height: 140px;

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

export const DarkButton = styled.button`
  border: none;
  color: white;
  font-size: 2.6rem;
  font-weight: bold;
  background-color: ${colors.dark};
  border-radius: 100px;
  width: 350px;
  height: 140px;

  &:hover {
    background-color: ${colors.light};
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-top: 30px;
    width: 250px;
    height: 90px;
  }
`;
