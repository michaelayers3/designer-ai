import styled from "styled-components";
import colors from "../../colors";
import {Link} from "react-router-dom";

export const DesignContainer = styled.div`
	display: flex;
	flex-direction: column;
  flex-wrap: wrap;
	min-width: 400px;
  max-width: 700px;
	min-height: 130px;
	border: 8px solid ${colors.dark};
	background-color: white;
	border-radius: 100px;
	justify-content: center;
	align-items: center;
  text-align: center;
  padding: 25px;

	&:hover{
		border: 8px solid ${colors.light};
	}
`

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  &:last-child{
    border-right: none;
  }
`

export const LinkButton = styled(Link)`
  font-size: 2.5rem;
  background: none;
  color: ${colors.dark};
  border-right: 4px solid ${colors.light};
  padding: 15px;
  
  &:hover{
    color: ${colors.light};
    cursor: pointer;
    text-decoration: none;
  }

  &:last-child{
    border-right: none;
  }
`

export const DesignTitle = styled.h1`
	color: ${colors.dark};
	font-size: 2.7rem;
`
