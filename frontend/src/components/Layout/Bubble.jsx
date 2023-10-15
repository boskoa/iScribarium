import { styled } from "styled-components";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const COLORS = ["255, 0, 0", "0, 255, 0", "0, 0, 255", "255, 255, 0"];
const DEFAULTSIZE = 100;

const BubbleContainer = styled.div`
  position: absolute;
  z-index: -1;
  border-radius: 50%;
  background-color: rgba(${({ color }) => color}, 0.1);
  will-change: transform;
  transform: translateY(0);
`;

function Bubble() {
  const colorRef = useRef(COLORS[Math.floor(Math.random() * COLORS.length)]);
  const color = colorRef.current;
  const depthRef = useRef(Math.random() > 0.2 ? Math.random() : 0.2);
  const depth = depthRef.current;
  const randomDistanceRef = useRef(Math.random());
  const randomDistance = randomDistanceRef.current;
  const sizeRef = useRef(`${Math.ceil((DEFAULTSIZE * depth) / 8)}vw`);
  const size = sizeRef.current;
  const [height, setHeight] = useState(0);
  const top = `${height * depth * randomDistance - 200 * depth}px`;
  const left = `${randomDistance * 80}vw`;
  const element = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setHeight(document.querySelector("html").offsetHeight);
    }, 1000);
  }, [location]);

  useEffect(() => {
    const htmlElement = document.getElementsByTagName("html")[0];
    function handleScroll() {
      const distance = Math.round(
        Math.abs(htmlElement.getBoundingClientRect().top),
      );

      if (element.current) {
        element.current.style.transform = `translateY(${
          distance * (1 - depth)
        }px)`;
      }
    }

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => document.removeEventListener("scroll", handleScroll);
  }, [depth]);

  if (height === 0) {
    return <div />;
  }

  return (
    <BubbleContainer
      style={{
        width: size,
        height: size,
        top,
        left,
      }}
      color={color}
      ref={element}
    >
      <svg
        width="100%"
        height="100%"
        version="1.1"
        viewBox="0 0 33.686 32.076"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(-49.761 -32.454)">
          <path
            d="m64.108 64.333c-9.7443-1.3491-16.284-10.71-13.828-19.793 1.6282-6.0205 6.5086-10.453 13.03-11.834 1.5683-0.33206 4.9282-0.3374 6.6089-0.0105 6.439 1.2524 11.514 5.8679 13.15 11.959 0.33516 1.2481 0.378 1.6787 0.378 3.8005 0 2.1218-0.04281 2.5524-0.378 3.8005-1.7585 6.5485-7.588 11.439-14.477 12.146-1.8244 0.18722-2.7289 0.17313-4.484-0.06986zm4.9308-0.86012c3.6859-0.55888 6.9276-2.2071 9.3943-4.7765 1.7223-1.794 2.7407-3.4291 3.4479-5.536 1.7818-5.308 0.50991-10.807-3.4581-14.952-4.9442-5.1642-12.887-6.426-19.391-3.0806-3.2044 1.6482-5.51 4.037-7.038 7.292-1.0003 2.1308-1.2935 3.5292-1.2807 6.1088 0.01137 2.2921 0.22343 3.47 0.95306 5.2934 2.6701 6.6729 10.034 10.764 17.372 9.651zm-4.7858-0.15504c-6.8046-0.94211-12.21-6.0787-13.274-12.614-0.26943-1.6553-0.26854-2.8447 0.0034-4.5213 0.99265-6.1204 5.8101-11.004 12.236-12.405 1.8058-0.39362 4.745-0.42057 6.5905-0.06042 3.8907 0.75927 7.4069 2.9107 9.6737 5.9189 2.1562 2.8614 3.1898 6.1539 2.9958 9.5427-0.11533 2.0145-0.5371 3.671-1.3854 5.4409-2.2814 4.7601-6.799 7.9852-12.199 8.7092-1.8257 0.24474-2.8114 0.24244-4.6408-0.01085zm6.6711-0.56692c9.2-2.5479 13.882-12.079 10.001-20.361-2.0774-4.4331-6.3492-7.6281-11.369-8.5035-9.124-1.5911-17.68 4.5385-18.483 13.242-0.7105 7.6998 4.7715 14.503 12.878 15.982 0.36536 0.06666 1.7737 0.09884 3.1297 0.07151 2.1191-0.0427 2.6589-0.10327 3.8431-0.43124zm0.10877-20.633c-1.0322-0.70855-1.414-1.0529-1.414-1.2754 0-0.34833 0.25502-0.65284 0.54675-0.65284 0.21339 0 2.8656 1.8026 3.0201 2.0527 0.13589 0.21988-0.24201 0.84792-0.50965 0.84701-0.12611-4.35e-4 -0.86558-0.43757-1.6433-0.97143zm1.8889 0.38216c0.04673-0.24267-2.3883-2.0204-2.7675-2.0204-0.43117 0-0.38338 0.42576 0.08667 0.77215 2.107 1.5527 2.5798 1.7729 2.6808 1.2482z"
            strokeWidth=".14502"
            stroke={`rgba(${color}, ${depth * 0.3})`}
            fill={`rgba(${color}, ${depth * 0.6})`}
          />
        </g>
      </svg>
    </BubbleContainer>
  );
}

export default Bubble;
