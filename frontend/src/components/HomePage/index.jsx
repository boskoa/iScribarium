import styled from "styled-components";
import Helm from "../../assets/helm.svg";
import { useEffect, useRef, useState } from "react";

const ViewPort = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid green;

  @media (hover: none) {
    margin-top: -50px;
  }
`;

const HomeContainer = styled.div`
  width: 200vh;
  height: 200vh;
  position: absolute;
  bottom: 0;
  left: -100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  transform: rotate(${({ $turn }) => $turn}deg);
  transform-origin: center center;
  z-index: 10;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 10px solid black;

  @media only screen and (min-width: 100vh) {
    width: 200vw;
    height: 200vw;
    left: -100vw;
    bottom: -100vh;
  }
`;

const HelmContainer = styled.img`
  width: 260px;
  height: 260px;
  position: absolute;
  top: calc(50% - 130px);
  left: calc(50% - 130px);
  z-index: 100;
`;

const SectionContainer = styled.div`
  border: 1px solid floralwhite;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 90vw;
  height: 90vw;

  @media only screen and (min-width: 100vh) {
    width: 90vh;
    height: 90vh;
  }
`;

function HomePage() {
  const degsRef = useRef(0);
  const [degs, setDegs] = useState(degsRef.current);

  useEffect(() => {
    let oldY;
    let newY;
    let oldX;
    let newX;
    let span = 0;
    let move = false;

    function handleScroll(e) {
      span++;
      if (span < 10) return;

      if (e.deltaY < 0) {
        degsRef.current -= 90;
      } else {
        degsRef.current += 90;
      }
      span = 0;
      setDegs(degsRef.current);
    }

    function handleMove(e) {
      e.preventDefault();
      if (!move) return;
      span++;

      if (span < 20) return;

      newY = e.touches[0].screenY;
      newX = e.touches[0].clientX;

      if (newY - oldY > 20) {
        degsRef.current -= 45;
        oldY = newY;
        span = 0;
      } else if (oldY - newY > 20) {
        degsRef.current += 45;
        oldY = newY;
        span = 0;
      }

      if (newX - oldX > 20) {
        degsRef.current -= 45;
        oldX = newX;
        span = 0;
      } else if (oldX - newX > 20) {
        degsRef.current += 45;
        oldX = newX;
        span = 0;
      }

      setDegs(degsRef.current);
    }

    document.addEventListener("wheel", handleScroll);

    if ("ontouchstart" in window) {
      document.addEventListener("touchstart", (e) => {
        move = true;
        oldY = e.touches[0].screenY;
        oldX = e.touches[0].clientX;
        console.log(oldY);
      });
      document.addEventListener("touchend", (e) => {
        move = false;
        console.log("END", e);
      });
      document.addEventListener("touchmove", handleMove);
    }

    return () => document.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <ViewPort>
      <HomeContainer $turn={degs}>
        <HelmContainer
          onClick={() => {
            degsRef.current = degs + 90;
            setDegs((p) => p + 90);
          }}
          src={Helm}
          alt="helm image"
        />
        <SectionContainer
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <Section
            style={{
              transform: "rotate(-180deg)",
              border: "1px solid green",
            }}
          >
            gore levo
          </Section>
        </SectionContainer>
        <SectionContainer
          style={{
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <Section
            style={{
              transform: "rotate(-90deg)",
              border: "1px solid red",
            }}
          >
            gore desno
          </Section>
        </SectionContainer>
        <SectionContainer
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-start",
          }}
        >
          <Section
            style={{
              transform: "rotate(-270deg)",
              border: "1px solid blue",
            }}
          >
            <p>dole levo</p>
            <p>dole levo</p>
            <p>dole levo</p>
            <p>dole levo</p>
            <p>dole levo</p>
            <p>dole levo</p>
            <p>dole levo</p>
            <p>dole levo</p>
            <p>dole levo</p>
            <p>dole levo</p>
            <p>dole levo</p>
            <p>dole levo</p>
            <p>dole levo</p>
            <p>dole levo</p>
            <p>dole levo</p>
            <p>dole levo</p>
            <p>dole levo</p>
            <p>dole levo</p>
            <p>dole levo</p>
            <p>dole levo</p>
            <p>dole levo</p>
            <p>dole levo</p>
            <p>dole levo</p>
            <p>dole levo</p>
            <p>dole levo</p>
            <p>dole levo</p>
            <p>dole levo</p>
            <p>dole levo</p>
            <p>dole levo</p>
          </Section>
        </SectionContainer>
        <SectionContainer
          style={{
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <Section
            style={{
              transform: "rotate(0deg)",
              border: "1px solid orange",
            }}
          >
            dole desno
          </Section>
        </SectionContainer>
      </HomeContainer>
    </ViewPort>
  );
}

export default HomePage;
