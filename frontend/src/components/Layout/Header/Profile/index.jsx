import { styled } from "styled-components";
import ProfileIcon from "./ProfileIcon";
import { useEffect, useRef, useState } from "react";
import LoggedInItems from "./LoggedInItems";

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  padding: 6px;
  box-shadow: ${({ $show }) => !$show && "0 0 10px 0 rgba(100, 250, 100, 1)"};
  transition: all 0.3s;
  cursor: pointer;

  &:active {
    box-shadow: none;
    transform: scale(0.95);
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50px;
  width: ${({ $show }) => ($show ? "140px" : "30px")};
  height: 30px;
  background: linear-gradient(to left, transparent 30px, gray 70px);
  padding: 6px 24px 6px 6px;
  font-size: ${({ $show }) => ($show ? "12px" : "0px")};
  z-index: 5;
  box-shadow: 0 0 10px 0 rgba(100, 250, 100, 1);
  transition: all 0.1s;
`;

function ProfileButton() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

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
      <ProfileIcon />
      <Menu $show={showMenu}>
        <LoggedInItems />
      </Menu>
    </IconContainer>
  );
}

export default ProfileButton;
