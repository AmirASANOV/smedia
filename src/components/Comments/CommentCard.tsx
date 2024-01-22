import React, { useState } from "react";
import s from "./CommentCard.module.scss";
import { IComment } from "../../types/comment";
import Modal from "../UI/Modal/Modal";
import Avatar from "../Avatar/Avatar";

interface ICommentCardProps {
  comment: IComment;
}

const CommentCard: React.FC<ICommentCardProps> = (props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  function changeVisible() {
    setIsVisible(!isVisible);
  }

  return (
    <div className={s.wrapper}>
      {isVisible && <Modal changeVisible={changeVisible} />}

      <Avatar src={props.comment.profile.avatar} />
      <div className={s.preview}>
        <div className={s.author}>
          <p className={s.username}>{props.comment.profile.username}</p>
          <div className={s.edit}>
            <img
              onClick={changeVisible}
              className={s.logo}
              src="images/cardItem/dots.svg"
              alt="logo"
            />
          </div>
        </div>
        <p className={s.text}>{props.comment.text}</p>
      </div>
    </div>
  );
};

export default CommentCard;
