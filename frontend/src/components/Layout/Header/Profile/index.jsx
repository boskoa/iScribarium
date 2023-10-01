import { styled } from "styled-components";
import ProfileIcon from "../../../../assets/defaultAvatar.svg";
import { useEffect, useRef, useState } from "react";
import LoggedInItems from "./LoggedInItems";
import { useSelector } from "react-redux";
import LoggedOutItems from "./LoggedOutItems";
import { selectId } from "../../../../features/login/loginSlice";

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  box-shadow: ${({ $show }) => !$show && "0 0 10px 0 rgba(100, 250, 100, 1)"};
  transition: all 0.3s;
  cursor: pointer;

  &:active {
    box-shadow: none;
    transform: scale(0.95);
  }
`;

const Image = styled.img`
  border-radius: 50%;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50px;
  width: ${({ $show }) => ($show ? "170px" : "30px")};
  height: 30px;
  background: linear-gradient(
    to left,
    transparent 30px,
    ${({ theme }) => theme.header.bg} 70px
  );
  padding: 6px 24px 6px 6px;
  font-size: ${({ $show }) => ($show ? "12px" : "0px")};
  z-index: 5;
  box-shadow: 0 0 10px 0 rgba(100, 250, 100, 1);
  transition: all 0.1s;
`;

function ProfileButton() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const authorLogged = useSelector(selectId);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <IconContainer
      ref={menuRef}
      $show={showMenu}
      onClick={() => setShowMenu((p) => !p)}
    >
      <Image
        src={`/public/data/uploads/avatars/${authorLogged}.webp`}
        alt="user avatar"
        onError={(e) => {
          e.currentTarget.src = ProfileIcon;
          e.currentTarget.height = "28";
          e.currentTarget.width = "28";
        }}
        height="100%"
        width="100%"
      />
      <Menu $show={showMenu}>
        {authorLogged ? <LoggedInItems /> : <LoggedOutItems />}
      </Menu>
    </IconContainer>
  );
}

export default ProfileButton;
