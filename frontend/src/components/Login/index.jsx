import { styled } from "styled-components";
import UserData from "./UserData";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15vh;
  min-width: 320px;
  min-height: 100vh;
`;

function Login() {
  return (
    <LoginContainer>
      <UserData />
    </LoginContainer>
  );
}

export default Login;
