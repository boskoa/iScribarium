import { configureStore } from "@reduxjs/toolkit";
import authors from "../features/authors/authorsSlice";
import login from "../features/login/loginSlice";
import message from "../features/message/messageSlice";
import articles from "../features/articles/articlesSlice";

const store = configureStore({
  reducer: {
    authors,
    login,
    message,
    articles,
  },
});

export default store;
