import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedAuthor } from "../../features/login/loginSlice";
import useTimedMessage from "../../customHooks/useTimedMessage";
import { useEffect, useRef, useState } from "react";
import {
  addNewArticle,
  resetLastCreated,
  selectArticlesError,
  selectLastArticle,
} from "../../features/articles/articlesSlice";
import CancelModal from "./CancelModal";
import { useNavigate } from "react-router-dom";

export const StyledNewArticleForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: stretch;
  max-width: 600px;
  gap: 20px;
  flex: 2;
`;

export const TitleInput = styled.input`
  max-width: 600px;
  background-color: rgba(0, 0, 0, 0.2);
  height: 30px;
  padding: 3px;
  border: 3px solid black;
  border-radius: 8px;

  &:focus {
    outline: 2px solid red;
  }
`;

export const ContentInput = styled.textarea`
  max-width: 600px;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 3px;
  border: 3px solid black;
  border-radius: 8px;
  resize: none;

  &:focus {
    outline: 2px solid red;
  }
`;

export const CategoriesInput = styled(TitleInput)`
  max-width: 600px;
`;

export const Button = styled.button`
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
`;

function NewArticleForm() {
  const loggedAuthor = useSelector(selectLoggedAuthor);
  const articleError = useSelector(selectArticlesError);
  const articlesLength = useSelector((state) => state.articles.ids.length);
  const addMessage = useTimedMessage();
  const dispatch = useDispatch();
  const articlesRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const newId = useSelector(selectLastArticle);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({ mode: "onBlur" });

  function handleCreateArticle(data) {
    if (loggedAuthor) {
      const newData = {
        ...data,
        authorId: loggedAuthor.id,
      };
      console.log("NEWDATA", newData);
      dispatch(
        addNewArticle({
          newData,
          categories: data.categories?.length
            ? data.categories
                .split(", ")
                .map((c) => c[0].toUpperCase() + c.slice(1))
            : [],
          token: loggedAuthor.token,
        }),
      );
    } else {
      addMessage({
        content: "Samo prijavljeni autori mogu praviti članke",
        variety: "error",
      });
    }
  }

  function handleCancel() {
    setShowModal(true);
  }

  useEffect(() => {
    if (errors.title?.message) {
      addMessage({ content: errors.title?.message, variety: "error" });
    }
    if (errors.content?.message) {
      addMessage({ content: errors.content?.message, variety: "error" });
    }
  }, [addMessage, errors.title?.message, errors.content?.message]);

  useEffect(() => {
    if (articleError) {
      addMessage({ content: articleError, variety: "error" });
    }
  }, [articleError, addMessage]);

  useEffect(() => {
    if (!articlesRef.current && articlesLength) {
      articlesRef.current = articlesLength;
    }

    if (articlesLength > articlesRef.current) {
      addMessage({
        content: "Članak je uspešno napravljen",
        variety: "success",
      });
      articlesRef.current = articlesLength;
      reset();
      setTimeout(() => {
        navigate(`/articles/${newId}`);
        dispatch(resetLastCreated());
      }, 7000);
    }
  }, [addMessage, articlesLength, reset, navigate, newId, dispatch]);

  return (
    <StyledNewArticleForm onSubmit={handleSubmit(handleCreateArticle)}>
      <TitleInput
        type="text"
        placeholder="Naslov članka"
        {...register("title", {
          required: true,
          minLength: {
            value: 1,
            message: "Naslov članka mora imati najmanje 1 karakter.",
          },
        })}
      />
      <ContentInput
        rows="45"
        placeholder="Sadržaj članka"
        {...register("content", {
          required: true,
          minLength: {
            value: 10,
            message: "Sadržaj članka mora imati najmanje 10 karaktera.",
          },
        })}
      />
      <CategoriesInput
        type="text"
        placeholder="Kategorije"
        {...register("categories")}
      />
      <Button $bg="red" type="button" onClick={handleCancel}>
        Poništi
      </Button>
      <Button $bg="green" type="submit">
        Sačuvaj
      </Button>
      <DevTool control={control} />
      {showModal && <CancelModal setShowModal={setShowModal} reset={reset} />}
    </StyledNewArticleForm>
  );
}

export default NewArticleForm;
