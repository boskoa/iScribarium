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

const authorsSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {},
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

export default authorsSlice.reducer;
