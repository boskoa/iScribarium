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
  position: relative;
`;

const OutletContainer = styled.div`
  min-height: 150vh;
  width: 100%;
  color: black;
  position: relative;
`;

function Layout() {
  return (
    <MainContainer>
      <Header />
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
