import { createSlice } from "@reduxjs/toolkit";
import { accountInterface } from "../types";

const initialState = {
  token: "",
  userProfile: {},
} as accountInterface;

const accountSlice = createSlice({
  name: "access_token",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const { setToken } = accountSlice.actions;
export default accountSlice.reducer;
