import React, { useState } from "react";
import s from "./Post.module.scss";
import MyModule from "../UI/Modal/Modal";
import { IPost } from "../../types/post";
import CommentsSection from "../Comments/CommentsSection";

interface IPostProps {
  post: IPost;
}

const Post: React.FC<IPostProps> = (props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className={s.wrapper}>
      {isVisible && <MyModule setIsVisible={setIsVisible} />}

      <div className={s.author}>
        <div className={s.avatar}></div>
        <h4>{props.post.profile.username}</h4>

        <img
          onClick={() => setIsVisible(!isVisible)}
          src="images/cardItem/dots.svg"
          alt=""
        />
      </div>

      <div className={s.description}>
        <p>{props.post.text}</p>
      </div>

      <div className={s.container}>
        <div className={s.reaction}>
          <img src="images/cardItem/like.svg" alt="logo" />
          <img src="images/cardItem/dislike.svg" alt="logo" />
        </div>
      </div>
      <CommentsSection postId={props.post.id} />
    </div>
  );
};

export default Post;
