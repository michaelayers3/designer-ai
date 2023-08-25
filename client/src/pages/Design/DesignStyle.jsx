import styled from "styled-components";
import colors from "../../colors";
import { Link } from "react-router-dom";

export const DesignContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
  padding: 25px;
  text-align: center;
`;

export const DesignTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 3.5rem;
  color: ${colors.light};
  width: 100%;
  border-radius: 15px 15px 0 0;
  background-color: ${colors.jet};
  padding: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const NewDesignTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

export const BackArrow = styled(Link)`
  color: white;
  font-size: 3rem;
  height: 5rem;
  width: 5rem;
  padding: 1rem;
  float: left;
  
`

export const Space = styled.div`
  width: 5rem;
`
