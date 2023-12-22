import React from "react";
import s from "./Modal.module.scss";

interface IModalProps {
  setIsVisible: (isVisible: boolean) => void;
}

const Modal: React.FC<IModalProps> = ({ setIsVisible }) => {
  function hide() {
    setIsVisible(false);
  }

  return (
    <div onClick={hide} className={s.wrapper}>
      <div className={s.window}>
        <button onClick={hide} className={s.button}>
          delete
        </button>
        <button className={s.button}>edit post</button>
      </div>
    </div>
  );
};

export default Modal;
