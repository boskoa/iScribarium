import {
  ArticleContainer,
  Helper,
  NewArticleContainer,
  PageTitle,
} from "../NewArticle";
import EditArticleForm from "./EditArticleForm";

function EditArticle() {
  return (
    <NewArticleContainer>
      <PageTitle>Izmena članka</PageTitle>
      <ArticleContainer>
        <EditArticleForm />
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

export default EditArticle;
