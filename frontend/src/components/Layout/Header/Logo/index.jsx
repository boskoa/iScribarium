import { styled } from "styled-components";
import LogoImage from "./LogoImage";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <LogoContainer onClick={() => navigate("/")}>
      <LogoImage />
    </LogoContainer>
  );
}

export default Logo;
