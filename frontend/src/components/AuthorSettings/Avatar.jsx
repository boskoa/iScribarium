import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 3;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 5px;
  width: 100%;
`;

const Button = styled.div`
  background-color: ${({ theme }) => theme.header.bg};
  color: ${({ theme }) => theme.main.color};
  font-size: 13px;
  border-radius: 5px;
  border: none;
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

const Image = styled.img`
  border-radius: 5px;
  border: 2px solid black;
  height: 200px;
  width: 200px;
  display: block;
  margin: 20px auto;
  object-fit: cover;
`;

function Avatar({ loggedAuthor }) {
  const [name, setName] = useState("Choose avatar");
  const [file, setFile] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", file);
    console.log(file);

    await axios.post(`/api/avatars/${loggedAuthor.id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `bearer ${loggedAuthor.token}`,
      },
    });

    window.location.reload();
  }

  return (
    <Container>
      <Form id="avatar-form" encType="multipart/form-data">
        <label htmlFor="avatar" style={{ maxWidth: "70%" }}>
          <input
            style={{
              display: "none",
            }}
            id="avatar"
            type="file"
            name="avatar"
            onChange={(e) => {
              setName(loggedAuthor.id);
              setFile(e.target.files[0]);
            }}
          />
          <Button>Odaberi sliku</Button>
        </label>
        <Button type="submit" disabled={!file} onClick={(e) => handleSubmit(e)}>
          Sačuvaj
        </Button>
      </Form>
      {file && (
        <Image alt="chosen avatar" src={file && URL.createObjectURL(file)} />
      )}
    </Container>
  );
}

export default Avatar;
