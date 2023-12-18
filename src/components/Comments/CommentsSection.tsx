import React, { useState } from "react";
import { IComment } from "../../types/comment";
import CommentCard from "./CommentCard";
import Button from "../UI/Button/Button";
import axios from "axios";
import s from "./CommentsSection.module.scss";
import Input from "../UI/Input/Input";

interface ICommentsSectionProps {
  postId: number;
}

const CommentsSection: React.FC<ICommentsSectionProps> = (props) => {
  const [comments, setComments] = useState<IComment[] | null>(null);

  const fetchComments = () => {
    axios
      .get(`http://api.social_network.lvh.me/posts/${props.postId}/comments`)
      .then(function (response) {
        setComments(response.data.comments);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className={s.commentSection}>
      <div className={s.commentCard}>
        {!comments ? (
          <Button onClick={fetchComments}>Load comments</Button>
        ) : (
          <div>
            {comments.map((comment: IComment, i) => (
              <CommentCard key={i} comment={comment} />
            ))}

            <div className={s.input}>
              <img
                className={s.commentLogo}
                src="images/cardItem/comment.svg"
                alt="logo"
              />

              <Input placeholder={"add comment"} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentsSection;
