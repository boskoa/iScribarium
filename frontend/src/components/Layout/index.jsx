import { styled } from "styled-components";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Bubble from "./Bubble";
import Whale from "./Whale";
import Search from "./Search";

const MainContainer = styled.main`
  min-width: 320px;
  min-height: 100vh;
  color: ${({ theme }) => theme.main.color};
  position: relative;
  transition: all 0.1s;
  padding-bottom: 5vh;
`;

const OutletContainer = styled.div`
  min-height: 85vh;
  width: 100%;
  position: relative;
`;

function Layout({ handleTheme }) {
  return (
    <MainContainer>
      <Header handleTheme={handleTheme} />
      <Search />
      <Nav />
      <OutletContainer>
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble />
        <Whale />
        <Outlet />
      </OutletContainer>
      <Footer />
    </MainContainer>
  );
}

export default Layout;
