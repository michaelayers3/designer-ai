import styled from "styled-components";
import colors from "../../colors";

export const ProfileContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin: 3vw;
  background-color: ${colors.light};
  border-radius: 15px;
  height: 100vh;
  padding: 2rem;
`;

export const DesignListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
  justify-content: start;
  align-items: center;
  gap: 20px;
  padding: 25px;
`;

export const ProfileTitle = styled.h1`
  font-size: 5rem;
  color: ${colors.darkest};
  text-align: center;
  padding: 20px;
`;
