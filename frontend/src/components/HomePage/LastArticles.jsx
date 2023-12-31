import axios from "axios";
import { useEffect, useState } from "react";
import { AuthorsContainer as ArticlesContainer } from "./Authors";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "react-router-dom";

const components = {
  img: ({ alt, title }) => (
    <img
      alt={alt}
      title={title}
      style={{
        display: "none",
        maxWidth: "100%",
        minWidth: 180,
        maxHeight: 400,
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
  a: (props) => <a {...props} style={{ textDecoration: "none" }} />,
  p: (props) => (
    <p
      {...props}
      style={{ fontSize: 11, textAlign: "justify", marginBottom: 0 }}
    />
  ),
  h2: (props) => (
    <h2
      {...props}
      style={{
        display: "none",
      }}
      className="subtitle"
    />
  ),
  h3: (props) => <h3 {...props} style={{ display: "none" }} />,
};

const Article = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 10px;
  width: 80vw;
  overflow: hidden;
  padding: 3px;
  height: 23vh;
  position: relative;
  border: 3px solid black;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.1);
  transition: all 0.1s;

  @media (hover: none) {
    &:nth-child(${({ $order }) => $order}) {
      ${({ $order }) => ($order > 3 ? "display: none;" : "")};
    }

    @media only screen and (min-width: 100vh) {
      height: 30vh;
    }
  }

  @media only screen and (min-width: 600px) {
    width: 40vw;
  }

  @media only screen and (max-width: 600px) {
    &:nth-child(${({ $order }) => $order}) {
      ${({ $order }) => ($order > 3 ? "display: none;" : "")};
    }
  }
`;

const Title = styled.h4`
  font-size: 13px;
`;

export const LinkContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
  background: linear-gradient(
    to top,
    ${({ theme }) => theme.header.bg} 10%,
    transparent
  );
  text-align: right;
  font-size: 12px;
  padding: 10px;
`;

export const LinkTo = styled(Link)`
  text-decoration: none;
  color: transparent;
  background: linear-gradient(
    to top,
    limegreen 50%,
    ${({ theme }) => theme.main.color} 50%
  );
  background-size: 100% 200%;
  background-position-y: top;
  background-clip: text;
  -webkit-background-clip: text;
  transition: all 0.3s;

  &:hover {
    background-position-y: bottom;
  }
`;

function LastArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function getArticles() {
      const response = await axios.get(
        "/api/articles" + "?pagination=0,6&order=id,desc",
      );
      setArticles(response.data);
    }

    getArticles();
  }, []);

  return (
    <ArticlesContainer>
      {articles.map((a, id) => (
        <Article $order={id + 1} key={a.id}>
          <Title>{a.title}</Title>
          <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
            {a?.content}
          </ReactMarkdown>
          <LinkContainer>
            <LinkTo to={`/articles/${a.id}`}>Opširnije</LinkTo>
          </LinkContainer>
        </Article>
      ))}
    </ArticlesContainer>
  );
}

export default LastArticles;
