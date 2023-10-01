import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { logout } from "../../../../features/login/loginSlice";
import { useNavigate } from "react-router-dom";

export const Item = styled.p`
  color: white;

  &:active {
    color: red;
  }
`;

function LoggedInItems() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Item onClick={() => dispatch(logout())}>odjava</Item>
      <Item onClick={() => navigate("/authors/settings")}>profil</Item>
    </>
  );
}

export default LoggedInItems;
