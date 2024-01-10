import React, { useState } from "react";
import s from "./Post.module.scss";
import Modal from "../UI/Modal/Modal";
import { IAttachment, IPost } from "../../types/post";
import CommentsSection from "../Comments/CommentsSection";
import ImageSlider from "../ImageSlider/ImageSlider";
import FileAttachments from "../FileAttachments/FileAttachments";
import { IPostState } from "../../store/posts/types";

interface IPostProps {
  post: IPostState;
}

const Post: React.FC<IPostProps> = (props) => {
  console.log(props);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  let dateObject = new Date(props.post.created_at);
  let date = dateObject.toISOString().split("T")[0];
  let time = dateObject.toTimeString().split(" ")[0].substring(0, 5);

  return (
    <div className={s.wrapper}>
      {isVisible && <Modal setIsVisible={setIsVisible} />}
      <div className={s.author}>
        <div className={s.header}>
          <img
            className={s.avatarImg}
            src={`http://api.social_network.lvh.me${props.post.profile.avatar}`}
            alt="avatar"
          />

          <div className={s.info}>
            <h4>{props.post.profile.username}</h4>
            <p className={s.update}>{[date, time].join(" в ")}</p>
          </div>
        </div>

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
      <CommentsSection
        postId={props.post.id}
        comments={props.post.commentsList}
      />
    </div>
  );
};

export default Post;
