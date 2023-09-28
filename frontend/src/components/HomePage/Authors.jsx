import styled, { keyframes, css } from "styled-components";

const AuthorsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: calc(90vw - 50px);
  gap: 10px;
`;

const slideIn = keyframes`
  from {
    transform: scale(0.1);
  }
  to {
    transform: scale(1);
  }
`;

const Author = styled.div`
  width: 100px;
  height: 100px;
  background-color: teal;
  animation: ${() =>
    css`0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${slideIn} both`};

  &:nth-child(${({ $order }) => $order}) {
    animation-delay: ${({ $order }) => `${$order * 0.3 + 0.5}s`};
  }
`;

function Authors() {
  return (
    <AuthorsContainer>
      <Author $order={1} />
      <Author $order={2} />
      <Author $order={3} />
      <Author $order={4} />
      <Author $order={5} />
      <Author $order={6} />
      <Author $order={7} />
      <Author $order={8} />
    </AuthorsContainer>
  );
}

export default Authors;
