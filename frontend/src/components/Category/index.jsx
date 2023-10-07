import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthorContainer } from "../Authors/Author";
import { MainContainer, Title } from "../Authors";
import { LinkTo } from "../HomePage/LastArticles";
import styled from "styled-components";

const ArticlesContainer = styled(AuthorContainer)`
  display: flex;
  flex-wrap: wrap;
  align-content: space-evenly;
`;

function groupEntries(entries) {
  let grouped = {};

  for (const i of entries) {
    const letter = i.title[0].toLowerCase();
    if (!grouped[letter]) {
      grouped[letter] = [];
    }
    grouped[letter].push(i);
  }

  return grouped;
}

function Category() {
  const { id } = useParams();
  const [category, setCategory] = useState("");
  const [articles, setArticles] = useState({});
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function getCategory() {
      const response = await axios.get(`/api/categories/${id}`);
      setCategory(response.data.name);
      setArticles(groupEntries(response.data.articles));
      setCount(response.data.articles.length);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });

    if (id) {
      getCategory();
    }
  }, [id]);

  return (
    <MainContainer>
      <Title style={{ marginBottom: 20 }}>
        Kategorija: {category} ({count}{" "}
        {count === 1
          ? "članak"
          : [2, 3, 4].includes(count)
          ? "članka"
          : "članaka"}
        )
      </Title>
      {[...Object.keys(articles)].map((k) => (
        <div key={k} style={{ marginBottom: 10 }}>
          <Title>{k.toUpperCase()}</Title>
          <ArticlesContainer>
            {articles[k].map((a) => (
              <LinkTo
                to={`/articles/${a.id}`}
                key={a.id}
                style={{ display: "inline-block", width: "32%" }}
              >
                {a.title}
              </LinkTo>
            ))}
          </ArticlesContainer>
        </div>
      ))}
    </MainContainer>
  );
}

export default Category;
