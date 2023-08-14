import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { logout } from "../../../../features/login/loginSlice";

export const Item = styled.p`
  color: white;

  &:active {
    color: red;
  }
`;

function LoggedInItems() {
  const dispatch = useDispatch();

  return (
    <>
      <Item onClick={() => dispatch(logout())}>odjava</Item>
      <Item>profil</Item>
    </>
  );
}

export default LoggedInItems;
