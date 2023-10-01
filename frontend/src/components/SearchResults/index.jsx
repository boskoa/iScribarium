/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BASE_URL } from "../../features/articles/articlesSlice";
import { styled } from "styled-components";

const SearchedContainer = styled.div`
  margin: 50px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Result = styled.div`
  border: 3px solid black;
  border-radius: 8px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.1);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  color: ${({ theme }) => theme.main.color};
`;

function SearchResults() {
  const { title } = useParams();
  const [existingArticles, setExistingArticles] = useState(null);
  const results = existingArticles?.map((a) => stripMarkdown(a));

  function stripMarkdown(article) {
    return {
      id: article.id,
      title: article.title,
      content:
        article.content?.split("## Uvod")[1]?.split(".")[0].trim() ||
        article.content.split(".")[0],
    };
  }

  useEffect(() => {
    async function checkTitles() {
      const response = await axios.get(
        `${BASE_URL}?title=${title}&pagination=0,10`,
      );
      setExistingArticles(response.data);
    }

    if (title) {
      checkTitles();
    } else {
      setExistingArticles(null);
    }
  }, [title]);

  if (!existingArticles) {
    return "";
  }

  return (
    <SearchedContainer>
      <h2>Rezultati pretrage za "{title}":</h2>
      {results.map((a) => (
        <Result key={a.id}>
          <StyledLink to={`/articles/${a.id}`}>{a.title}</StyledLink>
          <p>{a.content || ""}</p>
        </Result>
      ))}
    </SearchedContainer>
  );
}

export default SearchResults;
