import React, { ChangeEvent } from "react";
import s from "./Input.module.scss";

interface IInput {
  placeholder: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInput> = (props) => {
  return (
    <div className={s.wrapper}>
      <input
        {...props}
        className={s.input}
        type="text"
        placeholder={props.placeholder}
      />
      <img className={s.send} src="/images/cardComment/send.svg" alt="logo" />
    </div>
  );
};

export default Input;
