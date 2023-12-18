import React from "react";
import MyInput from "../../components/UI/Input/Input";
import s from "./Registration.module.scss";
import Button from "../../components/UI/Button/Button";

const Registration: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <h1 className={s.logo}>Instagram</h1>
        <p className={s.reginText}>
          Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.
        </p>
        <Button>Войти через Facebook</Button>
        <p>или</p>
        <MyInput placeholder="моб.телефон или адрес эл.почты" />
        <MyInput placeholder="Имя и фамилия" />
        <MyInput placeholder="Имя пользователя" />
        <MyInput placeholder="Пароль" />
        <p className={s.offer}>
          Регистрируясь, вы принимаете Условия. Прочитайте Политику
          конфиденциальности, чтобы узнать, как мы получаем, используем и
          передаем ваши данные. Также просмотритеПолитику в отношении файлов
          cookie, чтобы узнать, как мы используем файлы cookie и подобные
          технологии.
        </p>
        <Button>Далее</Button>
      </div>
      <p className={s.login}>Есть аккаунт? вход</p>
    </div>
  );
};

export default Registration;
