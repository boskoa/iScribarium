import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedAuthor } from "../../features/login/loginSlice";
import useTimedMessage from "../../customHooks/useTimedMessage";
import { useEffect, useMemo, useState } from "react";
import {
  BASE_URL,
  editArticle,
  resetDeleted,
  resetLastCreated,
  selectArticlesError,
  selectDeletedArticle,
  selectLastArticle,
} from "../../features/articles/articlesSlice";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  CategoriesInput,
  ContentInput,
  StyledNewArticleForm,
  TitleInput,
} from "../NewArticle/NewArticleForm";
import axios from "axios";
import DeleteModal from "./DeleteModal";

function EditArticleForm() {
  const { id } = useParams();
  const [article, setArticle] = useState("");
  const loggedAuthor = useSelector(selectLoggedAuthor);
  const articleError = useSelector(selectArticlesError);
  const addMessage = useTimedMessage();
  const dispatch = useDispatch();
  const newId = useSelector(selectLastArticle);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const articleDeleted = useSelector(selectDeletedArticle);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: useMemo(() => {
      const values = {
        title: article?.title,
        content: article?.content,
        categories: article?.categories?.map((c) => c.name).join(", "),
      };
      return values;
    }, [article]),
  });

  function handleEditArticle(data) {
    if (
      data.title === article.title &&
      data.content === article.content &&
      JSON.stringify(data.categories) === JSON.stringify(article.categories)
    ) {
      addMessage({
        content: "Ništa nije izmenjeno",
        variety: "error",
      });
      return;
    }
    if (loggedAuthor && loggedAuthor.id === article.authorId) {
      const newData = {
        id: article.id,
        title: data.title,
        content: data.content,
        authorId: loggedAuthor.id,
        categories: data.categories?.length
          ? data.categories
              .split(", ")
              .map((c) => c[0].toUpperCase() + c.slice(1))
          : [],
      };
      dispatch(editArticle({ newData, token: loggedAuthor.token }));
    } else {
      addMessage({
        content: "Samo autori članaka ih mogu menjati",
        variety: "error",
      });
    }
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [dispatch]);

  useEffect(() => {
    reset({
      title: article?.title,
      content: article?.content,
      categories: article?.categories?.map((c) => c.name).join(", "),
    });
  }, [article, reset]);

  useEffect(() => {
    async function getArticle() {
      try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        setArticle(response.data);
      } catch (error) {
        addMessage({ content: error.response.data.error, variety: "error" });
        //setTimeout(() => navigate(-1), 6000);
      }
    }
    if (id) {
      getArticle();
    }
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
      setTimeout(() => {
        navigate(`/articles/${newId}`);
        dispatch(resetLastCreated());
      }, 7000);
    }
  }, [addMessage, reset, navigate, newId, dispatch]);

  useEffect(() => {
    if (articleDeleted) {
      navigate("/");
      addMessage({ content: "Članak je obrisan", variety: "success" });
      setTimeout(() => dispatch(resetDeleted()), 7000);
    }
  }, [articleDeleted, navigate, dispatch, addMessage]);

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
        className="scroll scrollInput"
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
      <Button $bg="blue" type="button" onClick={() => navigate(-1)}>
        Poništi
      </Button>
      <Button $bg="green" type="submit">
        Sačuvaj
      </Button>
      <Button $bg="red" type="button" onClick={() => setShowModal(true)}>
        Obriši
      </Button>
      {showModal && <DeleteModal setShowModal={setShowModal} id={id} />}
    </StyledNewArticleForm>
  );
}

export default EditArticleForm;
