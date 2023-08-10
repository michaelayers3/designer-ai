import styled from "styled-components";
import colors from "../../colors";

export const DesignContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
  padding: 25px;
  text-align: center;
`;

export const DesignTitle = styled.h1`
  font-size: 3.5rem;
  color: ${colors.light};
  width: 100%;
  border-radius: 15px 15px 0 0;
  background-color: ${colors.jet};
  padding: 20px;
  margin-bottom: 20px;
`;

export const DesignDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
  background-color: ${colors.light};
  border-radius: 15px;
  width: 90vw;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

export const DesignCodeContainer = styled.div`
  width: 80vw;
`;
