import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import s from "./PostList.module.scss";
import axios from "axios";
import { IPost } from "../../types/post";

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    
    axios
      .get("http://api.social_network.lvh.me/posts/profiles/2")
      .then(function (response) {
        setPosts(response.data.posts);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={s.wrapper}>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        posts.map((post: IPost, i: number) => <Post post={post} key={i} />)
      )}
    </div>
  );
};

export default PostList;
