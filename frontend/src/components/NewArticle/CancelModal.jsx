import { styled } from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 200;
  transform: translateY(${({ $height }) => $height}px);
`;

export const Modal = styled.div`
  background-color: teal;
  border: 3px solid black;
  border-radius: 8px;
  height: 100px;
  padding: 20px;
`;

export const ModalButton = styled.button`
  background-color: ${({ $bg }) => $bg};
  border: 3px solid black;
  border-radius: 8px;
  font-weight: 600;
  color: white;
  padding: 5px;
  cursor: pointer;

  &:hover {
    border-color: yellow;
  }

  &:active {
    transform: scale(0.95);
  }
  width: 50px;
  float: ${({ $float }) => $float};
`;

function CancelModal({ setShowModal, reset }) {
  function handleCancel() {
    setShowModal(false);
    reset();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <ModalContainer id="modal">
      <Modal>
        <p style={{ marginBottom: "10px" }}>Sigurno želiš da poništiš unos?</p>
        <ModalButton
          $bg="green"
          $float="left"
          onClick={() => setShowModal(false)}
        >
          Ne
        </ModalButton>
        <ModalButton $bg="green" $float="right" onClick={handleCancel}>
          Da
        </ModalButton>
      </Modal>
    </ModalContainer>
  );
}

export default CancelModal;
