import axios from "axios";
import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useNavigate, useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";
import { BASE_URL } from "../../features/articles/articlesSlice";
import useTimedMessage from "../../customHooks/useTimedMessage";
import { styled } from "styled-components";
import EditArticleIcon from "./EditArticleIcon";
import LinkCloud from "./LinkCloud";

const components = {
  img: ({ alt, src, title }) => (
    <img
      alt={alt}
      src={src}
      title={title}
      style={{
        maxWidth: "100%",
        minWidth: 180,
        maxHeight: 400,
      }}
    />
  ),
  table: (props) => (
    <table
      style={{
        maxWidth: 300,
        float: "right",
        border: "2px solid rgba(36, 43, 230, 0.3)",
        borderRadius: "7px",
        margin: "5px 5px 0 10px ",
        padding: 5,
        fontSize: 12,
        backgroundColor: "rgba(50, 150, 200, 0.3)",
      }}
      {...props}
    />
  ),
  a: (props) => (
    <a {...props} className="link" style={{ textDecoration: "none" }} />
  ),
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

const ArticleContainer = styled.div`
  margin: 20px;
  transition: all 0.1s;
  overflow: hidden;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [cloud, setCloud] = useState();
  const addMessage = useTimedMessage();
  const navigate = useNavigate();

  useEffect(() => {
    async function getArticle() {
      try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        setArticle(response.data);
      } catch (error) {
        addMessage({ content: error.response.data.error, variety: "error" });
        setTimeout(() => navigate(-1), 6000);
      }
    }

    getArticle();
  }, [id, addMessage, navigate]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      document.querySelectorAll(".link").forEach((a) =>
        a.addEventListener("mouseenter", (e) => {
          const arr = e.target.getAttribute("href").split("/");
          setCloud(arr[arr.length - 1]);
          console.log("FOO", arr[arr.length - 1]);
        }),
      );
    }, 300);
  }, []);

  return (
    <ArticleContainer>
      <Title>{article?.title}</Title>
      <ReactMarkdown
        id="markdown"
        components={components}
        remarkPlugins={[remarkGfm]}
      >
        {article?.content}
      </ReactMarkdown>
      <EditArticleIcon articleId={id} />
      {cloud && <LinkCloud id={cloud} />}
    </ArticleContainer>
  );
}

export default ArticlePage;
