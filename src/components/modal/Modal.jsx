import React from 'react'
import './modal.css'

function Modal({modal, setModal}) {
  return (
    <div className={modal ? "modal active" : "modal"}>
      <div className="modal_info">
        <h3>Выполните вход в ваш личный кабинет </h3>
        <form>
          <h4>Номер телефона:</h4>
          <input type="number" />
          <h4>Ваш email:</h4>
          <input type="text" />
          <h4>Ваш пароль:</h4>
          <input type="password" />
        </form>
        <p>
          <a className='registe_link' href="#">Восстановление пароля</a>
          <span> или </span>
          <a className='registe_link' href="#">быстрая регистрация</a>
        </p>
        <div className="modal_links">
          <div className="modal_links-left">
            <button onClick={()=>{
              setModal(false)
            }}>Войти</button>
          </div>
          <div className="modal_links-right">
            <img src="image/modal/google.png" alt="" />
            <img src="image/modal/facebook.png" alt="" />
            <img src="image/modal/vkontakte.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal