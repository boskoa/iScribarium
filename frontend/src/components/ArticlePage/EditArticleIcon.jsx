import { styled } from "styled-components";
import EditIcon from "./EditIcon";
import { useNavigate } from "react-router-dom";

const IconContainer = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  height: 40px;
  width: 40px;
  padding: 7px;
  border: 3px solid black;
  border-radius: 50%;
  background-color: yellow;
  transition: all 0.3s;
  z-index: 10;
  cursor: pointer;

  &:hover {
    border-color: red;
  }

  &:active {
    transform: scale(0.95);
  }
`;

function EditArticleIcon({ articleId }) {
  const navigate = useNavigate();

  return (
    <IconContainer onClick={() => navigate(`/edit-article/${articleId}`)}>
      <EditIcon />
    </IconContainer>
  );
}

export default EditArticleIcon;
