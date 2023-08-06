import { useEffect, useState } from "react";

function useScrollDistance() {
  const [distance, setDistance] = useState(0);
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    const htmlHeight = document.getElementsByTagName("html")[0].offsetHeight;
    setHeight(htmlHeight);

    const htmlWidth = document.getElementsByTagName("html")[0].offsetWidth;
    setWidth(htmlWidth);

    function handleDistance() {
      const htmlTop = Math.round(
        Math.abs(
          document.getElementsByTagName("html")[0].getBoundingClientRect().top,
        ),
      );
      setDistance(htmlTop);
    }

    document.addEventListener("scroll", handleDistance);

    return () => document.removeEventListener("scroll", handleDistance);
  }, []);

  return [distance, height, width];
}

export default useScrollDistance;
