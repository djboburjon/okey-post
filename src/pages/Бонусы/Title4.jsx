import React from 'react'
import './Title4.css'

function Title4() {
  return (
    <>
      <header>
        <div className="container">
          <div className="content">
            <h2>Бонусы и партнёрская программа</h2>
            <p>Платим $3 с каждой отправленной посылки</p>
            <button>Начать зарабатывать</button>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <h1>Зарабатывать с нами — проще простого:</h1>
          <div className="bonuses">
            <div className="bonus">
              <div className="bonus_left">
                <img src="image/bonuses/bonus1.png" alt="" />
                <h4>Дарим скидку 10% вашим друзьям и подписчикам</h4>
                <p>На их первую отправленную посылку. Вам есть чем мотивировать зарегистрироваться именно по вашему реферальному коду или ссылке.</p>
              </div>
              <div className="bonus_right">
                <img src="image/bonuses/bonus2.png" alt="" />
                <h4>Платим по £3 за отправленную посылку </h4>
                <p>Когда клиент, привлеченный по вашей ссылке, отправляет посылку – на ваш счет поступает $3. Вы можете оплачивать этими деньгами ваши посылки или выводить их себе.</p>
              </div>
            </div>
            <div className="bonus">
              <div className="bonus_left">
                <img src="image/bonuses/bonus3.png" alt="" />
                <h4>Дарим скидку 10% вашим друзьям и подписчикам</h4>
                <p>На их первую отправленную посылку. Вам есть чем мотивировать зарегистрироваться именно по вашему реферальному коду или ссылке.</p>
              </div>
              <div className="bonus_right">
                <img src="image/bonuses/bonus4.png" alt="" />
                <h4>Платим по £3 за отправленную посылку </h4>
                <p>Когда клиент, привлеченный по вашей ссылке, отправляет посылку – на ваш счет поступает $3. Вы можете оплачивать этими деньгами ваши посылки или выводить их себе.</p>
              </div>
            </div>
            <div className="bonus">
              <div className="bonus_left">
                  <img src="image/bonuses/bonus6.png" alt="" />
                  <h4>Дарим скидку 10% вашим друзьям и подписчикам</h4>
                  <p>На их первую отправленную посылку. Вам есть чем мотивировать зарегистрироваться именно по вашему реферальному коду или ссылке.</p>
                </div>
            </div>
          </div>
        </div>
          <section className="content6">
            <header>
              <div className="container">
                <div className="image">
                  <img src="image/bonuses/money.png" alt="" />
                </div>
                <div className="content">
                  <h2>
                    Готовы начать зарабатывать <br /> вместе с нами?
                  </h2>
                  <p>
                  Присоединяйтесь к партнерской программе Okeypost.com уже сегодня!
                  </p>
                  <button>Попробовать</button>
                </div>
              </div>
            </header>
          </section>
      </main>
    </>
  )
}

export default Title4