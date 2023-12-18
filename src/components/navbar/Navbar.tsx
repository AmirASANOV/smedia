import React from "react";
import s from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  return (
    <div className={s.navbar}>
      <p className={s.logo}>Instagram</p>

      <div className={s.mainbtns}>
        <button className={s.btn}>
          <img className={s.logoBtn} src="images/navbar/home.svg" alt="" />
          <p>Главная</p>
        </button>
        <button className={s.btn}>
          <img className={s.logoBtn} src="images/navbar/search.svg" alt="" />
          <p>Поисковый запрос</p>
        </button>
        <button className={s.btn}>
          <img className={s.logoBtn} src="images/navbar/compas.svg" alt="" />
          <p>Интересное</p>
        </button>
        <button className={s.btn}>
          <img className={s.logoBtn} src="images/navbar/video.svg" alt="" />
          <p>Reels</p>
        </button>
        <button className={s.btn}>
          <img className={s.logoBtn} src="images/navbar/message.svg" alt="" />
          <p>Сообщения</p>
        </button>
        <button className={s.btn}>
          <img className={s.logoBtn} src="images/navbar/heart.svg" alt="" />
          <p>Уведомления</p>
        </button>
        <button className={s.btn}>
          <img className={s.logoBtn} src="images/navbar/plus.svg" alt="" />
          <p>Создать</p>
        </button>
        <button className={s.btn}>
          <img className={s.logoBtn} src="images/navbar/profile.svg" alt="" />
          <p>Профиль</p>
        </button>
      </div>

      <button className={s.btn}>
        <img className={s.logoBtn} src="images/navbar/line-3.svg" alt="" />
        <p>Еще</p>
      </button>
    </div>
  );
};

export default Navbar;
