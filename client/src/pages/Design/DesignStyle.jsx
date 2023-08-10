import styled from "styled-components";
import colors from "../../colors";

export const DesignContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
  padding: 25px;
  text-align: center;
  background-color: ${colors.mid};
`;

export const DesignTitle = styled.h1`
  font-size: 3.5rem;
  color: white;
`;

export const DesignDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
  background-color: ${colors.light};
  border-radius: 100px;
  padding: 25px;
  width: 90vw;
`;

export const DesignCodeContainer = styled.div`
  width: 80vw;
`;
