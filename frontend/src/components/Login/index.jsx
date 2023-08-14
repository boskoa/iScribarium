import { styled } from "styled-components";
import UserData from "./UserData";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectId } from "../../features/login/loginSlice";
import { useNavigate } from "react-router-dom";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15vh;
  min-width: 320px;
  min-height: 100vh;
`;

function Login() {
  const authorLogged = useSelector(selectId);
  const navigate = useNavigate();

  useEffect(() => {
    if (authorLogged) {
      navigate(-1);
    }
  }, [authorLogged, navigate]);

  return (
    <LoginContainer>
      <UserData />
    </LoginContainer>
  );
}

export default Login;
