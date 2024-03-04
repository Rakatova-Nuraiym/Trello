import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface User {
  name: string;
  _id: number;
  login: number;
  img: string;
}

export interface user {
  user: User[];
}

const urlUser =
  "https://api.elchocrud.pro/api/v1/35f867a88e75929d40f56904e46f893b/usersTrello";

// !postUser
export const postUser = createAsyncThunk("todo/postUses", async (newData) => {
  const response = await axios.post(urlUser, newData);
  return response.data;
});
export const getUser = createAsyncThunk("todo/getUses", async () => {
  const response = await axios.post(urlUser);
  return response.data;
});

const initialState: user = {
  user: [],
};
const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postUser.fulfilled, (state, actions) => {
        state.user = actions.payload;
      })
      .addCase(getUser.fulfilled, (state, actions) => {
        state.user = actions.payload;
      });
  },
});

export const UserRender = UserSlice.reducer;
