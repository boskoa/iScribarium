import { styled } from "styled-components";
import NewArticleForm from "./NewArticleForm";
import CancelModal from "./CancelModal";

const NewArticleContainer = styled.div`
  margin: 20px;
`;

const PageTitile = styled.h3`
  margin-bottom: 20px;
`;

function NewArticle() {
  return (
    <NewArticleContainer>
      <PageTitile>Novi članak</PageTitile>
      <NewArticleForm />
      <CancelModal />
    </NewArticleContainer>
  );
}

export default NewArticle;
