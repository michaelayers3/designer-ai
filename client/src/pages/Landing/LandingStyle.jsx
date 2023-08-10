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
  background-color: ${colors.jet};

  @media (max-width: 768px) {
    width: 100%;
    height: 20vh;
  }
`;

export const LandingTitle = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  color: ${colors.light};
  letter-spacing: 0.2em;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const LandingSubtitle = styled.h2`
  color: ${colors.darkest};
  font-size: 2.3rem;

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
  background-color: ${colors.light};

  @media (max-width: 768px) {
    width: 100%;
    height: 80vh;
    padding-top: 30px;
    justify-content: start;
    gap: 50px;
  }
`;

export const LoginSectionTitle = styled.h1`
  color: ${colors.jet};
  font-size: 5rem;
  margin-bottom: 5rem;
  @media (max-width: 768px) {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
`;

export const LoginSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background-color: ${colors.lightest};
  width: 80%;
  height: 80%;
  border-radius: 15px;
  padding: 50px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: 90%;
    height: 60%;
    padding: 20px;
  }
`;

export const LightButton = styled.button`
  border: 5px solid ${colors.jet};
  color: ${colors.jet};
  font-size: 2.2rem;
  font-weight: bold;
  background-color: white;
  border-radius: 15px;
  width: 15rem;
  height: 4rem;

  &:hover {
    border-color: ${colors.darkest};
    color: ${colors.darkest};
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
  font-size: 2.2rem;
  font-weight: bold;
  background-color: ${colors.jet};
  border-radius: 15px;
  width: 15rem;
  height: 4rem;

  &:hover {
    background-color: ${colors.darkest};
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-top: 30px;
    width: 250px;
    height: 90px;
  }
`;

export const LandingSubText = styled.h2`
  color: ${colors.darkest};
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
