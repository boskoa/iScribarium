import { styled } from "styled-components";

const NavContainer = styled.nav`
  position: fixed;
  top: 200px;
  background-color: purple;
  width: 100px;
`;

function Nav() {
  return <NavContainer>NAV</NavContainer>;
}

export default Nav;
