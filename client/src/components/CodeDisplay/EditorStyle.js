import styled from "styled-components";
import colors from "../../colors";
import { Controlled as ControlledEditor } from "react-codemirror2";

export const EditorContainer = styled.div`
  width: 80vw;
  display: flex;
  // flex-grow: 1;
  flex-direction: column;
  margin-bottom: 20px;
  align-items: center;
  `;

export const SaveChangesButton = styled.button`
border: 5px solid ${colors.jet};
color: ${colors.jet};
font-size: 2.6rem;
font-weight: bold;
background-color: white;
border-radius: 15px;
width: 25rem;
height: 4rem;
margin-top: 1.75rem;

&:hover {
  background-color: ${colors.jet};
  color: ${colors.lightest};
  cursor: pointer;
}

@media (max-width: 768px) {
  border: 2px solid ${colors.jet};
  margin-top: 30px;
  width: 180px;
  height: 75px;
  font-size: 1.5rem;
}
`;

export const EditorTitle = styled.div`
  background-color: ${colors.dark};
  font-size: 2rem;
  color: ${colors.jet};
  width: 100%;
  font-weight: bold;
  padding: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const EditorFrame = styled.iframe`
  height: 70vh;
  width: 80vw;
  background-color: white;
  border: 5px solid ${colors.dark};
  border-radius: 1rem 1rem 0 0;
`;

export const CodeEditor = styled(ControlledEditor)`
  border: 5px solid ${colors.dark};
  border-radius: 0 0 1rem 1rem;
  flex-grow: 1;
  text-align: left;
  height: auto;
  width: 80vw;
`;

