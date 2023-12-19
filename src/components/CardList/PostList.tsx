import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import s from "./PostList.module.scss";
import axios from "axios";
import { IPost } from "../../types/post";

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    axios
      .get("http://api.social_network.lvh.me/posts/profiles/2")
      .then(function (response) {
        setPosts(response.data.posts);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className={s.wrapper}>
      {posts.map((post: IPost, i: number) => (
        <Post post={post} key={i} />
      ))}
    </div>
  );
};

export default PostList;
