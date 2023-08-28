import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import {
  getAllAuthors,
  resetAuthors,
  selectAllAuthors,
  selectAuthorsLoading,
} from "../../features/authors/authorsSlice";
import { useEffect, useRef, useState } from "react";
import Author from "./Author";
import useIntersectionObserver from "../../customHooks/useIntersectionObserver";

const MainContainer = styled.div`
  margin: 40px 10px;
`;

const AuthorsContainer = styled.div`
  padding: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h2``;

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 100%;
  margin-top: auto;
  border: 2px solid black;
  z-index: -3;
`;

const LIMIT = 1; //change later

function Authors() {
  const authors = useSelector(selectAllAuthors);
  const [offset, setOffset] = useState(0);
  const endRef = useRef(null);
  const intersecting = useIntersectionObserver(endRef);
  const [stopLoading, setStopLoading] = useState(false);
  const loading = useSelector(selectAuthorsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (intersecting && !stopLoading) {
      setOffset((prev) => prev + LIMIT);
    }
  }, [intersecting, stopLoading]);

  useEffect(() => {
    if (offset - LIMIT > authors.length) {
      setStopLoading(true);
    } else {
      setStopLoading(false);
    }
  }, [offset, authors.length]);

  useEffect(() => {
    if (offset === authors.length) {
      dispatch(getAllAuthors(`?pagination=${offset},${LIMIT}`));
    }
  }, [offset, dispatch, authors.length]);

  useEffect(() => {
    dispatch(resetAuthors());
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [dispatch]);

  return (
    <MainContainer>
      <Title>Autori članaka</Title>
      <AuthorsContainer>
        {authors.map((a) => (
          <Author key={a.id} author={a} />
        ))}
      </AuthorsContainer>
      <SpinnerContainer ref={endRef}>
        {loading && "Loading authors"}
      </SpinnerContainer>
      {/*put spinner later*/}
    </MainContainer>
  );
}

export default Authors;
