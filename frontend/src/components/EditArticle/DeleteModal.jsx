import { useDispatch, useSelector } from "react-redux";
import { Modal, ModalButton, ModalContainer } from "../NewArticle/CancelModal";
import { deleteArticle } from "../../features/articles/articlesSlice";
import { selectLoggedAuthor } from "../../features/login/loginSlice";

function DeleteModal({ setShowModal, id }) {
  const dispatch = useDispatch();
  const loggedAuthor = useSelector(selectLoggedAuthor);

  function handleCancel() {
    dispatch(deleteArticle({ id, token: loggedAuthor.token }));
    setShowModal(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <ModalContainer id="modal">
      <Modal>
        <p style={{ marginBottom: "10px" }}>Sigurno želiš da obrišeš članak?</p>
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

export default DeleteModal;
