import { useEffect, useState } from "react";
import {
  AuthorsContainer as CategoriesContainer,
  ButtonContainer,
  Filters,
  MainContainer,
  Title,
} from "../Authors";
import axios from "axios";
import Category from "./Category";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [criterium, setCriterium] = useState("name");
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    async function getCategories() {
      const result = await axios.get("/api/categories/all");
      setCategories(result.data);
    }

    getCategories();
  }, []);

  useEffect(() => {
    function sortCategories(a, b) {
      const countA = a.articles.length || 0;
      const countB = b.articles.length || 0;

      if (criterium == "name") {
        if (order === "desc") {
          return b.name.localeCompare(a.name);
        } else {
          return a.name.localeCompare(b.name);
        }
      } else {
        if (order === "asc") {
          return countA - countB;
        } else {
          return countB - countA;
        }
      }
    }

    setCategories((p) => [...p].sort(sortCategories));
  }, [criterium, order]);

  if (!categories) return "Loading...";

  return (
    <MainContainer>
      <Title>Kategorije</Title>
      <Filters>
        <ButtonContainer
          $selected={criterium === "name"}
          onClick={() => {
            setCriterium("name");
            setOrder(order === "asc" ? "desc" : "asc");
          }}
        >
          Abecedno {criterium === "name" ? (order === "asc" ? "⇡" : "⇣") : ""}
        </ButtonContainer>
        <ButtonContainer
          $selected={criterium === "count"}
          onClick={() => {
            setCriterium("count");
            setOrder(order === "asc" ? "desc" : "asc");
          }}
        >
          Broj članaka{" "}
          {criterium === "count" ? (order === "asc" ? "⇡" : "⇣") : ""}
        </ButtonContainer>
      </Filters>
      <CategoriesContainer>
        {categories.map((c) => (
          <Category key={c.id} category={c} />
        ))}
      </CategoriesContainer>
    </MainContainer>
  );
}

export default Categories;
