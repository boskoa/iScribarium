import { styled } from "styled-components";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

const MainContainer = styled.main`
  min-width: 320px;
  min-height: 100vh;
  position: relative;
`;

function Layout() {
  return (
    <MainContainer>
      <Header />
      <Nav />
      <Footer />
      <div
        style={{
          padding: "50px",
          height: "150vh",
          width: "100%",
          backgroundColor: "lime",
          color: "black",
          position: "relative",
          top: "-18px",
        }}
      >
        <p>HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA</p>
      </div>
    </MainContainer>
  );
}

export default Layout;
