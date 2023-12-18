import React from "react";
import s from "./Button.module.scss";

interface IButtonProps {
  children: string;
  onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={s.button}>
      {children}
    </button>
  );
};

export default Button;
