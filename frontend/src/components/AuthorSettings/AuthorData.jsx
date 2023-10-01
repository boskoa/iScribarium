import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import useTimedMessage from "../../customHooks/useTimedMessage";
import { DevTool } from "@hookform/devtools";
import {
  alreadyLogged,
  logout,
  selectLoggedAuthor,
} from "../../features/login/loginSlice";
import {
  resetError,
  selectAuthorsError,
  selectAuthorsLoading,
  updateAuthor,
} from "../../features/authors/authorsSlice";

const SettingsForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  max-width: 300px;
  height: 300px;
  padding: 10px;
  border-radius: 5px;
  padding: 20px;
  position: relative;
  background-color: ${({ theme }) => theme.header.bg};
  opacity: 0.8;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Button = styled.button`
  background-color: #517ddb5c;
  color: ${({ theme }) => theme.main.color};
  font-size: 13px;
  border-radius: 5px;
  border: 1px solid black;
  padding: 5px;
  min-width: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(1.05);
  }
`;

const SettingsInput = styled.input`
  background-color: rgb(91, 206, 206);
  border: 1px solid black;
  border-radius: 3px;
  padding: 3px;

  &:focus {
    outline: 1px solid rgb(220, 20, 60);
    border-radius: 3px;
  }
`;

function AuthorData({ author }) {
  const [submitted, setSubmitted] = useState(false);
  const [canceled, setCanceled] = useState(false);
  const addMessage = useTimedMessage();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(selectAuthorsError);
  const loading = useSelector(selectAuthorsLoading);
  const loggedAuthor = useSelector(selectLoggedAuthor);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    control,
  } = useForm({
    defaultValues: {
      name: author.name,
      username: author.username,
      password: "",
      email: author.email,
    },
    mode: "onBlur",
  });

  function handleUpdate(data) {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 600);
    dispatch(
      updateAuthor({
        id: loggedAuthor.id,
        token: loggedAuthor.token,
        newData: data,
      }),
    );
  }

  function handleCancel() {
    setCanceled(true);
    setTimeout(() => {
      setCanceled(false);
      navigate(-1);
    }, 600);
  }

  useEffect(() => {
    if (!loggedAuthor) {
      navigate("/login");
    }
  }, [loggedAuthor, navigate]);

  useEffect(() => {
    if (submitted && !loading && !error) {
      addMessage({
        content: getValues().password
          ? "Uspešna izmena. Lozinka je promenjena. Ponovo se prijavite."
          : "Uspešna izmena",
        variety: "success",
      });

      const values = { ...getValues() };
      if (values.password) {
        dispatch(logout());
      } else {
        let storedAuthor = JSON.parse(
          window.localStorage.getItem("loggedIScribariumAuthor"),
        );
        delete values.password;
        storedAuthor = { ...storedAuthor, ...values };
        window.localStorage.setItem(
          "loggedIScribariumAuthor",
          JSON.stringify(storedAuthor),
        );
        dispatch(alreadyLogged(storedAuthor));
      }

      setTimeout(() => navigate("/"), 500);
    }
  }, [addMessage, navigate, loading, error, submitted, getValues, dispatch]);

  useEffect(() => {
    if (errors.name?.message) {
      addMessage({ content: errors.name?.message, variety: "error" });
    }
  }, [addMessage, errors.name?.message]);

  useEffect(() => {
    if (errors.username?.message) {
      addMessage({ content: errors.username?.message, variety: "error" });
    }
  }, [addMessage, errors.username?.message]);

  useEffect(() => {
    if (errors.password?.message) {
      addMessage({ content: errors.password?.message, variety: "error" });
    }
  }, [addMessage, errors.password?.message]);

  useEffect(() => {
    if (errors.email?.message) {
      addMessage({ content: errors.email?.message, variety: "error" });
    }
  }, [addMessage, errors.email?.message]);

  useEffect(() => {
    if (error) {
      addMessage({ content: error, variety: "error" });
      setTimeout(() => dispatch(resetError()), 500);
    }
  }, [error, addMessage, dispatch]);

  return (
    <SettingsForm onSubmit={handleSubmit(handleUpdate)}>
      <SettingsInput
        type="text"
        {...register("name", {
          required: true,
          minLength: {
            value: 2,
            message: "Ime mora imati najmanje 2 karaktera.",
          },
        })}
      />
      <SettingsInput
        type="text"
        placeholder="korisničko ime"
        {...register("username", {
          required: false,
          minLength: {
            value: 2,
            message: "Korisničko ime mora imati najmanje 2 karaktera.",
          },
        })}
      />
      <SettingsInput
        type="password"
        placeholder="lozinka"
        {...register("password", {
          required: false,
          minLength: {
            value: 6,
            message: "Lozinka mora imati najmanje 6 karaktera.",
          },
        })}
      />
      <SettingsInput
        type="email"
        placeholder="email"
        {...register("email", {
          required: false,
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Neodgovarajući format mejla",
          },
        })}
      />
      <ButtonsContainer>
        <Button
          type="submit"
          x={115}
          y={115}
          $submitted={submitted}
          direction=""
        >
          Pošalji
        </Button>
        <Button
          type="button"
          x={-115}
          y={115}
          $submitted={canceled}
          onClick={handleCancel}
          direction="reverse"
        >
          Nazad
        </Button>
      </ButtonsContainer>
      <DevTool control={control} />
    </SettingsForm>
  );
}

export default AuthorData;
