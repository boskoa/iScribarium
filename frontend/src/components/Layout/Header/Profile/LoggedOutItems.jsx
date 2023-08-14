import { useNavigate } from "react-router-dom";
import { Item } from "./LoggedInItems";

function LoggedOutItems() {
  const navigate = useNavigate();

  return (
    <>
      <Item onClick={() => navigate("/register")}>registracija</Item>
      <Item onClick={() => navigate("/login")}>prijava</Item>
    </>
  );
}

export default LoggedOutItems;
