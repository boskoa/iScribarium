import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedAuthor } from "../../features/login/loginSlice";
import useTimedMessage from "../../customHooks/useTimedMessage";
import { useEffect, useMemo, useState } from "react";
import {
  BASE_URL,
  editArticle,
  resetLastCreated,
  selectArticlesError,
  selectLastArticle,
} from "../../features/articles/articlesSlice";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  ContentInput,
  StyledNewArticleForm,
  TitleInput,
} from "../NewArticle/NewArticleForm";
import axios from "axios";

function EditArticleForm() {
  const { id } = useParams();
  const [article, setArticle] = useState("");
  const loggedAuthor = useSelector(selectLoggedAuthor);
  const articleError = useSelector(selectArticlesError);
  const addMessage = useTimedMessage();
  const dispatch = useDispatch();
  const newId = useSelector(selectLastArticle);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    mode: "onBlur",
    defaultValues: useMemo(() => {
      const values = { title: article?.title, content: article?.content };
      return values;
    }, [article]),
  });

  function handleEditArticle(data) {
    if (data.title === article.title && data.content === article.content) {
      addMessage({
        content: "Ništa nije izmenjeno",
        variety: "error",
      });
      return;
    }
    if (loggedAuthor && loggedAuthor.id === article.authorId) {
      const newData = {
        id: data.id,
        title: data.title,
        content: data.content,
        authorId: loggedAuthor.id,
      }; // dodati i kategorije kad se naprave
      dispatch(editArticle({ newData, token: loggedAuthor.token }));
    } else {
      addMessage({
        content: "Samo autori članaka ih mogu menjati",
        variety: "error",
      });
    }
  }

  useEffect(() => {
    dispatch(resetLastCreated());
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [dispatch]);

  useEffect(() => {
    reset(article);
  }, [article, reset]);

  useEffect(() => {
    async function getArticle() {
      try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        setArticle(response.data);
      } catch (error) {
        addMessage({ content: error.response.data.error, variety: "error" });
        setTimeout(() => navigate(-1), 6000);
      }
    }

    getArticle();
  }, [id, addMessage, navigate]);

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
    if (newId) {
      addMessage({
        content: "Članak je uspešno izmenjen",
        variety: "success",
      });
      reset();
      setTimeout(() => navigate(`/articles/${newId}`), 7000);
    }
  }, [addMessage, reset, navigate, newId]);

  return (
    <StyledNewArticleForm onSubmit={handleSubmit(handleEditArticle)}>
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
      <Button $bg="red" type="button" onClick={() => navigate(-1)}>
        Poništi
      </Button>
      <Button $bg="green" type="submit">
        Sačuvaj
      </Button>
      <DevTool control={control} />
    </StyledNewArticleForm>
  );
}

export default EditArticleForm;
