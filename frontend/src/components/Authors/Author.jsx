import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Graph from "./Graph";

export const AuthorContainer = styled.div`
  min-height: 80px;
  border: 3px solid black;
  border-radius: 8px;
  padding: 10px;
  position: relative;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const Name = styled.h4``;

export const Articles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
`;

const Graphs = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 5px;
`;

export const ArticlesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  z-index: 1;
`;

export const Article = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  width: 100px;
  color: ${({ theme }) => theme.main.color};
`;

export const ArticleCount = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

function handleMonthlyData(articles) {
  let chartData = {};
  let today = new Date();
  today.setDate(today.getDate() - 30);
  chartData[`${today.getMonth() + 1}-${today.getDate()}`] = 0;

  for (let i = 30; i > 0; i--) {
    today.setDate(today.getDate() + 1);
    chartData[
      `${today.getMonth() + 1}-${today.getDate().toString().padStart(2, "0")}`
    ] = 0;
  }
  const keys = Object.keys(chartData);
  articles.forEach((o) => {
    const key = o.f4?.slice(6, 10);
    if (keys.includes(key)) {
      chartData[key] += 1;
    }
  });

  return chartData;
}

function handleYearlyData(articles) {
  let chartData = {};
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;

  for (let j = year - 1; j <= year; j++) {
    for (let i = 1; i <= 12; i++) {
      if (j === year && i > month) {
        break;
      }
      chartData[`${j}-${i}`] = 0;
    }
  }

  articles.forEach((o) => {
    const key = `${new Date(o.f4).getFullYear()}-${
      new Date(o.f4).getMonth() + 1
    }`;
    chartData[key] += 1;
  });

  return chartData;
}

function Author({ author }) {
  return (
    <AuthorContainer>
      <Name>{author.name}</Name>
      <ArticleCount>
        {author.count}{" "}
        {author.count === 1
          ? "članak"
          : [2, 3, 4].includes(author.count)
          ? "članka"
          : "članaka"}
      </ArticleCount>
      {author.count !== "0" && (
        <Articles>
          <Graphs>
            <Graph
              chartData={handleMonthlyData(author.articles)}
              chartTitle="Broj novih članaka u prošlih mesec dana"
            />
            <Graph
              chartData={handleYearlyData(author.articles)}
              chartTitle="Broj novih članaka u prošlih godinu dana"
            />
          </Graphs>
          <Name>Članci:</Name>
          <ArticlesContainer>
            {author.articles?.map((a) => (
              <Article to={`/articles/${a.f1}`} key={a.f1}>
                {a.f2}
              </Article>
            ))}
          </ArticlesContainer>
        </Articles>
      )}
    </AuthorContainer>
  );
}

export default Author;
