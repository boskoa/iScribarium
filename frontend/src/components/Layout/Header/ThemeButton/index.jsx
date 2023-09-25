import { styled, useTheme } from "styled-components";
import MoonIcon from "./MoonIcon";

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  padding: 5px;
  box-shadow: 0 0 10px 0 ${({ theme }) => theme.themeButton.color};
  transition: all 0.3s;
  cursor: pointer;

  &:active {
    box-shadow: none;
    transform: scale(0.95);
  }
`;

function ThemeButton({ handleTheme }) {
  const theme = useTheme();

  return (
    <IconContainer onClick={handleTheme} style={{}} title="Change theme">
      <MoonIcon fill={theme.themeButton.color} />
    </IconContainer>
  );
}

export default ThemeButton;
