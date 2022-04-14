import React from "react";
import Logo from "../Logo";
import "./index.modules.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to='/'>
          <Logo />
        </Link>

        <div className="navigation">
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

        <div className="auth">
          <Link to='/auth'>
            <button className="login">Вход</button>
          </Link>

          <Link to='/auth'>
            <button className="register">Регистрация</button>
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
