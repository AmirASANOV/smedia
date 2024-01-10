import React, { useState } from "react";
import Post from "../Post/Post";
import s from "./PostList.module.scss";
import { IPost } from "../../types/post";
import Spinner from "../UI/Spinner/Spinner";
import { useSelector } from "react-redux";
import { IRootState } from "../../store";
import { StateStatus } from "../../types/store";

const PostList: React.FC = () => {
  const posts = useSelector<IRootState, IPost[]>((store) => store.posts.posts);
  const stateStatus = useSelector<IRootState, StateStatus>(
    (store) => store.posts.status
  );

  return (
    <div className={s.wrapper}>
      {stateStatus === StateStatus.pending ? (
        <Spinner />
      ) : (
        posts.map((post: IPost, i: number) => <Post post={post} key={i} />)
      )}
    </div>
  );
};

export default PostList;
