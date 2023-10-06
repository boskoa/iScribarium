import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 30px;
  right: 30px;
  color: red;
`;

function LinkCloud({ id }) {
  const [article, setArticle] = useState({});

  useEffect(() => {
    async function getArticle() {
      const response = await axios.get(`/api/articles/${id}`);
      setArticle(response.data);
    }

    getArticle();
  }, [id]);

  if (!article) return;

  return <Container>{article.title}</Container>;
}

export default LinkCloud;
