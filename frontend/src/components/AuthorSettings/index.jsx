import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { selectLoggedAuthor } from "../../features/login/loginSlice";
import AuthorData from "./AuthorData";
import Avatar from "./Avatar";

const AuthorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 60vh;
  max-width: 1000px;
  min-width: 320px;
  padding: 20px;
  margin: auto;
  gap: 20px;

  @media only screen and (max-width: 600px) {
    margin: 0;
  }
`;

const AllData = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  gap: 10px;
  border: 3px solid black;
  border-radius: 10px;
  padding: 10px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.h3``;

function AuthorSettings() {
  const loggedAuthor = useSelector(selectLoggedAuthor);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedAuthor) {
      navigate("/");
    }
  }, [loggedAuthor, navigate]);

  if (!loggedAuthor) {
    return "Loading...";
  }

  return (
    <AuthorContainer>
      <Title>Podesi profil</Title>
      <AllData>
        <AuthorData author={loggedAuthor} />
        <Avatar
          loggedAuthor={loggedAuthor}
          style={{ width: "50%", border: "1px solid white" }}
        >
          avatar
        </Avatar>
      </AllData>
    </AuthorContainer>
  );
}

export default AuthorSettings;
