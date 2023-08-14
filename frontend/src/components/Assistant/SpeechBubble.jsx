import { useSelector } from "react-redux";
import { keyframes, styled } from "styled-components";
import { selectMessage } from "../../features/message/messageSlice";

const show = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const hide = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const MainSpeechContainer = styled.div`
  height: 70px;
  position: relative;
  right: -30px;
  top: 0px;
  align-self: flex-start;
  opacity: 0;
  animation:
    0.5s ${show} 1s forwards,
    0.5s ${hide} 5.5s forwards;
`;

const SpeechContainer = styled.div`
  width: 200px;
  height: 100%;
  background-color: white;
  border: 2px solid black;
  border-radius: 6px;
  overflow: hidden;
  padding: 5px;
`;

const Triangle = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  bottom: -18px;
  right: 10px;
  background: linear-gradient(
    45deg,
    transparent 46%,
    black 46%,
    black 54%,
    white 54%
  );
  border-right: 2px solid black;
`;

const Text = styled.p`
  color: black;
  font-size: 12px;
`;

function SpeechBubble() {
  const message = useSelector(selectMessage);

  return (
    <MainSpeechContainer>
      <SpeechContainer>
        <Text style={{ color: "black" }}>{message?.content}</Text>
      </SpeechContainer>
      <Triangle />
    </MainSpeechContainer>
  );
}

export default SpeechBubble;
