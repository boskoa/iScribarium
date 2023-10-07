import styled from "styled-components";
import {
  Article,
  ArticleCount,
  Articles,
  ArticlesContainer,
  AuthorContainer as CategoryContainer,
} from "../Authors/Author";
import { LinkTo } from "../HomePage/LastArticles";

const Name = styled(LinkTo)`
  font-weight: 600;
`;

function Category({ category }) {
  if (!category) return;

  const count = category.articles?.length || 0;

  return (
    <CategoryContainer>
      <Name to={`/categories/${category.id}`}>{category.name}</Name>
      <ArticleCount>
        {count}{" "}
        {count === 1
          ? "članak"
          : [2, 3, 4].includes(count)
          ? "članka"
          : "članaka"}
      </ArticleCount>
      {count !== 0 && (
        <Articles>
          <ArticlesContainer>
            {category.articles?.map((a) => (
              <Article to={`/articles/${a.id}`} key={a.id}>
                {a.title}
              </Article>
            ))}
          </ArticlesContainer>
        </Articles>
      )}
    </CategoryContainer>
  );
}

export default Category;
