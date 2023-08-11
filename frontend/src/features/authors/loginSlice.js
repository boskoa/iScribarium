import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "/api/login";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const loginAuthor = createAsyncThunk(
  "login/loginAuthor",
  async (data) => {
    const response = await axios.post(BASE_URL, { ...data });
    window.localStorage.setItem(
      "loggedIScribariumAuthor",
      JSON.stringify({ ...response.data }),
    );
    return response.data;
  },
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    alreadyLogged: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAuthor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAuthor.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(loginAuthor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export function selectLoggedAuthor(state) {
  return state.login.user;
}

export function selectLoginLoading(state) {
  return state.login.loading;
}

export function selectLoginError(state) {
  return state.login.error;
}

export const { alreadyLogged, logout } = loginSlice.actions;

export default loginSlice.reducer;
