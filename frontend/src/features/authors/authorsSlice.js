import {
  createEntityAdapter,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "/api/authors";

const authorsAdapter = createEntityAdapter();

const initialState = authorsAdapter.getInitialState({
  loading: false,
  error: null,
});

export const getAllAuthors = createAsyncThunk(
  "authors/getAllAuthors",
  async (query) => {
    const response = await axios.get(BASE_URL + query);
    return response.data;
  },
);

export const createAuthor = createAsyncThunk(
  "authors/createAuthor",
  async (data) => {
    const response = await axios.post(BASE_URL, data);
    return response.data;
  },
);

export const updateAuthor = createAsyncThunk(
  "authors/updateAuthor",
  async (data) => {
    const { id, token, newData } = data;
    console.log(data);
    const config = {
      headers: {
        Authorization: `bearer ${token}`,
      },
    };
    const response = await axios.patch(
      `${BASE_URL}/${id}`,
      { ...newData },
      config,
    );
    return response.data;
  },
);

const authorsSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {
    resetAuthors: (state) => {
      state.ids = [];
      state.entities = {};
    },
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllAuthors.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getAllAuthors.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        authorsAdapter.upsertMany(state, action.payload);
      })
      .addCase(getAllAuthors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createAuthor.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(createAuthor.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        authorsAdapter.upsertOne(state, action.payload);
      })
      .addCase(createAuthor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateAuthor.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(updateAuthor.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        authorsAdapter.upsertOne(state, action.payload);
      })
      .addCase(updateAuthor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  selectAll: selectAllAuthors,
  selectIds: selectAuthorIds,
  selectById: selectAuthorById,
} = authorsAdapter.getSelectors((state) => state.authors);

export function selectAuthorsLoading(state) {
  return state.authors.loading;
}

export function selectAuthorsError(state) {
  return state.authors.error;
}

export const { resetAuthors, resetError } = authorsSlice.actions;

export default authorsSlice.reducer;
