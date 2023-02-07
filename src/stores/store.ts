import { configureStore } from "@reduxjs/toolkit";
import ButtonStore from "./ButtonStore";
import LoginStore from './LoginStore'

export const store = configureStore({
  reducer: {
    ButtonStore: ButtonStore,
    LoginStore:LoginStore,
  },
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch