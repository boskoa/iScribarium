import { styled } from "styled-components";

const NavContainer = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding: 5px 2px;
  top: 30%;
  background-color: rgba(0, 0, 255, 0.8);
  width: 50px;
  height: 200px;
  border-radius: 0px 5px 5px 0px;
  box-shadow: 0 0 0 3px black;
  color: white;
  z-index: 5;
  overflow: hidden;
  transform: translateX(-45px);
  transition: all 0.5s;

  &:hover {
    transform: translateX(0);
  }
`;

function Nav() {
  return (
    <NavContainer>
      <p>N</p>
      <p>A</p>
    </NavContainer>
  );
}

export default Nav;
