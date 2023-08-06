import styled from "styled-components";
import colors from "../../colors";

export const ProfileContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3vw;
  background-color: ${colors.mid};
  border-radius: 100px;
`;

export const DesignListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 25px;
`;

export const ProfileTitle = styled.h1`
  font-size: 5rem;
  color: white;
  text-align: center;
  padding: 20px;
`;
