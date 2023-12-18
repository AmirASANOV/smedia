import Button from "../../components/UI/Button/Button";
import MyInput from "../../components/UI/Input/Input";
import s from "./Login.module.scss";

import React from "react";

const Login: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <p className={s.logo}>Instagram</p>
        <MyInput placeholder="Телефон, имя пользователя или эл.адрес" />
        <MyInput placeholder="Пароль" />
        <Button>Войти</Button>
        <p className={s.forgot}>или</p>
        <p className={s.panel}>Войти через Facebook</p>
        <p className={s.forgot}>Забыли парxоль?</p>
      </div>
    </div>
  );
};

export default Login;
