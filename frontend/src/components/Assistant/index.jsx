import { keyframes, styled } from "styled-components";
import Robotko from "./Robotko";
import SpeechBubble from "./SpeechBubble";
import { useSelector } from "react-redux";
import { selectMessage } from "../../features/message/messageSlice";

const MainAssistantContainer = styled.div`
  position: sticky;
  bottom: 10px;
  left: 100%;
  height: 230px;
  width: 300px;
  margin-top: -260px;
  overflow-x: hidden;
  z-index: 4;
`;

const enterAssistant = keyframes`
  from {
    transform: translateX(310px);
  }
  to {
    transform: translateX(0px);
  }
`;

const exitAssistant = keyframes`
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(310px);
  }
`;

const AssistantContainer = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: end;
  transform: translateX(310px);
  z-index: 5;
  animation:
    1s ${enterAssistant} forwards,
    1s ${exitAssistant} 6s forwards;
`;

function Assistant() {
  const message = useSelector(selectMessage);

  return (
    <MainAssistantContainer>
      {message?.content && (
        <AssistantContainer id="robotko">
          <SpeechBubble />
          <div style={{ width: "100px" }}>
            <Robotko />
          </div>
        </AssistantContainer>
      )}
    </MainAssistantContainer>
  );
}

export default Assistant;
