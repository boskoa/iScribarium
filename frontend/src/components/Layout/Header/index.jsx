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
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.header.bg};
  width: 100%;
  height: 50px;
  will-change: transform;
  transform: translateY(0px);
  z-index: 100;
  transition: all 0.3s;
`;

function Header({ handleTheme }) {
  const head = useAutohideHeader();

  return (
    <HeaderContainer ref={head}>
      <ThemeButton handleTheme={handleTheme} />
      <Logo />
      <Profile />
    </HeaderContainer>
  );
}

export default Header;
