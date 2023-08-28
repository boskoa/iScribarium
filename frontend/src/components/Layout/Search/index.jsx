import { styled } from "styled-components";
import SearchIcon from "./SearchIcon";
import { useEffect, useRef, useState } from "react";
import SearchInput from "./SearchInput";
import axios from "axios";
import { BASE_URL } from "../../../features/articles/articlesSlice";
import { useNavigate } from "react-router-dom";

const SearchBlock = styled.div`
  position: absolute;
  top: 60px;
  right: 10px;
  width: 170px;
  z-index: 6;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  right: 0px;
  border-radius: 15px;
  width: 30px;
  height: 30px;
  padding: 3px;
  border: ${({ $showSearch }) =>
    $showSearch ? "2px solid transparent" : "2px solid black"};
  transition: all 0.1s;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }
`;

const Articles = styled.ul`
  list-style: none;
  position: relative;
  bottom: -40px;
  left: 0px;
  border: 2px solid black;
  border-radius: 10px;
  padding: 3px;
  background-color: teal;
  font-size: 14px;
  transition: all 0.3s;
`;

const StyledListItem = styled.li`
  border-radius: 3px;
  padding: 2px;

  &:hover {
    background-color: #045252;
    cursor: pointer;
  }
`;

function Search() {
  const [showSearch, setShowSearch] = useState(false);
  const [term, setTerm] = useState("");
  const searchRef = useRef(null);
  const [existingArticles, setExistingArticles] = useState(null);
  const navigate = useNavigate();

  function handleSearch() {
    if (!term) {
      setShowSearch((p) => !p);
    } else {
      navigate(`/searched/${term}`);
      setTerm("");
    }
  }

  function handleSelection(id) {
    navigate(`/articles/${id}`);
    setTerm("");
    setShowSearch(false);
  }

  useEffect(() => {
    function handleClickOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
        setTerm("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleEnter(e) {
      if (showSearch && term && e.key === "Enter") {
        setShowSearch(false);
        setTerm("");
        navigate(`/searched/${term}`);
      }
    }

    document.addEventListener("keypress", handleEnter);

    return () => document.removeEventListener("keypress", handleEnter);
  }, [showSearch, term, navigate]);

  useEffect(() => {
    async function checkTitles() {
      const response = await axios.get(
        `${BASE_URL}?title=${term}&pagination=0,10`,
      );
      setExistingArticles(response.data);
    }

    if (term) {
      checkTitles();
    } else {
      setExistingArticles(null);
    }
  }, [term]);

  return (
    <SearchBlock ref={searchRef}>
      <StyledContainer $showSearch={showSearch} onClick={handleSearch}>
        <SearchIcon />
        <SearchInput showSearch={showSearch} term={term} setTerm={setTerm} />
      </StyledContainer>
      {Boolean(existingArticles?.length) && (
        <Articles>
          {existingArticles.map((a) => (
            <StyledListItem key={a.id} onClick={() => handleSelection(a.id)}>
              {a.title}
            </StyledListItem>
          ))}
        </Articles>
      )}
    </SearchBlock>
  );
}

export default Search;
