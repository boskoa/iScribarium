import axios from "axios";
import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link, useNavigate, useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";
import { BASE_URL } from "../../features/articles/articlesSlice";
import useTimedMessage from "../../customHooks/useTimedMessage";
import { styled } from "styled-components";
import EditArticleIcon from "./EditArticleIcon";
import LinkCloud from "./LinkCloud";
import { Button } from "../NewArticle/NewArticleForm";
import Loading from "../Loading";

const components = {
  img: ({ alt, src, title }) => (
    <img
      alt={alt}
      src={src}
      title={title}
      loading="lazy"
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

const CategoriesContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  align-content: start;
  gap: 30px;
  margin-top: 10px;
`;

const CategoryButton = styled(Button)`
  min-width: 70px;
`;

const Id = styled.p`
  color: #528a8a;
  margin-top: 10px;
  font-size: 13px;
  width: 100%;
`;

function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState();
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

    const index = setTimeout(() => {
      document.querySelectorAll(".link").forEach((a) => {
        a.addEventListener("mouseenter", (e) => {
          const arr = e.target.getAttribute("href").split("/");
          const position = e.target.getBoundingClientRect();
          setCloud({
            id: arr[arr.length - 1],
            top: position.top,
            left: position.left,
            height: position.height,
            width: position.width,
          });
        });
        a.addEventListener("mouseleave", () => {
          setCloud((p) => ({ ...p, id: null }));
        });
      });
    }, 500);

    return () => clearTimeout(index);
  }, []);

  if (!article?.id) return <Loading />;

  return (
    <ArticleContainer>
      <Title title={`ID: ${article.id}`}>{article?.title}</Title>
      <ReactMarkdown
        id="markdown"
        components={components}
        remarkPlugins={[remarkGfm]}
      >
        {article?.content}
      </ReactMarkdown>
      <Id style={{ marginTop: 40 }}>Kategorije:</Id>
      <CategoriesContainer>
        {article?.categories.map((c) => (
          <Link
            to={`/categories/${c.article_category.categoryId}`}
            key={c.article_category.categoryId}
          >
            <CategoryButton $bg="green">{c.name}</CategoryButton>
          </Link>
        ))}
      </CategoriesContainer>
      <Id>
        <i>Autor: {article.author.name}</i>, <i>ID: {article.id}</i>
      </Id>
      <EditArticleIcon articleId={id} />
      <LinkCloud cloud={cloud} />
    </ArticleContainer>
  );
}

export default ArticlePage;
