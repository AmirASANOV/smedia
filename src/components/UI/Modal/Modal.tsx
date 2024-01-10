import React from "react";
import s from "./Modal.module.scss";

interface IModalProps {
  changeVisible: () => void;
}

const Modal: React.FC<IModalProps> = ({ changeVisible }) => {
  return (
    <div onClick={changeVisible} className={s.wrapper}>
      <div className={s.window}>
        <button onClick={changeVisible} className={s.button}>
          delete
        </button>
        <button className={s.button}>edit</button>
      </div>
    </div>
  );
};

export default Modal;
