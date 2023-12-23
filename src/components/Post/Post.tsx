import React, { useState } from "react";
import s from "./Post.module.scss";
import Modal from "../UI/Modal/Modal";
import { IAttachment, IPost } from "../../types/post";
import CommentsSection from "../Comments/CommentsSection";

interface IPostProps {
  post: IPost;
}

const Post: React.FC<IPostProps> = (props) => {
  console.log(props);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const totalSlides = props.post.attachments.length;

  const nextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

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

        <div className={s.imgContainer}>
          {props.post.attachments.map((attachment: IAttachment, i: number) => (
            <div
              key={i}
              className={`${s.slideContainer} ${
                i === currentSlide ? s.active : ""
              }`}
            >
              <img
                className={s.imgPost}
                src={`http://api.social_network.lvh.me${attachment.file}`}
                alt="image"
              />
            </div>
          ))}

          {props.post.attachments.length > 2 && (
            <div className={s.arrows}>
              <img
                className={s.prevButton}
                onClick={prevSlide}
                src="/images/slider/arrowLeft.svg"
                alt=""
              />

              <img
                className={s.nextButton}
                onClick={nextSlide}
                src="/images/slider/arrowRight.svg"
                alt="arrow"
              />
            </div>
          )}
        </div>
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
