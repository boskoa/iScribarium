import { useEffect } from "react";
import Proba from "../Layout/Proba";

function HomePage() {
  useEffect(() => {
    function moveBg() {
      const position = document.getElementById("home");
      const top = position.getBoundingClientRect().top;
      position.style.backgroundPosition = `top ${top * 5}px left 0px`;
    }

    document.addEventListener("scroll", moveBg);

    return () => document.removeEventListener("scroll", moveBg);
  }, []);

  return (
    <div id="home">
      <Proba />
    </div>
  );
}

export default HomePage;
