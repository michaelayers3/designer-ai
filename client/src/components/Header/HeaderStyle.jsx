import styled from "styled-components";
import colors from "../../colors";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.section`
  display: flex;
  justify-contents: center;
  justify-content: center;
  padding: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// export const 

export const HeaderTitleContainer = styled.div`
  text-align: center;
`;

export const HeaderTitle = styled(Link)`
  color: ${colors.jet};
  font-size: 5rem;
  letter-spacing: 0.4rem;
  font-weight: bold;

  &:hover {
    text-decoration: none;
    color: ${colors.lightest};
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const MenuTitle = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 15px;
  right: 80px;
  width: 400px;
  height: 200px;
`;

export const LogoutButton = styled.h2`
  color: ${colors.darkest};
  width: 140px;

  &:hover {
    color: ${colors.lightest};
    cursor: pointer;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 60px;
  right: 40px;
  margin-top: 7rem;
`;

export const MenuButtons = styled(Link)`
  color: ${colors.jet};
  font-size: 3.3rem;
  border-bottom: 8px solid ${colors.dark};
  padding: 20px;

  &:hover {
    text-decoration: none;
    color: ${colors.lightest};
    cursor: pointer;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const LightButton = styled.button`
  border: 5px solid ${colors.dark};
  color: ${colors.dark};
  font-size: 1.5rem;
  font-weight: bold;
  background-color: white;
  border-radius: 100px;
  width: 200px;
  height: 50px;

  &:hover {
    border-color: ${colors.light};
    color: ${colors.light};
    cursor: pointer;
  }
`;

export const DarkButton = styled.button`
  border: none;
  color: ${colors.light};
  font-size: 1.5rem;
  font-weight: bold;
  background-color: ${colors.dark};
  border-radius: 15px;
  width: 200px;
  height: 50px;

  &:hover {
    background-color: ${colors.light};
    cursor: pointer;
  }
`;
