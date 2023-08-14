import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  content: "",
  variety: "", //error, success
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.content = action.payload.content;
      state.variety = action.payload.variety;
    },
    clearMessage: () => initialState,
  },
});

export function selectMessage(state) {
  return state.message;
}

export const { setMessage, clearMessage } = messageSlice.actions;

export default messageSlice.reducer;
