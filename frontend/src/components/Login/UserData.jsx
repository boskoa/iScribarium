import { styled } from "styled-components";

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 0 0 5px 0 gray;
  width: 300px;
  height: 300px;
  padding: 10px;
  background: linear-gradient(
    60deg,
    red 5.5%,
    blue 6%,
    blue 20.5%,
    green 21%,
    green 27.5%,
    yellow 28%,
    yellow 50.5%,
    red 51%,
    red 70.5%,
    blue 71%
  );
  border-radius: 3px;
  -webkit-text-stroke: 1px black;
  color: white;
  font-weight: 800;
  font-size: 24px;
`;

function UserData() {
  return <InputContainer>User data</InputContainer>;
}

export default UserData;
