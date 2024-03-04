import { configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import TrelloSlice from "./tools/TrelloSlice";
import { UserRender } from "./tools/UserSlice";

export const store = configureStore({
  reducer: { TrelloSlice, UserRender },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
