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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 10px;
`;

const ButtonContainer = styled.div`
  padding: 7px;
  border: 3px solid black;
  border-radius: 5px;
  background-color: yellow;
  color: black;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    border-color: red;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const AuthorsContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
`;

const Title = styled.h2``;

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
  margin-top: 20px;
  z-index: -3;
`;

const LIMIT = 10; //change later

function Authors() {
  const authors = useSelector(selectAllAuthors);
  const [offset, setOffset] = useState(0);
  const [filter, setFilter] = useState("");
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
      dispatch(getAllAuthors(`?pagination=${offset},${LIMIT}${filter}`));
    }
  }, [offset, dispatch, authors.length, filter]);

  useEffect(() => {
    dispatch(resetAuthors());
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [dispatch, filter]);

  return (
    <MainContainer>
      <Title>Autori članaka</Title>
      <Filters>
        <ButtonContainer onClick={() => setFilter("&order=name,asc")}>
          Abecedno
        </ButtonContainer>
        <ButtonContainer onClick={() => setFilter("&order=name,desc")}>
          Broj članaka
        </ButtonContainer>
        <ButtonContainer onClick={() => setFilter("&order=id,desc")}>
          Najnoviji
        </ButtonContainer>
      </Filters>
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
