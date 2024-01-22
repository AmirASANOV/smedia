import React, { useState } from "react";
import s from "./ImageSlider.module.scss";
import { IAttachment } from "../../types/post";
import { ArrowLeft, ArrowRight } from "../../icons";
import clsx from "clsx";

interface IImageSliderProps {
  images: IAttachment[];
}

const ImageSlider: React.FC<IImageSliderProps> = (props) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const goNextSlide = () => {
    setCurrentSlide((prevIndex: number) => prevIndex + 1);
  };

  const goPrevSlide = () => {
    setCurrentSlide((prevIndex: number) => prevIndex - 1);
  };

  return (
    <div>
      <div className={s.imgContainer}>
        {props.images.map((image, i: number) => (
          <div
            key={i}
            className={clsx(s.slideContainer, {
              [s.active]: i === currentSlide,
            })}
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
              <button className={s.prevButton} onClick={goPrevSlide}>
                <ArrowLeft />
              </button>
            )}

            {currentSlide !== props.images.length - 1 && (
              <button className={s.nextButton} onClick={goNextSlide}>
                <ArrowRight />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
