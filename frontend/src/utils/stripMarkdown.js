function stripMarkdown(article) {
  return {
    id: article.id,
    title: article.title,
    content:
      article.content?.split("## Uvod")[1]?.split(".")[0].trim() ||
      article.content.split(".")[0],
  };
}

export default stripMarkdown;
