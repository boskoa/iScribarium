import { useDispatch, useSelector } from "react-redux";
import {
  getAllArticles,
  resetArticles,
  selectAllArticles,
  selectArticlesLoading,
} from "../../features/articles/articlesSlice";
import { useEffect, useRef, useState } from "react";
import useIntersectionObserver from "../../customHooks/useIntersectionObserver";
import {
  ButtonContainer,
  MainContainer,
  SpinnerContainer,
  Title,
} from "../Authors";
import { Article, AuthorContainer } from "../Authors/Author";
import styled from "styled-components";

const ArticlesContainer = styled(AuthorContainer)`
  min-height: 90vh;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const LIMIT = 100;

function Articles() {
  const articles = useSelector(selectAllArticles);
  const [offset, setOffset] = useState(0);
  const [criterium, setCriterium] = useState("asc");
  const endRef = useRef(null);
  const intersecting = useIntersectionObserver(endRef);
  const [stopLoading, setStopLoading] = useState(false);
  const loading = useSelector(selectArticlesLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (intersecting && !stopLoading) {
      setOffset((prev) => prev + LIMIT);
    }
  }, [intersecting, stopLoading]);

  useEffect(() => {
    if (offset - LIMIT > articles.length) {
      setStopLoading(true);
    } else {
      setStopLoading(false);
    }
  }, [offset, articles.length]);

  useEffect(() => {
    if (offset === articles.length) {
      dispatch(
        getAllArticles(
          `?pagination=${offset},${LIMIT}&order=title,${criterium}`,
        ),
      );
    }
  }, [offset, dispatch, articles.length, criterium]);

  useEffect(() => {
    dispatch(resetArticles());
    setOffset(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [dispatch, criterium]);

  return (
    <MainContainer style={{ gap: "20px" }}>
      <Title>Članci</Title>
      <ButtonContainer
        onClick={() => {
          setCriterium(criterium === "asc" ? "desc" : "asc");
        }}
      >
        Abecedno {criterium === "asc" ? "⇡" : "⇣"}
      </ButtonContainer>
      <ArticlesContainer>
        {articles.map((a) => (
          <Article to={`/articles/${a.id}`} key={a.id}>
            {a.title}
          </Article>
        ))}
      </ArticlesContainer>
      <SpinnerContainer ref={endRef}>
        {loading && "Loading authors"}
      </SpinnerContainer>
      {/*put spinner later*/}
    </MainContainer>
  );
}

export default Articles;
