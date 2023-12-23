import React, { useState } from "react";
import s from "./Post.module.scss";
import Modal from "../UI/Modal/Modal";
import { IAttachment, IPost } from "../../types/post";
import CommentsSection from "../Comments/CommentsSection";
import ImageSlider from "../ImageSlider/ImageSlider";
import FileAttachments from "../FileAttachments/FileAttachments";

interface IPostProps {
  post: IPost;
}

const Post: React.FC<IPostProps> = (props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className={s.wrapper}>
      {isVisible && <Modal setIsVisible={setIsVisible} />}
      <div className={s.author}>
        <div className={s.avatar}>
          <img
            className={s.avatarImg}
            src={`http://api.social_network.lvh.me${props.post.profile.avatar}`}
            alt="avatar"
          />
        </div>
        <h4>{props.post.profile.username}</h4>

        <img
          onClick={() => setIsVisible(!isVisible)}
          src="images/cardItem/dots.svg"
          alt=""
        />
      </div>
      <div className={s.description}>
        <p>{props.post.text}</p>

        <ImageSlider
          images={props.post.attachments.filter(
            (current) => current.type === "IMAGE"
          )}
        />

        <FileAttachments
          files={props.post.attachments.filter(
            (current) => current.type === "FILE"
          )}
        />
      </div>

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
