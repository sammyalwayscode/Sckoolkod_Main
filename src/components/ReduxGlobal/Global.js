import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const Global = createSlice({
  name: "school managenment",
  initialState,
  reducers: {
    createUser: (state, { payload }) => {
      state.user = payload;
    },
    logOut: (state) => {
      state.user = null;
    },
  },
});

export const { createUser, logOut } = Global.actions;

export default Global.reducer;
