import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  margin: 40px 10px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 10px;
`;

export const ButtonContainer = styled.div`
  padding: 5px;
  border: 3px solid ${({ $selected }) => ($selected ? "lime" : "black")};
  border-radius: 5px;
  background-color: yellow;
  color: black;
  width: 115px;
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  transition: all 0.3s;
  cursor: pointer;
  user-select: none;

  &:hover {
    border-color: red;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const AuthorsContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
`;

export const Title = styled.h2``;

export const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
  margin-top: 20px;
  z-index: -3;
`;

export const AuthorContainer = styled.div`
  min-height: 80px;
  border: 3px solid black;
  border-radius: 8px;
  padding: 10px;
  position: relative;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const Name = styled.h4``;

export const Articles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
`;

export const Graphs = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 5px;
`;

export const ArticlesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  z-index: 1;
`;

export const Article = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  width: 100px;
  overflow: hidden;
  color: ${({ theme }) => theme.main.color};
`;

export const ArticleCount = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;
