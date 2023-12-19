import React, { useState } from "react";
import s from "./Post.module.scss";
import MyModule from "../UI/Modal/Modal";
import { IAttachment, IPost } from "../../types/post";
import CommentsSection from "../Comments/CommentsSection";

interface IPostProps {
  post: IPost;
}

const Post: React.FC<IPostProps> = (props) => {
  console.log(props);

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
        {props.post.attachments.map((attachment: IAttachment, i: number) => (
          <img
            src={"api.social_network.lvh.me" + attachment.file}
            alt="image"
            key={i}
          />
        ))}
      </div>
      {/* api.social_network.lvh.me */}
      <div className={s.container}>
        <div className={s.reaction}>
          <div className={s.likes}>
            <img src="images/cardItem/like.svg" alt="logo" />
            <p>{props.post.likes}</p>
          </div>
          <div className={s.dislikes}>
            <img src="images/cardItem/dislike.svg" alt="logo" />
            <p>{props.post.dislikes}</p>
          </div>
        </div>
      </div>
      <CommentsSection postId={props.post.id} />
    </div>
  );
};

export default Post;
