import styled from "styled-components";
import colors from "../../colors";

export const FooterContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;

	`
	
	export const FooterTitle = styled.h3`
	color: ${colors.jet};
	font-size: 1.5rem;

	@media (max-width: 768px) {
		font-size: .8rem;
	  }
`

export const GithubLink = styled.i`
	color: black;
	padding: 1rem;
	font-size: 1.5rem;

	&:hover {
		opacity: 80%;
	}
	
	@media (max-width: 768px) {
		font-size: .8rem;
	  }
`