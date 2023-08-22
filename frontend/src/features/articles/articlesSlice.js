import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

export const BASE_URL = "/api/articles";

const articlesAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.id - a.id,
});

const initialState = articlesAdapter.getInitialState({
  loading: false,
  error: null,
  lastCreated: null,
});

export const getAllArticles = createAsyncThunk(
  "articles/getAllArticles",
  async (query) => {
    const response = await axios.get(BASE_URL + query);
    return response.data;
  },
);

export const addNewArticle = createAsyncThunk(
  "articles/addNewArticle",
  async (data) => {
    const { newData, token } = data;
    const config = {
      headers: {
        Authorization: `bearer ${token}`,
      },
    };
    const response = await axios.post(BASE_URL, { article: newData }, config);
    return response.data;
  },
);

export const editArticle = createAsyncThunk(
  "articles/editArticle",
  async (data) => {
    const { newData, token } = data;
    const config = {
      headers: {
        Authorization: `bearer ${token}`,
      },
    };
    const response = await axios.patch(
      `${BASE_URL}/${newData.id}`,
      newData,
      config,
    );
    return response.data;
  },
);

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    resetLastCreated: (state) => {
      state.lastCreated = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllArticles.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getAllArticles.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        articlesAdapter.upsertMany(state, action.payload);
      })
      .addCase(getAllArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addNewArticle.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(addNewArticle.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        articlesAdapter.upsertOne(state, action.payload);
        state.lastCreated = action.payload.id;
      })
      .addCase(addNewArticle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(editArticle.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(editArticle.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        articlesAdapter.upsertOne(state, action.payload);
        state.lastCreated = action.payload.id;
      })
      .addCase(editArticle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  selectAll: selectAllArticles,
  selectIds: selectArticleIds,
  selectById: selectArticleById,
} = articlesAdapter.getSelectors((state) => state.articles);

export function selectArticlesError(state) {
  return state.articles.error;
}

export function selectArticlesLoading(state) {
  return state.articles.loading;
}

export function selectLastArticle(state) {
  return state.articles.lastCreated;
}

export const { resetLastCreated } = articlesSlice.actions;

export default articlesSlice.reducer;
