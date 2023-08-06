import { styled } from "styled-components";
import LogoImage from "./LogoImage";

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  transition: all 0.3s;
  cursor: pointer;
`;

function Logo() {
  return (
    <LogoContainer>
      <LogoImage />
    </LogoContainer>
  );
}

export default Logo;
