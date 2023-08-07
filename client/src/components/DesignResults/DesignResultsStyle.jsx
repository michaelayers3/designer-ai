import styled from "styled-components";
import colors from "../../colors";

export const CodeResultsContainer = styled.section`
	display: flex;
	justify-contents: center;
	align-items: center;
	flex-direction: column;
	padding: 50px;
	gap: 50px;
`

export const CodeResults = styled.div`
	background-color: white;
	border-radius: 10px;
	min-height: 40vh;
	min-width: 80vw;
	padding: 25px;
`

export const ResultsCreated = styled.h5`
	color: ${colors.dark};
`

export const CodeBlocks = styled.p`
	text-align: left;
	border-radius: 5px;
`