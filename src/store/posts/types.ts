import { IComment } from "../../types/comment";
import { IPost } from "../../types/post";
import { StateStatus } from "../../types/store";

export interface IPostState extends IPost {
  commentsList?: IComment[];
}

export interface IPostsState {
  posts: IPostState[];
  status: StateStatus;
}
