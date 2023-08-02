import { useEffect, useRef } from "react";
import { styled } from "styled-components";

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  background-color: blue;
  width: 100%;
  transform: translate(0px);
  z-index: 100;
  transition: all 0.3s;
`;

function Header() {
  const head = useRef(null);

  useEffect(() => {
    let lastPosition = 0;

    function handleChange() {
      let newPosition = window.scrollY;
      if (newPosition >= lastPosition) {
        head.current.style.transform = "translateY(-20px)";
      } else {
        head.current.style.transform = "translateY(0px)";
      }

      lastPosition = newPosition <= 0 ? 0 : newPosition;
    }

    document.addEventListener("scroll", handleChange);

    return () => document.removeEventListener("scroll", handleChange);
  }, []);

  return <HeaderContainer ref={head}>HEADER</HeaderContainer>;
}

export default Header;
