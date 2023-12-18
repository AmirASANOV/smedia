import React, { useEffect, useState } from "react";
import CardItem from "../Post/Post";
import s from "./CardList.module.scss";
import axios from "axios";

type IPost = {
  id: number;
  text: string;
  profile: IProfile;
};

type IProfile = {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
};

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
        <CardItem post={post} key={i} />
      ))}
    </div>
  );
};

export default PostList;
