import React from "react";
import "./title.css";
import { FaWhatsapp } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";
import { LiaSmsSolid } from "react-icons/lia";

function Title() {
  return (
    <>
      <header>
        <div className="container">
          <div className="content">
            <h2>Научим покупать вВеликобритании!</h2>
            <p>и экономить до 70%</p>
            <button>Получить адрес в UK</button>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="container">
            <h1>Покупать в Великобритании очень просто</h1>
            <p>
              Английские магазины не доставляют в Россию, но это не проблема. С
              OkeyPost можно покупать по лучшим ценам и экономить на доставке.
              Мы получим ваши посылки, надежно упакуем и отправим их к вам
              домой.
            </p>
            <div className="section">
              <div className="card">
                <div className="image">
                  <img src="image/new/img1.png" alt="" />
                </div>
                <div className="content">
                  <div className="text">
                    <span>01</span>
                    <h2>
                      Получаем адрес для покупок <br /> в  магазинах Великобритании{" "}
                    </h2>
                  </div>
                  <p>
                    Okeypost поможет притвориться американцем и не
                    переплачивать. Для этого нужно зарегистрироваться в нашем
                    сервисе. После регистрации вам станут доступны два адреса в
                    Англии, которые вы сможете указывать при оформлении заказов
                    в интернет-магазинах.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="image">
                  <img src="image/new/img2.png" alt="" />
                </div>
                <div className="content">
                  <div className="text">
                    <span>02</span>
                    <h2>Идём за покупками в <br /> онлайн-магазины </h2>
                  </div>
                  <p>
                    Выбираем нужные товары в магазинах Англии. Расплачиваемся,
                    как обычно, в качестве адреса доставки указываем координаты
                    одного из складов Okeypost. Оформить покупки можно
                    самостоятельно или с нашей помощью. Вот список того, что
                    покупать нельзя.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="image">
                  <img src="image/new/img3.png" alt="" />
                </div>
                <div className="content">
                  <div className="text">
                    <span>03</span>
                    <h2>Следим за перемещением <br /> посылки до склада</h2>
                  </div>
                  <p>
                    После оформление заказа магазин пришлет трек-номер посылки
                    на ваш e-mail и отправит вещи на наш склад. Через 5-7 дней
                    покупки придут к нам, мы поместим их в специальное
                    хранилище, закрепленное за вашим аккаунтом.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="image">
                  <img src="image/new/img4.png" alt="" />
                </div>
                <div className="content">
                  <div className="text">
                    <span>04</span>
                    <h2>Оплачиваем доставку и покупки <br /> отправляются домой</h2>
                  </div>
                  <p>
                    Мы сообщим, когда ваши покупки поступят на склад. Вы сможете
                    заказать что-то еще в других магазинах и отправить все одной
                    посылкой (так выгоднее). До 30 дней покупки будут храниться
                    бесплатно. Когда все товары поступили на склад, выбирайте
                    способ доставки, мы надежно все упакуем и отправим вам,
                    сообщив трек-номер.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="image">
                  <img src="image/new/img5.png" alt="" />
                </div>
                <div className="content">
                  <div className="text">
                    <span>05</span>
                    <h2>Получаем посылку и спешим<br /> сделать новый заказ</h2>
                  </div>
                  <p>
                    Примерно через 2 недели посылка приедет к вам домой, в пункт выдачи заказов или на почту. Получаем покупки и радуемся :)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section2">
        <div className="container">
          <div className="content">
            <h2>Остались вопросы? Спросите нас в соцсетях!</h2>
          </div>
          <div className="social_media">
          <span className="spa1">
                <FaWhatsapp />
              </span>
              <span className="spa2">
                <TbPhoneCall />
              </span>
              <span className="spa3">
                <LiaSmsSolid />
              </span>
          </div>
        </div>
        </section>
      </main>
    </>
  );
}

export default Title;
