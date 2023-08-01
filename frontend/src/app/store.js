import { configureStore } from "@reduxjs/toolkit";
import authors from "../features/authors/authorsSlice";

const store = configureStore({
  reducer: {
    authors,
  },
});

export default store;
