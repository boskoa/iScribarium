import styled from "styled-components";
import Helm from "../../assets/helm.svg";
import { useEffect, useRef, useState } from "react";
import Authors from "./Authors";
import LastArticles from "./LastArticles";
import LuckyArticle from "./LuckyArticle";
import Categories from "./Categories";

const vpWidth = "100vw";
const vpHeight = "85vh";
const hcWidth = "200vw";
const hcHeight = "170vh";

const ViewPort = styled.div`
  width: ${vpWidth};
  height: ${vpHeight};
  position: relative;
  overflow: hidden;

  @media (hover: none) {
    margin-top: 0px;
  }
`;

const HomeContainer = styled.div`
  width: ${hcWidth};
  height: ${hcHeight};
  display: grid;
  grid-template-rows: 50% 50%;
  grid-template-columns: 50% 50%;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: rotate(${({ $turn }) => $turn}deg);
  transform-origin: center center;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

const HelmContainer = styled.img`
  width: 200px;
  height: 200px;
  position: absolute;
  top: calc(50% - 100px);
  left: calc(50% - 100px);
  z-index: 100;
  opacity: 1;
  cursor: pointer;

  @media (hover: none) {
    cursor: default;
  }
`;

const SectionContainer = styled.div``;

const Section = styled.div`
  padding-top: 50px;
  padding-left: 80px;

  @media only screen and (max-width: 100vh) {
    padding-top: 80px;
    padding-left: 50px;
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
      if (span < 20) return;

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

      if (span <= 5) return;

      newY = e.touches[0].screenY;
      newX = e.touches[0].clientX;

      if (newY - oldY > 20) {
        degsRef.current -= 90;
        oldY = newY;
        span = 0;
      } else if (oldY - newY > 20) {
        degsRef.current += 90;
        oldY = newY;
        span = 0;
      }

      if (newX - oldX > 20) {
        degsRef.current -= 90;
        oldX = newX;
        span = 0;
      } else if (oldX - newX > 20) {
        degsRef.current += 90;
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
      });
      document.addEventListener("touchend", () => {
        move = false;
      });
      document.addEventListener("touchmove", handleMove);
    }

    return () => {
      document.removeEventListener("wheel", handleScroll);
      document.removeEventListener("touchmove", handleMove);
    };
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
        <SectionContainer>
          <Section
            style={{
              transform: `rotate(-180deg) translateX(-${vpWidth}) translateY(-${vpHeight})`,
              transformOrigin: "top left",
            }}
          >
            <LuckyArticle />
          </Section>
        </SectionContainer>
        <SectionContainer>
          <Section
            style={{
              transform: `rotate(-90deg) translateX(-${vpHeight})`,
              transformOrigin: "top left",
            }}
          >
            <LastArticles />
          </Section>
        </SectionContainer>
        <SectionContainer>
          <Section
            style={{
              transform: `rotate(90deg) translateX(${vpWidth})`,
              transformOrigin: "top right",
            }}
          >
            <Categories />
          </Section>
        </SectionContainer>
        <SectionContainer>
          <Section>
            <Authors />
          </Section>
        </SectionContainer>
      </HomeContainer>
    </ViewPort>
  );
}

export default HomePage;
