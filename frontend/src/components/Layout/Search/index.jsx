import { styled } from "styled-components";
import SearchIcon from "./SearchIcon";
import { useEffect, useRef, useState } from "react";
import SearchInput from "./SearchInput";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 60px;
  right: 10px;
  border-radius: 15px;
  width: 30px;
  height: 30px;
  padding: 3px;
  border: ${({ $showSearch }) =>
    $showSearch ? "2px solid transparent" : "2px solid black"};
  transition: all 0.1s;
  cursor: pointer;
  z-index: 6;

  &:active {
    transform: scale(0.95);
  }
`;

function Search() {
  const [showSearch, setShowSearch] = useState(false);
  const [term, setTerm] = useState("");
  const searchRef = useRef(null);

  function handleSearch() {
    if (!term) {
      setShowSearch((p) => !p);
    } else {
      console.log("SEARCH FOR", term);
      setTerm("");
    }
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
        console.log(e.target.value);
        setShowSearch(false);
        setTerm("");
      }
    }

    document.addEventListener("keypress", handleEnter);

    return () => document.removeEventListener("keypress", handleEnter);
  }, [showSearch, term]);

  return (
    <StyledContainer
      ref={searchRef}
      $showSearch={showSearch}
      onClick={handleSearch}
    >
      <SearchIcon />
      <SearchInput showSearch={showSearch} term={term} setTerm={setTerm} />
    </StyledContainer>
  );
}

export default Search;
