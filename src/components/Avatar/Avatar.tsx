import React, { FC } from "react";
import s from "./Avatar.module.scss";

interface IAvatarProps {
  src: string;
}

const Avatar: FC<IAvatarProps> = (props) => {
  return (
    <img
      className={s.avatar}
      src={`http://api.social_network.lvh.me${props.src}`}
      alt="avatar"
    />
  );
};

export default Avatar;
