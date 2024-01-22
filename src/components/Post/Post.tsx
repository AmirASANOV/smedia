import React, { useState } from "react";
import s from "./Post.module.scss";
import Modal from "../UI/Modal/Modal";
import CommentsSection from "../Comments/CommentsSection";
import ImageSlider from "../ImageSlider/ImageSlider";
import FileAttachments from "../FileAttachments/FileAttachments";
import { IPostState } from "../../store/posts/types";
import { formatDateTime } from "../../utils/formatDate";
import Avatar from "../Avatar/Avatar";

interface IPostProps {
  post: IPostState;
}

const Post: React.FC<IPostProps> = (props) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  function changeModalVisible() {
    setModalVisible(!modalVisible);
  }

  return (
    <div className={s.wrapper}>
      <div className={s.author}>
        <div className={s.header}>
          <Avatar src={props.post.profile.avatar} />
          <div className={s.info}>
            <h4>{props.post.profile.username}</h4>
            <p className={s.update}>{formatDateTime(props.post.created_at)}</p>
          </div>
        </div>

        <img
          onClick={changeModalVisible}
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

      {props.post.comments > 0 && (
        <CommentsSection
          postId={props.post.id}
          comments={props.post.commentsList}
          commentsCount={props.post.comments}
        />
      )}
      {modalVisible && <Modal changeVisible={changeModalVisible} />}
    </div>
  );
};

export default Post;
