import { forwardRef } from "react";
import { styled } from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  position: absolute;
  top: -2px;
  right: -2px;
  border-radius: 15px;
  width: ${({ $showSearch }) => ($showSearch ? "170px" : "30px")};
  height: 30px;
  font-size: ${({ $show }) => ($show ? "12px" : "0px")};
  z-index: 5;
  border: ${({ $showSearch, theme }) =>
    $showSearch ? `2px solid ${theme.main.color}` : "2px solid transparent"};
  transition: all 0.1s;
  overflow: hidden;
`;

const SearchComponent = styled.input`
  border: 1px solid ${({ theme }) => theme.main.color};
  border-radius: 10px;
  margin-left: 10px;
  background-color: transparent;
  padding: 2px 5px;
  font-size: 12px;
  color: ${({ theme }) => theme.main.color};

  &:focus {
    outline: none;
  }
`;

const SearchInput = forwardRef(function SearchInput(
  { showSearch, term, setTerm },
  inputRef,
) {
  return (
    <SearchContainer $showSearch={showSearch}>
      {showSearch && (
        <SearchComponent
          autoComplete="false"
          ref={inputRef}
          name="search"
          onClick={(e) => e.stopPropagation()}
          type="text"
          size={14}
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      )}
    </SearchContainer>
  );
});

export default SearchInput;
