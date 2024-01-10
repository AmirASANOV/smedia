import React, { useState } from "react";
import { IComment } from "../../types/comment";
import CommentCard from "./CommentCard";
import Button from "../UI/Button/Button";
import axios from "axios";
import s from "./CommentsSection.module.scss";
import Input from "../UI/Input/Input";
import Spinner from "../UI/Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { setComments, setStatus } from "../../store/posts";
import { StateStatus } from "../../types/store";
import { IRootState } from "../../store";

interface ICommentsSectionProps {
  postId: number;
  comments?: IComment[];
}

const CommentsSection: React.FC<ICommentsSectionProps> = ({
  postId,
  comments,
}) => {
  const dispatch = useDispatch();
  const stateStatus = useSelector<IRootState, StateStatus>(
    (store) => store.posts.status
  );

  const fetchComments = () => {
    dispatch(setStatus(StateStatus.pending));
    axios
      .get(`http://api.social_network.lvh.me/posts/${postId}/comments`)
      .then(function (response) {
        dispatch(
          setComments({
            postId,
            comments: response.data.comments,
          })
        );
        dispatch(setStatus(StateStatus.fulfilled));
      })
      .catch(function (error) {
        console.log(error);
        dispatch(setStatus(StateStatus.rejected));
      });
  };

  return (
    <div className={s.commentSection}>
      {stateStatus === StateStatus.pending ? (
        <Spinner />
      ) : (
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
      )}
    </div>
  );
};

export default CommentsSection;
