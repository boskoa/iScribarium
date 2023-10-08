import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { keyframes, css } from "styled-components";
import {
  getAllAuthors,
  resetAuthors,
  selectAllAuthors,
} from "../../features/authors/authorsSlice";
import ProfileIcon from "../../assets/defaultAvatar.svg";

export const AuthorsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: calc(90vw - 50px);
  gap: 10px;
`;

const slideIn = keyframes`
  from {
    transform: scale(0.01);
  }
  to {
    transform: scale(1);
  }
`;

export const Author = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  width: 80vw;
  height: 17vh;
  border: 3px solid black;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.1);
  animation: ${() =>
    css`0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${slideIn} both`};

  &:nth-child(${({ $order }) => $order}) {
    animation-delay: ${({ $order }) => `${$order * 0.2 + 0.3}s`};
  }

  @media (hover: none) {
    &:nth-child(${({ $order }) => $order}) {
      ${({ $order }) => ($order > 4 ? "display: none;" : "")};
    }

    @media only screen and (min-width: 100vh) {
      height: 30vh;
    }
  }

  @media only screen and (min-width: 600px) {
    width: 40vw;
  }

  @media only screen and (max-width: 600px) {
    &:nth-child(${({ $order }) => $order}) {
      ${({ $order }) => ($order > 4 ? "display: none;" : "")};
    }
  }
`;

const Image = styled.img`
  border-radius: 7vh;
  border: 2px solid black;
  height: 12vh;
  width: 12vh;
  margin: 4px;
`;

const AuthorData = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 5px;
  height: 95%;
`;

const DataField = styled.p`
  font-size: 12px;
`;

function getLastUpdate(author) {
  const updates = author.articles.map((a) => a.f5);
  updates.sort((a, b) => new Date(b) - new Date(a));
  return updates[0] ? updates[0] : author.created_at;
}

function Authors() {
  const authors = useSelector(selectAllAuthors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetAuthors());
    dispatch(getAllAuthors(`?pagination=0,8&order=count,desc`));
  }, [dispatch]);

  return (
    <AuthorsContainer>
      {authors?.map((a, id) => (
        <Author $order={id + 1} key={a.id}>
          <Image
            src={`/public/data/uploads/avatars/${a.id}.webp`}
            alt="user avatar"
            onError={(e) => {
              e.currentTarget.src = ProfileIcon;
              e.currentTarget.height = "20";
              e.currentTarget.width = "20";
            }}
          />
          <AuthorData>
            <DataField>Ime: {a.name}</DataField>
            <DataField>Broj članaka: {a.count}</DataField>
            <DataField>
              Član od: {new Date(a.created_at).toLocaleDateString("de-DE")}
            </DataField>
            <DataField>
              Aktivan: {new Date(getLastUpdate(a)).toLocaleDateString("de-DE")}{" "}
            </DataField>
          </AuthorData>
        </Author>
      ))}
    </AuthorsContainer>
  );
}

export default Authors;
