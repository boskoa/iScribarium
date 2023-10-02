import styled from "styled-components";
import { ArticleContainer } from "./LuckyArticle";
import { useEffect, useState } from "react";
import axios from "axios";

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
      {categories.map((c) => (
        <p key={c.id}>
          {c.name} {c.count}
        </p>
      ))}
    </CategoriesContainer>
  );
}

export default Categories;
