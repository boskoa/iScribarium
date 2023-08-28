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
  border: ${({ $showSearch }) =>
    $showSearch ? "2px solid black" : "2px solid transparent"};
  transition: all 0.1s;
  overflow: hidden;
`;

const SearchComponent = styled.input`
  border: 1px solid teal;
  border-radius: 10px;
  margin-left: 10px;
  background-color: transparent;
  padding: 2px 5px;
  font-size: 12px;
`;

function SearchInput({ showSearch, term, setTerm }) {
  return (
    <SearchContainer $showSearch={showSearch}>
      {showSearch && (
        <SearchComponent
          onClick={(e) => e.stopPropagation()}
          type="text"
          size={14}
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      )}
    </SearchContainer>
  );
}

export default SearchInput;
