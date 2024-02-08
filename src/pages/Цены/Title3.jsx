import React from "react";
import "./title3.css";
import { FaWhatsapp } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";
import { LiaSmsSolid } from "react-icons/lia";

function Title3() {
  return (
    <>
      <header>
        <div className="container">
          <div className="content">
            <h2>Услуги доставки из Великобритании</h2>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="container">
            <div className="facilities">
              <div className="facility">
                <img src="image/prices/facility1.png" alt="" />
                <h3>Ваш личный адрес для покупок</h3>
                <p>
                  на нашем современном автоматизированном складе в безналоговом
                  Делавэре
                </p>
                <div className="facility_btn">Бесплатно</div>
              </div>
              <div className="facility">
                <img src="image/prices/facility2.png" alt="" />
                <h3>Объединение посылок в одну</h3>
                <p>
                  ведь часто отправлять несколько посылок в одной коробке
                  гораздо выгоднее
                </p>
                <div className="facility_btn">от £10.00</div>
              </div>
              <div className="facility">
                <img src="image/prices/facility3.png" alt="" />
                <h3>Усиленная упаковка по запросу</h3>
                <p>
                  Мы дополнительно упакуем вашу посылку в пленку, коробку с
                  двойными стенками.
                </p>
                <div className="facility_btn">от £0.25</div>
              </div>
              <div className="facility">
                <img src="image/prices/facility4.png" alt="" />
                <h3>Хранение входящих посылок 30 дней</h3>
                <p>
                  чем больше срок хранения посылок на складе – тем больше вы
                  сможете собрать
                </p>
                <div className="facility_btn">Бесплатно</div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <h1>
              Онлайн-калькулятор <br /> стоимости доставки товара
            </h1>
            <p>
              Задайте необходимые параметры посылки, и калькулятор рассчитает{" "}
              <br />
              приблизительную стоимость доставки вашей посылки из Англии.
            </p>

            <form className="calcForm">
              <div className="form_sections">
                <div className="form_section">
                  <h5>Страна:</h5>
                  <div className="option">
                    <img src="image/prices/state.png" alt="" />
                    <select>
                      <option value="">Россия</option>
                      <option value="">England</option>
                      <option value="">Uzbekistan</option>
                    </select>
                  </div>
                </div>
                <div className="form_section">
                  <h5>Город:</h5>
                  <div className="option">
                    <img src="image/prices/region.png" alt="" />
                    <input type="text" placeholder="Москва" />
                  </div>
                </div>
                <div className="form_section">
                  <h5>Индекс:</h5>
                  <div className="option">
                    <img src="image/prices/postcode.png" alt="" />
                    <input type="text" placeholder="Введите индекс" />
                  </div>
                </div>
                <div className="form_section">
                  <h5>Вес посылки:</h5>
                  <div className="option">
                    <img src="image/prices/weight.png" alt="" />
                    <input type="number" placeholder="0,5" />
                  </div>
                </div>
                <div className="form_section">
                  <h5>Дополнительные услуги:</h5>
                  <div className="option">
                    <img src="image/prices/additionalService.png" alt="" />
                    <select>
                      <option value="">Выберите услуги</option>
                    </select>
                  </div>
                </div>
              </div>
              <button>Рассчитать</button>
            </form>
          </div>
        </section>

        <section>
          <div className="container">
            <h1>Варианты доставки:</h1>
            <div className="delivery">
              <div className="delivery_title">
                <img src="image/prices/deliveryPost.png" alt="" />
                <h3>Почта России</h3>
              </div>
              <div className="delivery_date">
                <p>Сроки:</p>
                <h4>10-14 дней</h4>
              </div>
              <div className="delivery_price">
                <p>Стоимость доставки:</p>
                <h4>от £27.00</h4>
              </div>
              <div className="delivery_total">
                <p>Итого:</p>
                <h4>£41.99</h4>
              </div>
              <img src="image/prices/arrowDown.png" alt="" />
            </div>
            <div className="delivery">
              <div className="delivery_title">
                <img src="image/prices/deliveryEMS.png" alt="" />
                <h3>EMS ПОЧТА РОССИЯ</h3>
              </div>
              <div className="delivery_date">
                <p>Сроки:</p>
                <h4>9-12 дней</h4>
              </div>
              <div className="delivery_price">
                <p>Стоимость доставки:</p>
                <h4>от £40.00</h4>
              </div>
              <div className="delivery_total">
                <p>Итого:</p>
                <h4>£54.55</h4>
              </div>
              <img src="image/prices/arrowDown.png" alt="" />
            </div>
            <div className="delivery">
              <div className="delivery_title">
                <img src="image/prices/deliveryMarket.png" alt="" />
                <h3>ПОЧТА РОССИИ МЕЛКИЕ ПАКЕТЫ</h3>
              </div>
              <div className="delivery_date">
                <p>Сроки:</p>
                <h4>10-14 дней</h4>
              </div>
              <div className="delivery_price">
                <p>Стоимость доставки:</p>
                <h4>от £13.00</h4>
              </div>
              <div className="delivery_total">
                <p>от £13.00</p>
                <h4>£90.50</h4>
              </div>
              <img src="image/prices/arrowDown.png" alt="" />
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <h1>Услуги склада</h1>
            <div className="warehouseServices1">
              <div className="warehouse_box">
                <div className="warehouseService">
                  <h4>Консолидация</h4>
                  <p>£1.00/1 трек</p>
                </div>
              </div>
              <div className="warehouse_box">
                <div className="warehouseService">
                  <h4>Консолидация</h4>
                  <p>£1.00/1 трек</p>
                </div>
              </div>
              <div className="warehouse_box">
                <div className="warehouseService">
                  <h4>Консолидация</h4>
                  <p>£1.00/1 трек</p>
                </div>
              </div>
              <div className="warehouse_box">
                <div className="warehouseService">
                  <h4>Заполнение декларации</h4>
                  <p>£1.00</p>
                </div>
              </div>
              <div className="warehouse_box">
                <div className="warehouseService">
                  <h4>Заполнение декларации</h4>
                  <p>£1.00</p>
                </div>
              </div>
              <div className="warehouse_box">
                <div className="warehouseService">
                  <h4>Заполнение декларации</h4>
                  <p>£1.00</p>
                </div>
              </div>
            </div>

            <div className="warehouseService">
              <div className="service_info">
                <h4>
                  Сборка исходящей посылки вне очереди или экспресс сборка
                </h4>
                <div className="service_info-addition">
                  Чтобы сэкономить время
                </div>
              </div>
              <p className="warehouseService_price">£5.00</p>
            </div>
            <div className="warehouseService">
              <div className="service_info">
                <h4>
                  Сборка исходящей посылки вне очереди или экспресс сборка
                </h4>
                <div className="service_info-addition">
                  Чтобы сэкономить время
                </div>
              </div>
              <p className="warehouseService_price">£5.00</p>
            </div>
            <div className="warehouseService">
              <div className="service_info">
                <h4>
                  Сборка исходящей посылки вне очереди или экспресс сборка
                </h4>
                <div className="service_info-addition">
                  Чтобы сэкономить время
                </div>
              </div>
              <p className="warehouseService_price">£5.00</p>
            </div>
            <div className="warehouseService">
              <div className="service_info">
                <h4>
                  Сборка исходящей посылки вне очереди или экспресс сборка
                </h4>
                <div className="service_info-addition">
                  Чтобы сэкономить время
                </div>
              </div>
              <p className="warehouseService_price">£5.00</p>
            </div>
            <div className="warehouseService">
              <div className="service_info">
                <h4>
                  Сборка исходящей посылки вне очереди или экспресс сборка
                </h4>
                <div className="service_info-addition">
                  Чтобы сэкономить время
                </div>
              </div>
              <p className="warehouseService_price">£5.00</p>
            </div>
            <div className="warehouseService">
              <div className="service_info">
                <h4>
                  Сборка исходящей посылки вне очереди или экспресс сборка
                </h4>
                <div className="service_info-addition">
                  Чтобы сэкономить время
                </div>
              </div>
              <p className="warehouseService_price">£5.00</p>
            </div>
          </div>
        </section>

        <section className="shoppingWithOperator">
          <div className="container">
            <h1>Покупки с операторами Okeypost.com</h1>
            <div className="warehouseService">
              <div className="service_info">
                <h4>Быстрое оформление покупок в интернет-магазинах</h4>
                <div className="service_info-addition">
                  Вы присылаете ссылки, а оформлением заказов занимаются
                  операторы Почтой.ком. Они сделают покупки за вас, <br />
                  проконтролируют доставку на склад и сообщат, когда всё будет
                  готово.
                </div>
              </div>
              <p className="warehouseService_price">
                5% от стоимости товаров минимум £7 для каждого магазина Но не
                менее £7 для каждого лота eBay
              </p>
            </div>
            <div className="warehouseService">
              <div className="service_info">
                <h4>Фото товара по услуге "Покупка с операторами"</h4>
                <div className="service_info-addition">
                  Три фото выбранного вами товара, приобретенного по услуге
                  "Полное сопровождение"
                </div>
              </div>
              <p className="warehouseService_price">£2</p>
            </div>
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

        <section>
          <div className="container">
            <h1>Страхование</h1>
            <div className="insuranse">
              <h4>Дополнительное страxование</h4>
              <h5>5% от суммы на которую xотите застраxовать</h5>
            </div>
            <div className="insuranse">
              <h4>Дополнительное страxование</h4>
              <h5>5% от суммы на которую xотите застраxовать</h5>
            </div>
            <div className="insuranse">
              <h4>Дополнительное страxование</h4>
              <h5>5% от суммы на которую xотите застраxовать</h5>
            </div>
          </div>
        </section>

        <section className="packagingSection">
          <div className="container">
            <h1 className="packaging_title">Дополнительная упаковка</h1>
            <div className="packaging">
              <div className="warehouseService">
                <div className="service_info">
                  <h4>
                  Многослойная пленка
                  </h4>
                  <div className="service_info-addition">
                    Дополнительная защита покупок
                  </div>
                </div>
                <p className="warehouseService_price packaging_price">£5.00</p>
              </div>
              <div className="warehouseService">
                <div className="service_info">
                  <h4>
                    Многослойная пленка
                  </h4>
                  <div className="service_info-addition">
                    Дополнительная защита покупок
                  </div>
                </div>
                <p className="warehouseService_price packaging_price">£5.00</p>
              </div>
            </div>
            <div className="packaging">
            <div className="warehouseService">
              <div className="service_info">
                <h4>
                 Многослойная пленка
                </h4>
                <div className="service_info-addition">
                  Дополнительная защита покупок
                </div>
              </div>
              <p className="warehouseService_price packaging_price">£5.00</p>
            </div>
            <div className="warehouseService">
              <div className="service_info">
                <h4>
                  Многослойная пленка
                </h4>
                <div className="service_info-addition">
                  Дополнительная защита покупок
                </div>
              </div>
              <p className="warehouseService_price packaging_price">£5.00</p>
            </div>
            </div>
            <div className="packaging">
              <div className="warehouseService">
                <div className="service_info">
                  <h4>
                    Многослойная пленка
                  </h4>
                  <div className="service_info-addition">
                    Дополнительная защита покупок
                  </div>
                </div>
                <p className="warehouseService_price packaging_price">£5.00</p>
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

export default Title3;
