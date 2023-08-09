import styled from "styled-components";
import colors from "../../colors";
import { Controlled as ControlledEditor } from "react-codemirror2";


export const EditorContainer = styled.div`
	width: 80vw;
	// height: 80vh;
	// background-color: hsl(225, 6%, 25%);
	display: flex;
	flex-direction: column;
`

export const EditorTitle = styled.div`

`



export const EditorFrame = styled.iframe`
	height: 80vh;
	width: 80vw;

`
export const CodeEditor = styled(ControlledEditor)`
	// display: flex;
	flex-grow: 1;
	overflow: hidden;
	border: 5px solid black;
	height: auto;
	viewportMargin: Infinity;
`