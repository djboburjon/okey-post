import React, { useState } from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";
import { RiUserLine } from "react-icons/ri";
import Modal from "../modal/Modal";

function Nav() {
  const [modal, setModal] = useState(false)
  return (
    <nav>
      <Modal modal={modal} setModal={setModal}/>
      <div className="container">
        <div className="logo">
          <NavLink to={"/"}>
            <img src="./image/logo.png" alt="" />
          </NavLink>
        </div>
        <ul>
          <li>
            <NavLink to={"/как покупать"}>Как покупать</NavLink>
          </li>
          <li>
            <NavLink to={"/распродажи"}>Распродажи</NavLink>
          </li>
          <li>
            <NavLink to={"/цены"}>Цены</NavLink>
          </li>
          <li>
            Помощь
          </li>
          <li>
            <NavLink to={"/бонусы"}>Бонусы</NavLink>
          </li>
          <li>
            <NavLink to={"/блог"}>Блог</NavLink>
          </li>
          <li>
            Магазины
          </li>
        </ul>
        <div className="login">
          <span onClick={()=>{
            setModal(true)
          }}>
            <RiUserLine />
            Вход
          </span>
          <button>Связаться с нами</button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
