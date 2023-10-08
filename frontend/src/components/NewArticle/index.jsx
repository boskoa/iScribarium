import { styled } from "styled-components";
import NewArticleForm from "./NewArticleForm";

export const NewArticleContainer = styled.div`
  margin: 20px;
  flex: 1;
`;

export const PageTitle = styled.h3`
  margin-bottom: 20px;
`;

export const ArticleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 20px;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Helper = styled.div`
  max-width: 600px;
  background-color: rgba(200, 200, 0, 0.3);
  padding: 3px;
  border: 3px solid black;
  border-radius: 8px;
  flex: 1;
  font-size: 14px;
  height: 320px;
  padding: 10px;
  position: sticky;
  top: 10px;
`;

function NewArticle() {
  return (
    <NewArticleContainer>
      <PageTitle>Novi članak</PageTitle>
      <ArticleContainer>
        <NewArticleForm />
        <Helper>
          <h4>Uputstvo za formatiranje</h4>
          <br />
          <p>## Podnaslov</p>
          <br />
          <p>### Podpodnaslov</p>
          <br />
          <p>Tekst</p>
          <br />
          <p>
            (<i>postavljanje slike</i>)
          </p>
          <p>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</p>
          <p>|:---:|</p>
          <p>
            |![<i>opis slike</i>](<i>link ka slici</i>)|
          </p>
          <p>
            |<i>naslov slike</i>|
          </p>
          <br />
          <p>
            (<i>linkovanje</i>)
          </p>
          <p>
            [<i>tekst linka</i>](<i>/articles/:id</i>)
          </p>
        </Helper>
      </ArticleContainer>
    </NewArticleContainer>
  );
}

export default NewArticle;
