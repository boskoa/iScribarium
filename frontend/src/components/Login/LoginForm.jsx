import { styled } from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  border-radius: 3px;
  width: 200px;
  height: 100px;
`;

function LoginForm() {
  return (
    <LoginContainer>
      <h4>HAI</h4>
    </LoginContainer>
  );
}

export default LoginForm;
