import styled from "styled-components";
import colors from "../../colors";

export const HeaderContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-contents: center;
  justify-content: space-between;
  background-color: ${colors.mid};
  padding: 10px;
`;

export const HeaderTitleContainer = styled.div`
`

export const HeaderTitle = styled.h1`
  color: black;

  // &:hover {
  //   color: ${colors.light}
  // }
`

export const HeaderSubtitle = styled.h6`
  color: ${colors.light}
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
  gap: 15px;
  opacity: 100%;
`

export const LoginButton = styled.button`
  border: 5px solid ${colors.dark};
  color: ${colors.dark};
  font-size: 1.5rem;
  font-weight: bold;
  background-color: white;
  border-radius: 100px;
  width: 200px;
  height: 50px;

  &:hover {
	border-color: ${colors.light};
	color: ${colors.light};
	cursor: pointer;
  }
`;

export const ProfileButton = styled.button`
  border: 5px solid ${colors.dark};
  color: ${colors.dark};
  font-size: 1.5rem;
  font-weight: bold;
  background-color: white;
  border-radius: 100px;
  width: 200px;
  height: 50px;

  &:hover {
	border-color: ${colors.light};
	color: ${colors.light};
	cursor: pointer;
  }
`;

export const SignupButton = styled.button`
  border: none;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: ${colors.dark};
  border-radius: 100px;
  width: 200px;
  height: 50px;

  &:hover {
	background-color: ${colors.light};
	cursor: pointer;
  }
`;

export const LogoutButton = styled.button`
  border: none;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: ${colors.dark};
  border-radius: 100px;
  width: 200px;
  height: 50px;

  &:hover {
	background-color: ${colors.light};
	cursor: pointer;
  }
`;

