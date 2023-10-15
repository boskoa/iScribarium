import axios from "axios";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styled from "styled-components";
import { LinkContainer, LinkTo } from "./LastArticles";

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
    <p {...props} style={{ textAlign: "justify", marginBottom: 15 }} />
  ),
  h2: (props) => (
    <h2
      {...props}
      style={{
        margin: "0px 0px 10px 0px",
        display: "inline-block",
        position: "relative",
        borderBottom: "2px solid rgba(50, 50, 100, 0.3)",
      }}
      className="subtitle"
    />
  ),
  h3: (props) => <h3 {...props} style={{ margin: "5px 0" }} />,
};

export const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: calc(90vw - 50px);
  gap: 10px;
  border: 3px solid black;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 30px 10px 10px 10px;
  height: 70vh;
  position: relative;
`;

const RandomButton = styled.button`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.main.color};
  background-color: ${({ theme }) => theme.header.bg};
  border: 3px solid black;
  border-radius: 5px;
  padding: 5px;
  position: absolute;
  top: 10px;
  right: 10px;
  transition: all 0.2s;

  &:hover {
    border-color: limegreen;
  }

  &:active {
    transform: scale(1.03);
  }
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

function LuckyArticle() {
  const [article, setArticle] = useState();
  const [newOne, setNewOne] = useState(0);

  useEffect(() => {
    async function getRandomArticle() {
      const response = await axios.get("/api/articles/random");
      setArticle(response.data);
    }

    getRandomArticle();
  }, [newOne]);

  if (!article) return "Loading...";

  return (
    <ArticleContainer>
      <RandomButton onClick={() => setNewOne(newOne + 1)}>novi</RandomButton>
      <Title>{article?.title}</Title>
      <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
        {article?.content}
      </ReactMarkdown>
      <LinkContainer>
        <LinkTo data-cyid="lucky" to={`/articles/${article.id}`}>
          Opširnije
        </LinkTo>
      </LinkContainer>
    </ArticleContainer>
  );
}

export default LuckyArticle;
