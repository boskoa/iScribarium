import { keyframes, styled, css } from "styled-components";
import { useNavigate } from "react-router-dom";
import NewArticleIcon from "./NewArticleIcon";
import AuthorsIcon from "./AuthorsIcon";
import MenuIcon from "./MenuIcon";
import { useState } from "react";
import CategoriesIcon from "./CategoriesIcon";
import ArticlesIcon from "./ArticlesIcon";
import AdminIcon from "./AdminIcon";
import { useSelector } from "react-redux";
import { selectLoggedAuthor } from "../../../features/login/loginSlice";

const MenuContainer = styled.div`
  position: fixed;
  bottom: 10px;
  left: 10px;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: end;

  &:hover {
    height: 200px;
  }
`;

const grow = keyframes`
  from {
    opacity: 0.1;
    transform: scale(0.1) translateY(150px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0px);
  }
`;

const NavContainer = styled.nav`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  bottom: 50px;
  width: 50px;
  gap: 10px;
  color: white;
  overflow: hidden;
  transform-origin: center 70%;
  animation: ${() =>
    css`0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${grow} forwards`};
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
    transform: ${({ $main }) => !$main && "scale(0.95)"};
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

  @media (hover: none) {
    cursor: default;
  }
`;

function Nav() {
  const author = useSelector(selectLoggedAuthor);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  return (
    <MenuContainer
      data-testid="navigation"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <IconContainerWrap title="Meni" $lg="black" $main={true}>
        <IconContainer
          onClick={(e) => e.stopPropagation()}
          style={{ backgroundColor: "limegreen" }}
        >
          <MenuIcon />
        </IconContainer>
        {show && (
          <NavContainer>
            {author?.admin && (
              <IconContainerWrap title="Admin" $lg="#dd0000">
                <IconContainer onClick={() => navigate("/admin")}>
                  <AdminIcon />
                </IconContainer>
              </IconContainerWrap>
            )}
            <IconContainerWrap title="Članci" $lg="#006c80">
              <IconContainer onClick={() => navigate("/articles")}>
                <ArticlesIcon />
              </IconContainer>
            </IconContainerWrap>
            <IconContainerWrap title="Kategorije" $lg="#800080">
              <IconContainer onClick={() => navigate("/categories")}>
                <CategoriesIcon />
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
        )}
      </IconContainerWrap>
    </MenuContainer>
  );
}

export default Nav;
