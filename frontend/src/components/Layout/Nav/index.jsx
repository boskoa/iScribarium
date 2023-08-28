import { styled } from "styled-components";
import HomeIcon from "./HomeIcon";
import { useNavigate } from "react-router-dom";
import NewArticleIcon from "./NewArticleIcon";
import AuthorsIcon from "./AuthorsIcon";

const NavContainer = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5px 2px;
  top: 30%;
  background-color: rgba(0, 0, 255, 0.6);
  width: 50px;
  height: 200px;
  border-radius: 0px 5px 5px 0px;
  box-shadow: 0 0 0 3px black;
  color: white;
  z-index: 10;
  overflow: hidden;
  transform: translateX(-45px);
  transition: all 0.5s;

  &:hover {
    transform: translateX(0);
  }
`;

const IconContainerWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 50%;
  padding: 3px;
  background-image: ${({ $lg }) =>
    `linear-gradient(${$lg} 40%, ${$lg}, white, ${$lg} 50%)`};
  background-size: 40px 92px;
  background-position: top;
  transition: all 0.5s;

  &:hover {
    background-position: bottom;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 34px;
  width: 34px;
  border-radius: 50%;
  padding: 3px;
  background-color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
`;

function Nav() {
  const navigate = useNavigate();

  return (
    <NavContainer>
      <IconContainerWrap title="Početna stranica" $lg="#a00202">
        <IconContainer onClick={() => navigate("/")}>
          <HomeIcon />
        </IconContainer>
      </IconContainerWrap>
      <IconContainerWrap title="Autori" $lg="#014301">
        <IconContainer onClick={() => navigate("/authors")}>
          <AuthorsIcon />
        </IconContainer>
      </IconContainerWrap>
      <IconContainerWrap title="Novi članak" $lg="#b5ac0a">
        <IconContainer onClick={() => navigate("/new-article")}>
          <NewArticleIcon />
        </IconContainer>
      </IconContainerWrap>
    </NavContainer>
  );
}

export default Nav;
