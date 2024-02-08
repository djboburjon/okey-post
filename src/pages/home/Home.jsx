import React from "react";
import "./home.css";
import { FaArrowLeft, FaArrowRightLong } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { IoIosFitness } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
function Home() {
  return (
    <>
      <header>
        <div className="container">
          <div className="content">
            <h1>Доставка товаров из Великобритании в Россию</h1>
            <p>
              Начните экономить до 80% на шопинге. Регистрируйтесь в OkeyPost,
              чтобы покупать со скидками в UK одежду, обувь, гаджеты известных
              брендов и безопасно отправлять вещи в Россию.
            </p>
            <button>Получить адрес в UK</button>
          </div>
          <div className="image">
            <img src="image/home/img1.png" alt="" />
          </div>
        </div>
      </header>
      <main>
        <section className="content1">
          <div className="container">
            <h1>
              Насколько выгодно <br /> покупать?
            </h1>
            <div className="boxes">
              <span>
                <FaArrowLeft />
              </span>
              <div className="box">
                <img src="image/home/icon1.png" alt="" />
                <p>Одежда</p>
              </div>
              <div className="box">
                <img src="image/home/icon2.png" alt="" />
                <p>Электроника</p>
              </div>
              <div className="box">
                <img src="image/home/icon3.png" alt="" />
                <p>Аксессуары</p>
              </div>
              <div className="box">
                <img src="image/home/icon4.png" alt="" />
                <p>Для детей</p>
              </div>
              <div className="box">
                <img src="image/home/icon5.png" alt="" />
                <p>Для спорта</p>
              </div>
              <div className="box">
                <img src="image/home/icon6.png" alt="" />
                <p>Косметика</p>
              </div>
              <span>
                <FaArrowRightLong />
              </span>
            </div>
            <div className="cards">
              <div className="card">
                <h2>Columbia Barlow Pass 550 Turbodown Jacket</h2>
                <div className="box">
                  <img src="image/home/img3.png" alt="" />
                  <div>
                    <p>Цена в России</p>
                    <h3>7891,46₽</h3>
                  </div>
                </div>
                <div className="image">
                  <img src="image/home/img5.png" alt="" />
                  <span>
                    <FaArrowLeft />
                  </span>
                </div>
              </div>
              <div className="card card2">
                <img src="image/home/img2.png" alt="" />
                <p>Срок доставки примерно 10 дней</p>
                <h2>
                  Вы экономите до <span> $119.56</span>
                </h2>
              </div>
              <div className="card">
                <h2>
                  Доставка одежды из Великобритании от <span> £7.79</span>
                </h2>
                <div className="box">
                  <img src="image/home/img4.png" alt="" />
                  <div>
                    <p>Цена в UK</p>
                    <h3>£80.62</h3>
                  </div>
                </div>
                <div className="image image2">
                  <span>
                    <FaArrowRightLong />
                  </span>
                  <img src="image/home/img6.png" alt="" />
                </div>
              </div>
            </div>
            <div className="boxes2">
              <div className="box2">
                <img src="image/home/icon7.png" alt="" />
                <p>Экономия до 70%</p>
              </div>
              <div className="box2">
                <img src="image/home/icon8.png" alt="" />
                <p>Только подлинная продукция</p>
              </div>
              <div className="box2">
                <img src="image/home/icon9.png" alt="" />
                <p>Оперативная доставка</p>
              </div>
              <div className="box2">
                <img src="image/home/icon10.png" alt="" />
                <p>Огромный выбор товаров</p>
              </div>
            </div>
          </div>
        </section>
        <section className="content2">
          <header>
            <div className="container">
              <div className="image">
                <img src="image/home/img7.png" alt="" />
              </div>
              <div className="content">
                <h2>
                  Поручите нашим мастерам шопинга оформить заказы в английских
                  магазинах и освободите время для более важных дел.
                </h2>
                <p>
                  Такой способ покупки также подойдёт, если магазин принимает
                  только английские карты.
                </p>
                <button>Попробовать</button>
              </div>
            </div>
          </header>
        </section>
        <section className="content3">
          <div className="container">
            <h1>
              OkeyPost удобная и быстрая доставка <br /> посылок из
              Великобритании
            </h1>
            <p>
              Рассчитайте стоимость доставки из Англии к вам домой. Мы получим
              ваши <br /> посылки на складе, при необходимости объединим
              несколько доставок в одну <br /> и отправим их к вам надежно
              упакованными.
            </p>
            <div className="cards">
              <div className="card">
                <h4>Страна:</h4>
                <div className="box">
                  <span>
                    <BiWorld />
                  </span>
                  <p>Россия</p>
                </div>
              </div>
              <div className="card">
                <h4>Город:</h4>
                <div className="box">
                  <span>
                    <MdOutlineMapsHomeWork />
                  </span>
                  <p>Москва</p>
                </div>
              </div>
              <div className="card">
                <h4>Индекс:</h4>
                <div className="box">
                  <span>
                    <BsReverseLayoutTextSidebarReverse />
                  </span>
                  <p>Введите индекс</p>
                </div>
              </div>
              <div className="card">
                <h4>Вес посылки:</h4>
                <div className="box">
                  <span>
                    <IoIosFitness />
                  </span>
                  <p>0,5</p>
                </div>
              </div>
              <div className="card">
                <h4>Дополнительные услуги:</h4>
                <div className="box">
                  <span>
                    <IoDocumentTextOutline />
                  </span>
                  <p>Выберите услуги</p>
                </div>
              </div>
            </div>
            <button>Рассчитать</button>
          </div>
        </section>
        <section className="content4">
          <div className="container">
            <h1>Варианты доставки:</h1>
            <div className="cards">
              <div className="div1">
                <img src="image/home/icon11.png" alt="" />
                <p>Почта России</p>
              </div>
              <div className="card">
                <span>Сроки:</span>
                <h2>10-14 дней</h2>
              </div>
              <div className="card">
                <span>Стоимость доставки:</span>
                <h2>от £27.00</h2>
              </div>
              <div className="card">
                <span>Итого:</span>
                <h2>£41.99</h2>
              </div>
              <div className="card5 card">
                <span>
                  <FaAngleDown />
                </span>
              </div>
            </div>
            <div className="cards">
              <div className="div1">
                <img src="image/home/icon12.png" alt="" />
                <p>EMS ПОЧТА РОССИЯ</p>
              </div>
              <div className="card">
                <span>Сроки:</span>
                <h2>9-12 дней</h2>
              </div>
              <div className="card">
                <span>Стоимость доставки:</span>
                <h2>от £40.00</h2>
              </div>
              <div className="card">
                <span>Итого:</span>
                <h2>£54.55</h2>
              </div>
              <div className="card5 card">
                <span>
                  <FaAngleDown />
                </span>
              </div>
            </div>
            <div className="cards">
              <div className="div1">
                <img src="image/home/icon13.png" alt="" />
                <p>ПОЧТА РОССИИ МЕЛКИЕ ПАКЕТЫ</p>
              </div>
              <div className="card">
                <span>Сроки:</span>
                <h2>10-14 дней</h2>
              </div>
              <div className="card">
                <span>Стоимость доставки:</span>
                <h2>от £13.00</h2>
              </div>
              <div className="card">
                <span>Итого:</span>
                <h2>£90.50</h2>
              </div>
              <div className="card5 card">
                <span>
                  <FaAngleDown />
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="content5">
          <div className="container">
            <h1>
              4 простых шага для ваших <br /> покупок в Великобритании{" "}
            </h1>
            <div className="cards">
              <div className="card">
                <img src="image/home/img8.png" alt="" />
                <h2>
                  вы ВЫБИРАЕТЕ <br /> ТОВАР
                </h2>
                <p>
                  в английском магазине, оплачиваете и указываете адрес склада
                  OkeyPost
                </p>
              </div>
              <div className="card">
                <img src="image/home/img9.png" alt="" />
                <h2>
                  ПОКУПКИ ПРИХОДЯТ <br /> НА СКЛАД
                </h2>
                <p>и появляются в вашем личном кабинете на нашем сайте</p>
              </div>
              <div className="card">
                <img src="image/home/img10.png" alt="" />
                <h2>
                  ОТПРАВЛЯЕМ ИХ <br /> К ВАМ ДОМОЙ
                </h2>
                <p>в надежной упаковке, по выгодной цене и очень быстро</p>
              </div>
              <div className="card">
                <img src="image/home/img11.png" alt="" />
                <h2>
                  ЗАБИРАЕТЕ <br /> свою ПОСЫЛКУ
                </h2>
                <p>в пункте выдачи, на почте или с курьером</p>
              </div>
            </div>
            <p>
              Не хотите разбираться самостоятельно, наши мастера шопинга с
              радостью <br /> купят все товары за вас.
            </p>
            <button>Быстрая покупка</button>
          </div>
        </section>
        <section className="content6">
          <header>
            <div className="container">
              <div className="image">
                <img src="image/home/img12.png" alt="" />
              </div>
              <div className="content">
                <h2>
                  Виртуальный тур по нашему складу <br /> в реальном времени
                </h2>
                <p>
                  Вы можете всегда посмотреть на нашу слаженую работу на складе
                </p>
                <button>Попробовать</button>
              </div>
            </div>
          </header>
        </section>
        <section className="content7">
          <div className="container">
            <h1>
              120 000 довольных клиентов в России <br /> уже сделали свой выбор
            </h1>
            <p>
              За последний год десятки тысяч наших клиентов заказали <br />{" "}
              товары из Англии и оставили 19 633 отзыва
            </p>
            <div className="cards">
              <div className="card">
                <img src="image/home/icon14.png" alt="" />
                <h2>Больше не значит дороже</h2>
                <p>
                  С ростом веса посылки цена за каждые 0.5 кг уменьшается в
                  прогрессии.
                </p>
              </div>
              <div className="card">
                <img src="image/home/icon15.png" alt="" />
                <h2>Быстрая обработка посылок</h2>
                <p>
                  Посылка обрабатывается не дольше 48 часов после поступления на
                  склад.{" "}
                </p>
              </div>
              <div className="card">
                <img src="image/home/icon16.png" alt="" />
                <h2>SMS-уведомления</h2>
                <p>Отслеживайте весь процесс с помощью sms-уведомлений.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="content8">
          <div className="container">
            <h1>Отзывы и цитаты блогеров:</h1>
            <div className="cards">
              <div className="card">
                <img src="image/home/img13.png" alt="" />
                <div className="text">
                  <h2>NIKOLAY S</h2>
                  <img src="image/home/star.png" alt="" />
                  <p>Ваша доставка самая быстрая и дешёвая!!!</p>
                  <div>
                    <span>Дата:</span>
                    <p>16 Ноября 2021</p>
                  </div>
                  <div>
                    <span>Город:</span>
                    <p>Санкт-Петербург</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <img src="image/home/img14.png" alt="" />
                <div className="text">
                  <h2>DMITRIY D</h2>
                  <img src="image/home/star.png" alt="" />
                  <p>Пуховик Levi’s c eBay. Всё приехало быстро и целым.</p>
                  <div>
                    <span>Дата:</span>
                    <p>16 Ноября 2021</p>
                  </div>
                  <div>
                    <span>Город:</span>
                    <p>Москва</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <img src="image/home/img15.png" alt="" />
                <div className="text">
                  <h2>VLADIMIR E</h2>
                  <img src="image/home/star.png" alt="" />
                  <p>
                    Огонь, как всегда! Отдельное спасибо за доп.упаковку,
                    часики...
                  </p>
                  <div>
                    <span>Дата:</span>
                    <p>16 Ноября 2021</p>
                  </div>
                  <div>
                    <span>Город:</span>
                    <p>Санкт-Петербург</p>
                  </div>
                </div>
              </div>{" "}
              <div className="card">
                <img src="image/home/img16.png" alt="" />
                <div className="text">
                  <h2>Оксана</h2>
                  <img src="image/home/star.png" alt="" />
                  <p>
                    Очень быстро, надежно! Как всегда большое спасибо за работу!
                  </p>
                  <div>
                    <span>Дата:</span>
                    <p>16 Ноября 2021</p>
                  </div>
                  <div>
                    <span>Город:</span>
                    <p>Odintsovo</p>
                  </div>
                </div>
              </div>
            </div>
            <button>Все отзывы</button>
          </div>
        </section>
        <section className="content9">
          <div className="container">
            <h1>Ваш личный адрес в Великобритании для покупок</h1>
            <p>
              С нами вы получаете целых два адреса в UK! У нас есть два склада
              для приема посылок – в Лондоне и Манчестере. Указывайте в магазине
              тот из них, отправка на который обойдется дешевле (или покупка
              будет без налогов). Чаще всего в Лондоне наши клиенты заказывают
              одежду и обувь, а в Манчестер идут гаджеты и всё остальное. С
              OkeyPost вы всегда получаете максимальную выгоду!
            </p>
            <p>
              При доставке из UK в Россию все ваши товары обязательно
              страхуются. Прием посылок на наш склад, их обработка, удаление
              лишних коробок, хранение сроком до 70 дней – у нас полностью
              бесплатно. Мы также бесплатно проводим объединение посылок из
              разных магазинов в одну. Это необходимо для снижения стоимости
              доставки посылок из UK в Россию.
            </p>
            <p>
              У нас самая выгодная доставка! От $11.99 за посылку! А если у вас
              есть какие-то особенные требования, вроде проверки техники или
              дополнительной пленки для самых хрупких товаров, – операторы
              нашего склада с радостью выполнят их по спецзапросу.
            </p>
            <p>
              Okeypost.com – это надежно, быстро и выгодно. А в наших соцсетях
              вы всегда найдете информацию о лучших скидках fyukbqcrb[
              магазинов. Не обязательно заходить в Черную пятницу или Prime Day,
              крутые акции проходят каждый день!
            </p>
          </div>
        </section>
        <section className="content10">
          <div className="container">
            <h2>Подпишитеть и будьте в курсе<br /> всех скидок и акций магазинов <br />Великобритании!</h2>
              <div className="boxInput">
                <span>
                  <HiOutlineMailOpen/>
                </span>
                <input type="text" placeholder="Введите ваш email"/>
              </div>
              <button>Подписаться</button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
