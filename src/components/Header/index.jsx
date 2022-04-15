import React from "react";
import Logo from "../Logo";
import s from "./index.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className={s.container}>
        <Link to='/'>
          <Logo />
        </Link>

        <div className={s.navigation}>
          <Link to='/catalog'>
            <div>Каталог курсов</div>
          </Link>
          
          <Link to='/lectures'>
            <div>Лекторий</div>
          </Link>

          <Link to='/about'>
            <div>О проекте</div>
          </Link>
        </div>

        <div className={s.auth}>
          <Link to='/auth'>
            <button className={s.login}>Вход</button>
          </Link>

          <Link to='/auth'>
            <button className={s.register}>Регистрация</button>
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
