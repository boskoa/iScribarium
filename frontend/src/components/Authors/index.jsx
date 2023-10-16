import { useDispatch, useSelector } from "react-redux";
import {
  getAllAuthors,
  resetAuthors,
  selectAllAuthors,
  selectAuthorsLoading,
} from "../../features/authors/authorsSlice";
import { useEffect, useRef, useState } from "react";
import Author from "./Author";
import useIntersectionObserver from "../../customHooks/useIntersectionObserver";
import Loading from "../Loading";
import {
  AuthorsContainer,
  ButtonContainer,
  Filters,
  MainContainer,
  SpinnerContainer,
  Title,
} from "./authorStyledComponents";

const LIMIT = 5; //change later

function Authors() {
  const authors = useSelector(selectAllAuthors);
  const [offset, setOffset] = useState(0);
  const [order, setOrder] = useState("&order=name,asc");
  const selectedFilter = order.split(",")[0].split("=")[1];
  const [criterium, setCriterium] = useState("desc");
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
      dispatch(getAllAuthors(`?pagination=${offset},${LIMIT}${order}`));
    }
  }, [offset, dispatch, authors.length, order, criterium]);

  useEffect(() => {
    dispatch(resetAuthors());
    setOffset(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [dispatch, order, criterium]);

  return (
    <MainContainer>
      <Title>Autori članaka</Title>
      <Filters>
        <ButtonContainer
          $selected={selectedFilter === "name"}
          onClick={() => {
            setOrder(`&order=name,${criterium}`);
            setCriterium(criterium === "asc" ? "desc" : "asc");
          }}
        >
          Abecedno{" "}
          {selectedFilter === "name" ? (criterium === "desc" ? "⇡" : "⇣") : ""}
        </ButtonContainer>
        <ButtonContainer
          $selected={selectedFilter === "count"}
          onClick={() => {
            setOrder(`&order=count,${criterium}`);
            setCriterium(criterium === "asc" ? "desc" : "asc");
          }}
        >
          Broj članaka{" "}
          {selectedFilter === "count" ? (criterium === "desc" ? "⇡" : "⇣") : ""}
        </ButtonContainer>
        <ButtonContainer
          $selected={selectedFilter === "id"}
          onClick={() => {
            setCriterium(criterium === "asc" ? "desc" : "asc");
            setOrder(`&order=id,${criterium}`);
          }}
        >
          Najnoviji{" "}
          {selectedFilter === "id" ? (criterium === "desc" ? "⇡" : "⇣") : ""}
        </ButtonContainer>
      </Filters>
      <AuthorsContainer>
        {authors.map((a) => (
          <Author key={a.id} author={a} />
        ))}
      </AuthorsContainer>
      <SpinnerContainer ref={endRef}>{loading && <Loading />}</SpinnerContainer>
    </MainContainer>
  );
}

export default Authors;
