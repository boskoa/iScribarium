import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { styled, keyframes, css } from "styled-components";
import {
  loginAuthor,
  selectId,
  selectLoginError,
} from "../../features/login/loginSlice";
import { useNavigate } from "react-router-dom";
import useTimedMessage from "../../customHooks/useTimedMessage";
import { DevTool } from "@hookform/devtools";

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
    rgba(0, 128, 128, 0.2) 15px,
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

function UserData() {
  const [submitted, setSubmitted] = useState(false);
  const [canceled, setCanceled] = useState(false);
  const addMessage = useTimedMessage();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginError = useSelector(selectLoginError);
  const loggedAuthor = useSelector(selectId);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ mode: "onBlur" });

  function handleLogin(data) {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 600);
    dispatch(loginAuthor(data));
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
      console.log("LOADING", loggedAuthor);
      addMessage({ content: "Uspešna prijava", variety: "success" });
      navigate(-1);
    }
  }, [loggedAuthor, addMessage, navigate]);

  useEffect(() => {
    if (errors.username?.message) {
      addMessage({ content: errors.username?.message, variety: "error" });
    }
    if (errors.password?.message) {
      addMessage({ content: errors.password?.message, variety: "error" });
    }
  }, [addMessage, errors.username?.message, errors.password?.message]);

  useEffect(() => {
    if (loginError) {
      addMessage({ content: loginError, variety: "error" });
    }
  }, [loginError, addMessage]);

  return (
    <LoginForm onSubmit={handleSubmit(handleLogin)}>
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
      <ButtonContainer
        type="submit"
        x={115}
        y={115}
        $submitted={submitted}
        direction=""
      >
        Prijava
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

export default UserData;
