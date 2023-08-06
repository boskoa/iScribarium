import { styled } from "styled-components";
import useAutohideHeader from "../../../customHooks/useAutohideHeader";
import ThemeButton from "./ThemeButton";
import Logo from "./Logo";
import Profile from "./Profile";

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background-color: rgb(100, 100, 100);
  width: 100%;
  height: 50px;
  transform: translateY(0px);
  z-index: 100;
  transition: all 0.3s;
`;

function Header() {
  const head = useAutohideHeader();

  return (
    <HeaderContainer ref={head}>
      <ThemeButton />
      <Logo />
      <Profile />
    </HeaderContainer>
  );
}

export default Header;
