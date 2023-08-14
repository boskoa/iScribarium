import { configureStore } from "@reduxjs/toolkit";
import authors from "../features/authors/authorsSlice";
import login from "../features/login/loginSlice";
import message from "../features/message/messageSlice";

const store = configureStore({
  reducer: {
    authors,
    login,
    message,
  },
});

export default store;
