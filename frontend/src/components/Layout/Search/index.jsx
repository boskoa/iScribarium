import { styled } from "styled-components";
import SearchIcon from "./SearchIcon";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 60px;
  right: 10px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  padding: 3px;
  box-shadow: 0 0 10px 0 rgba(100, 250, 100, 1);
  transition: all 0.3s;
  cursor: pointer;

  &:active {
    box-shadow: none;
    transform: scale(0.95);
  }
`;

function Search() {
  return (
    <SearchContainer>
      <SearchIcon />
    </SearchContainer>
  );
}

export default Search;
