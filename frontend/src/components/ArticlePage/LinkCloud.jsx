import axios from "axios";
import { useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import stripMarkdown from "../../utils/stripMarkdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const components = {
  img: ({ alt, src, title }) => (
    <img
      alt={alt}
      src={src}
      title={title}
      style={{
        display: "none",
      }}
    />
  ),
  table: (props) => (
    <table
      style={{
        display: "none",
      }}
      {...props}
    />
  ),
  a: (props) => <a {...props} className="link" style={{ display: "none" }} />,
  p: (props) => (
    <p {...props} style={{ textAlign: "justify", marginBottom: 0 }} />
  ),
};

const cloudIntro = keyframes`
  from {
    opacity: 0.1;
  } to {
    opacity: 1;
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-width: 200px;
  padding: 5px;
  font-size: 12px;
  border: 3px solid black;
  border-radius: 5px;
  background-color: white;
  color: black;
  opacity: 0;
  z-index: 5;
  transform: translate(${({ $left }) => $left}px, ${({ $top }) => $top}px);
  animation: ${() => css`0.2s ${cloudIntro} 0.2s forwards`};
`;

function LinkCloud({ cloud }) {
  const [article, setArticle] = useState({});
  const cloudRef = useRef();
  const windowWidth = window.innerWidth;

  useEffect(() => {
    async function getArticle() {
      const response = await axios.get(`/api/articles/${cloud.id}`);
      setArticle(stripMarkdown(response.data));
    }

    if (cloud?.id) {
      getArticle();
    }
  }, [cloud]);

  if (!cloud?.id) return;

  return (
    <Container
      ref={cloudRef}
      $top={
        cloud?.top - 50 > cloudRef?.current?.getBoundingClientRect().height
          ? cloud.top - 10 - cloudRef?.current?.getBoundingClientRect().height
          : cloud.top + 10 + cloud.height
      }
      $left={
        cloud?.left < windowWidth / 2
          ? cloud.left
          : cloud.left -
            cloudRef?.current?.getBoundingClientRect().width +
            cloud.width
      }
      $id={article?.id}
    >
      <ReactMarkdown
        id="markdown"
        components={components}
        remarkPlugins={[remarkGfm]}
      >
        {article?.content}
      </ReactMarkdown>
    </Container>
  );
}

export default LinkCloud;
