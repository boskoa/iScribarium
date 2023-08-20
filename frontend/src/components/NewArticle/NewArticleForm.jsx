import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedAuthor } from "../../features/login/loginSlice";
import useTimedMessage from "../../customHooks/useTimedMessage";
import { useEffect, useRef } from "react";
import {
  addNewArticle,
  selectArticlesError,
} from "../../features/articles/articlesSlice";

const StyledNewArticleForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: stretch;
  max-width: 600px;
  gap: 20px;
`;

const TitleInput = styled.input`
  max-width: 280px;
  background-color: rgba(0, 0, 0, 0.2);
  height: 30px;
  padding: 3px;
  border: 3px solid black;
  border-radius: 8px;

  &:focus {
    outline: 2px solid red;
  }
`;

const ContentInput = styled.textarea`
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

export const Button = styled.button`
  background-color: ${({ $bg }) => $bg};
  border: 3px solid black;
  border-radius: 8px;
  font-weight: 600;
  color: white;
  padding: 5px;
  cursor: pointer;
`;

function NewArticleForm() {
  const loggedAuthor = useSelector(selectLoggedAuthor);
  const articleError = useSelector(selectArticlesError);
  const articlesLength = useSelector((state) => state.articles.ids.length);
  const addMessage = useTimedMessage();
  const dispatch = useDispatch();
  const articlesRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({ mode: "onBlur" });

  function handleCreateArticle(data) {
    if (loggedAuthor) {
      const newData = { ...data, authorId: loggedAuthor.id };
      console.log("NEW ARTICLE", { newData, token: loggedAuthor.token });
      dispatch(addNewArticle({ newData, token: loggedAuthor.token }));
    } else {
      console.log("BAR");
      addMessage({
        content: "Samo prijavljeni autori mogu praviti članke",
        variety: "error",
      });
    }
  }
  function handleCancel() {
    console.log("CANCELING");
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
      //redirekt na stranicu sa člankom
    }
    console.log("REF", articlesLength, articlesRef.current);
  }, [addMessage, articlesLength, reset]);

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
      <Button $bg="red" type="button" onClick={handleCancel}>
        Poništi
      </Button>
      <Button $bg="lime" type="submit">
        Sačuvaj
      </Button>
      <DevTool control={control} />
    </StyledNewArticleForm>
  );
}

export default NewArticleForm;
