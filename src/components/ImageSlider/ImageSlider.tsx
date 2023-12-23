import React, { useState } from "react";
import s from "./ImageSlider.module.scss";
import { IAttachment } from "../../types/post";

interface IImageSliderProps {
  images: IAttachment[];
}

const ImageSlider: React.FC<IImageSliderProps> = (props) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const totalSlides = props.images.length;

  const goNextSlide = () => {
    setCurrentSlide((prevIndex: number) => (prevIndex + 1) % totalSlides);
  };

  const goPrevSlide = () => {
    setCurrentSlide(
      (prevIndex: number) => (prevIndex - 1 + totalSlides) % totalSlides
    );
  };

  return (
    <div>
      <div className={s.imgContainer}>
        {props.images.map((image, i: number) => (
          <div
            key={i}
            className={`${s.slideContainer} ${
              i === currentSlide ? s.active : ""
            }`}
          >
            <img
              className={s.imgPostBG}
              src={`http://api.social_network.lvh.me${image.file}`}
              alt={`attachment-${i}`}
            />

            <img
              className={s.imgPost}
              src={`http://api.social_network.lvh.me${image.file}`}
              alt={`attachment-${i}`}
            />
          </div>
        ))}

        {props.images.length > 1 && (
          <div className={s.arrows}>
            {currentSlide !== 0 && (
              <img
                className={s.prevButton}
                onClick={goPrevSlide}
                src="/images/slider/arrowLeft.svg"
                alt=""
              />
            )}

            {currentSlide !== props.images.length - 1 && (
              <img
                className={s.nextButton}
                onClick={goNextSlide}
                src="/images/slider/arrowRight.svg"
                alt="arrow"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
