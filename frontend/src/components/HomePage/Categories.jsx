import styled from "styled-components";
import { ArticleContainer } from "./LuckyArticle";
import { useEffect, useState } from "react";
import axios from "axios";
import { LinkContainer, LinkTo } from "./LastArticles";

const CategoriesContainer = styled(ArticleContainer)`
  flex-wrap: wrap;
`;

function Categories() {
  const [categories, setCategories] = useState();

  useEffect(() => {
    async function getCategories() {
      const result = await axios.get("/api/categories/count");
      setCategories(result.data);
    }

    getCategories();
  }, []);

  return (
    <CategoriesContainer>
      {categories?.map((c) => (
        <LinkTo style={{ width: "50%" }} to={`/categories/${c.id}`} key={c.id}>
          {c.name} {c.count}
        </LinkTo>
      ))}
      <LinkContainer>
        <LinkTo to="/categories">Sve kategorije</LinkTo>
      </LinkContainer>
    </CategoriesContainer>
  );
}

export default Categories;
