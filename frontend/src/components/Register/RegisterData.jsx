import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { styled, keyframes, css } from "styled-components";
import { useNavigate } from "react-router-dom";
import useTimedMessage from "../../customHooks/useTimedMessage";
import { DevTool } from "@hookform/devtools";
import { selectId } from "../../features/login/loginSlice";
import {
  createAuthor,
  selectAllAuthors,
  selectAuthorsError,
} from "../../features/authors/authorsSlice";

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 300px;
  height: 300px;
  padding: 10px;
  background: radial-gradient(
    circle at 70% 20%,
    rgb(72, 208, 208) 15px,
    rgb(0, 128, 128) 17px
  );
  border-radius: 50%;
  border: 1px solid black;
  padding: 20px;
  position: relative;
`;

const agitate = (x, y) => keyframes`
  from {
    transform: translateX(${x + 2}px) translateY(${y}px)
  }
  to {
    transform: translateX(${x - 2}px) translateY(${y}px)
  }
`;

const rotate = (x, y) => keyframes`
  from {
    transform: rotate(0deg) translateX(${x}px) translateY(${y}px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(${x}px) translateY(${y}px) rotate(-360deg);
  }
`;

const ButtonContainer = styled.button`
  height: 70px;
  width: 70px;
  background: radial-gradient(
    circle at 70% 20%,
    rgb(240, 160, 160) 4px,
    rgb(220, 20, 60) 6px
  );
  border-radius: 50%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 115px;
  left: 115px;
  cursor: pointer;
  transform: translateX(${({ x }) => x}px) translateY(${({ y }) => y}px);
  transition: 1s all 0.2s;
  animation: ${({ $submitted, x, y, direction }) =>
    $submitted && css`0.5s ease-in-out ${direction} ${rotate(x, y)}`};

  &:hover {
    animation: ${({ $submitted, x, y }) =>
      !$submitted &&
      css`0.01s infinite alternate ease-in-out ${agitate(x, y)}`};
  }
`;

const LoginInput = styled.input`
  background-color: rgb(91, 206, 206);
  border: 1px solid black;
  border-radius: 3px;
  padding: 3px;

  &:focus {
    outline: 1px solid rgb(220, 20, 60);
    border-radius: 3px;
  }
`;

function RegisterData() {
  const [submitted, setSubmitted] = useState(false);
  const [canceled, setCanceled] = useState(false);
  const addMessage = useTimedMessage();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const numberOfAuthors = useSelector(selectAllAuthors).length;
  const registerError = useSelector(selectAuthorsError);
  const loggedAuthor = useSelector(selectId);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ mode: "onBlur" });

  function handleRegister(data) {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 600);
    dispatch(createAuthor(data));
  }

  function handleCancel() {
    setCanceled(true);
    setTimeout(() => {
      setCanceled(false);
      navigate(-1);
    }, 600);
  }

  useEffect(() => {
    if (loggedAuthor) {
      addMessage({ content: "Već imate nalog", variety: "error" });
      navigate(-1);
    }
  }, [loggedAuthor, addMessage, navigate]);

  useEffect(() => {
    if (submitted) {
      addMessage({
        content: "Uspešna registracija, možete se ulogovati",
        variety: "success",
      });
      navigate("/");
    }
  }, [numberOfAuthors, addMessage, navigate, submitted]);

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
    if (registerError) {
      addMessage({ content: registerError, variety: "error" });
    }
  }, [registerError, addMessage]);

  return (
    <LoginForm onSubmit={handleSubmit(handleRegister)}>
      <LoginInput
        type="text"
        placeholder="ime"
        {...register("name", {
          required: true,
          minLength: {
            value: 2,
            message: "Ime mora imati najmanje 2 karaktera.",
          },
        })}
      />
      <LoginInput
        type="text"
        placeholder="korisničko ime"
        {...register("username", {
          required: true,
          minLength: {
            value: 2,
            message: "Korisničko ime mora imati najmanje 2 karaktera.",
          },
        })}
      />
      <LoginInput
        type="password"
        placeholder="lozinka"
        {...register("password", {
          required: true,
          minLength: {
            value: 6,
            message: "Lozinka mora imati najmanje 6 karaktera.",
          },
        })}
      />
      <LoginInput
        type="email"
        placeholder="email"
        {...register("email", {
          required: true,
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Neodgovarajući format mejla",
          },
        })}
      />
      <ButtonContainer
        type="submit"
        x={115}
        y={115}
        $submitted={submitted}
        direction=""
      >
        Pošalji
      </ButtonContainer>
      <ButtonContainer
        type="button"
        x={-115}
        y={115}
        $submitted={canceled}
        onClick={handleCancel}
        direction="reverse"
      >
        Nazad
      </ButtonContainer>
      <DevTool control={control} />
    </LoginForm>
  );
}

export default RegisterData;
