import { useEffect, useRef } from "react";

function useAutohideHeader() {
  const head = useRef(null);

  useEffect(() => {
    let lastPosition = 0;

    function handleChange() {
      let newPosition = window.scrollY;
      if (newPosition > lastPosition) {
        head.current.style.transform = "translateY(-51px)";
      } else {
        head.current.style.transform = "translateY(0px)";
      }

      lastPosition = newPosition <= 0 ? 0 : newPosition;
    }

    document.addEventListener("scroll", handleChange);

    return () => document.removeEventListener("scroll", handleChange);
  }, []);

  return head;
}

export default useAutohideHeader;
