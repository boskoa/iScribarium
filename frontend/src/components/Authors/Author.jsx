import { Link } from "react-router-dom";
import { styled } from "styled-components";

const AuthorContainer = styled.div`
  min-height: 200px;
  border: 3px solid black;
  border-radius: 8px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.1);
`;

const Name = styled.h4`
  margin-bottom: 10px;
`;

const Articles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`;

const Article = styled(Link)`
  font-size: 14px;
  text-decoration: none;
`;

function Author({ author }) {
  return (
    <AuthorContainer>
      <Name>{author.name}</Name>
      <Articles>
        {author.articles?.map((a) => (
          <Article to={`/articles/${a.id}`} key={a.id}>
            {a.title}
          </Article>
        ))}
      </Articles>
    </AuthorContainer>
  );
}

export default Author;
