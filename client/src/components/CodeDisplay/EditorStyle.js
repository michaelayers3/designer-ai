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
  margin-top: 2rem;
  width: 150px;
`;

export const EditorTitle = styled.div`
  background-color: ${colors.dark};
  font-size: 2rem;
  color: white;
  width: 100%;
`;

export const EditorFrame = styled.iframe`
  height: 70vh;
  width: 80vw;
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

