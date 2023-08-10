import { styled } from "styled-components";
import UserData from "./UserData";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  min-width: 320px;
`;

function Login() {
  return (
    <LoginContainer>
      <UserData />
    </LoginContainer>
  );
}

export default Login;
