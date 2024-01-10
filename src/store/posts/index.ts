import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPost } from "../../types/post";
import { StateStatus } from "../../types/store";
import { IPostsState } from "./types";
import { IComment } from "../../types/comment";

const initialState = {
  posts: [],
  status: StateStatus.fulfilled,
} as IPostsState;

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<IPost[]>) {
      state.posts = action.payload;
    },
    setStatus(state, action: PayloadAction<StateStatus>) {
      state.status = action.payload;
    },
    
    setComments(
      state,
      action: PayloadAction<{
        postId: number;
        comments: IComment[];
      }>
    ) {
      state.posts = state.posts.map((post) =>
        post.id === action.payload.postId
          ? { ...post, commentsList: action.payload.comments }
          : post
      );
    },
  },
});

export const { setPosts, setStatus, setComments } = postsSlice.actions;

export default postsSlice.reducer;
