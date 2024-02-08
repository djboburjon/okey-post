import React from "react";
import "./footer.css";
import { FaWhatsapp } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";
import { LiaSmsSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className="footerBorder">
        <div className="container">
            <div className="logo">
            <NavLink to={"/"}>
            <img src="./image/logo.png" alt="" />
            </NavLink>
            <div className="social_media">
              <a href="#" className="spanA">
                <FaWhatsapp />
              </a>
              <a href="https://t.me/dj_boburjon" target="_black" className="spanB">
                <TbPhoneCall />
              </a>
              <a href="https://t.me/dj_boburjon" target="_black" className="spanC">
                <LiaSmsSolid />
              </a>
            </div>
          </div>
          <div className="links">
            <div className="menu">
              <h3>О компании</h3>
              <a href="">Услуги</a> <br />
              <a href="">Цены</a> <br />
              <a href="">Отзывы</a> <br />
              <a href="">Контакты</a> <br />
              <a href="">Вакансии</a> <br />
              <a href="">Соглашение о персональных данных</a> <br />
              <a href="">Условия использования</a>
            </div>
            <div className="menu">
              <h3>Полезное</h3>
              <a href="">Как работает наш сервис</a> <br />
              <a href="">Как покупать с оператором</a> <br />
              <a href="">Ответы на частые вопросы</a> <br />
              <a href="">Популярные магазины</a> <br />
              <a href="">Черный список магазинов</a> <br />
              <a href="">Актуальные распродажи</a> <br />
            </div>
            <div className="menu">
              <h3>Спецпроекты</h3>
              <a href="">50% на первую доставку</a> <br />
              <a href="">Скидки для постоянных клиентов</a> <br />
              <a href="">Реферальная программа</a> <br />
              <a href="">Кэшбек Mr. Rebates и Rakuten</a> <br />
              <a href="">Stop Fraud</a> <br />
            </div>
          </div>
        </div>
      </div>
      <p>© 2024 Okeypost . Все права защищены.</p>
    </footer>
  );
}

export default Footer;
