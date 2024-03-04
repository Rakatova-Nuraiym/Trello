import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Trello, TypePatch, todo } from "../../type";
import axios from "axios";

export interface NewDataProps {
  name: string;
}

const initialState: todo = {
  todo: [],
};

const url =
  "https://api.elchocrud.pro/api/v1/e3ebe768bc9198e59715d269cc4917cf/trello";

// !Post
export const postTrello = createAsyncThunk(
  "trello/postTrello",
  async (newData: NewDataProps) => {
    try {
      const response = await axios.post(url, newData);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// !get
export const getTrello = createAsyncThunk("trello/get", async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

// !patch

export const patchTrello = createAsyncThunk(
  "todo/patch",
  async ({ newData, _id }: { newData: TypePatch; _id: number }) => {
    const response = await axios.patch(`${url}/${_id}`, newData);
    return response.data;
  }
);

export const patchComment = createAsyncThunk(
  "todo/patchCommet",
  async ({ newData, _id }: { newData: TypePatch; _id: number }) => {
    console.log(newData);

    const response = await axios.patch(`${url}/${_id}`, newData);
    return response.data;
  }
);
// !put
export const putTrello = createAsyncThunk(
  "todo/put",
  async ({ newData, _id }: { newData: TypePatch; _id: number }) => {
    console.log(newData);

    const response = await axios.put(`${url}/${_id}`, newData);
    return response.data;
  }
);

const TrelloSlice = createSlice({
  name: "trello",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postTrello.fulfilled, (state, actions) => {
        state.todo = actions.payload;
      })
      .addCase(getTrello.fulfilled, (state, actions) => {
        state.todo = actions.payload;
      })
      .addCase(patchTrello.fulfilled, (state, actions) => {
        state.todo = actions.payload;
      })
      .addCase(putTrello.fulfilled, (state, actions) => {
        state.todo = actions.payload;
      })
      .addCase(patchComment.fulfilled, (state, actions) => {
        state.todo = actions.payload;
      });
  },
});

export default TrelloSlice.reducer;
