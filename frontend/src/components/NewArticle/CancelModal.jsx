import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Button } from "./NewArticleForm";

const ModalContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  top: -70px;
  left: -10px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 200;
  transform: translateY(${({ $height }) => $height}px);
`;

const Modal = styled.div`
  background-color: teal;
  border: 3px solid black;
  border-radius: 8px;
  height: 100px;
  padding: 20px;
`;

function CancelModal() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    function changeHeight() {
      const top = window.scrollY;
      setHeight(top);
    }

    document.addEventListener("scroll", changeHeight);

    return () => document.removeEventListener("scroll", changeHeight);
  }, []);

  return (
    <ModalContainer id="modal" $height={height}>
      <Modal>
        <p style={{ marginBottom: "10px" }}>Sigurno želiš da poništiš unos?</p>
        <Button $bg="green" style={{ width: "50px", float: "left" }}>
          Ne
        </Button>
        <Button $bg="green" style={{ width: "50px", float: "right" }}>
          Da
        </Button>
      </Modal>
    </ModalContainer>
  );
}

export default CancelModal;
