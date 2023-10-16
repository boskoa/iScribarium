import { useDispatch, useSelector } from "react-redux";
import { selectLoggedAuthor } from "../../features/login/loginSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  getAllAuthors,
  selectNonAdminAuthors,
  updateAuthor,
} from "../../features/authors/authorsSlice";
import {
  AuthorsContainer,
  AuthorContainer,
} from "../Authors/authorStyledComponents";
import styled from "styled-components";
import { Button } from "../NewArticle/NewArticleForm";
import Loading from "../Loading";

const Author = styled(AuthorContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 0;
  gap: 30px;
`;

const Name = styled.p`
  flex: 1;
`;

const AdminButton = styled(Button)`
  min-width: 70px;
`;

function AdminPage() {
  const author = useSelector(selectLoggedAuthor);
  const navigate = useNavigate();
  const authors = useSelector(selectNonAdminAuthors);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!author?.admin) {
      navigate(-1);
    }
  }, [author, navigate]);

  useEffect(() => {
    dispatch(getAllAuthors("?order=username,asc"));
  }, [dispatch]);

  function handleUpdate(a) {
    dispatch(
      updateAuthor({
        id: a.id,
        token: author.token,
        newData: { approved: !a.approved },
      }),
    );
  }

  if (!author?.admin) {
    navigate(-1);
    return "Not authorized";
  }

  if (!authors.length) return <Loading />;

  return (
    <AuthorsContainer style={{ paddingTop: 50 }}>
      {authors.map((a) => (
        <Author style={{ minHeight: 0 }} key={a.id}>
          <Name>{a.username}</Name>
          <AdminButton onClick={() => handleUpdate(a)} $bg="green">
            {a.approved ? "zabrani" : "odobri"}
          </AdminButton>
          <AdminButton $bg="red">obriši</AdminButton>
        </Author>
      ))}
    </AuthorsContainer>
  );
}

export default AdminPage;
