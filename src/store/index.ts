import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./posts";

const store = configureStore({
  reducer: {
    posts: postsSlice,
  },
});

export type IRootState = ReturnType<typeof store.getState>;
export default store;
