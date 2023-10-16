import Graph from "./Graph";
import { memo } from "react";
import {
  Article,
  ArticleCount,
  Articles,
  ArticlesContainer,
  AuthorContainer,
  Graphs,
  Name,
} from "./authorStyledComponents";

function handleMonthlyData(articles) {
  let chartData = {};
  let today = new Date();
  today.setDate(today.getDate() - 30);
  chartData[`${today.getMonth() + 1}-${today.getDate()}`] = 0;

  for (let i = 30; i > 0; i--) {
    today.setDate(today.getDate() + 1);
    chartData[
      `${(today.getMonth() + 1).toString().padStart(2, "0")}-${today
        .getDate()
        .toString()
        .padStart(2, "0")}`
    ] = 0;
  }

  const keys = Object.keys(chartData);
  articles.forEach((o) => {
    const key = o.f4?.slice(5, 10);
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

const Author = memo(function Author({ author }) {
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
});

export default Author;
