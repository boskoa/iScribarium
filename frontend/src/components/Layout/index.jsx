import { styled } from "styled-components";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Bubble from "./Bubble";
import Whale from "./Whale";

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
      <Nav />
      <Footer />
      <OutletContainer>
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble />
        <Whale />
        <Outlet />
      </OutletContainer>
    </MainContainer>
  );
}

export default Layout;
