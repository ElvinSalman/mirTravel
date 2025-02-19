import iconDown from "./photos/Rectangle 40000 (Stroke)@2x.png";
import iconRefresh from "./photos/Vector@2x.png";
import aircraft from "./photos/aircraft.png";
import success from "./photos/success.png";
import paperClip from "./photos/paperClip.png";
import ball from "./photos/ball.png";
import circle from "./photos/circle.png";
import circle05 from "./photos/circle_0.5.png";
import arrow from "./photos/arrow.png";





import './App.css';
import React, { useState, useEffect, useRef } from 'react';


function App() {



  return (

    <div className="App">
      <div id='section'>

        <div id='section1'>
          <p>Мои данные</p>
          <div>
            <div>
              <div>
                <p>08521233689-154888.25959595.5</p>
                <p>с 01.01.2020 по настоящее время</p>
              </div>
              <img src={iconDown} alt="" />
            </div>
            <div>
              <div>
                <p>500 540, 22 Р</p>
                <p>Баланс</p>
              </div>
              <img src={iconRefresh} alt="" />
            </div>
          </div>
        </div>

        <div id="section2">
          <p>Увеличьте свои продажи с MirTraveler</p>
          <p>Привлекайте больше клиентов <br />и увеличивайте доходы с нашей платформой</p>
          <img id="aircraft" src={aircraft} alt="" />
          <div id="section2BackColor"></div>
          <img id="circle05" src={circle05} alt="" />
          <img id="circle" src={circle} alt="" />
          <img id="ball" src={ball} alt="" />
          <img id="arrow" src={arrow} alt="" />
        </div>

        <div id="section3">
          <h2>Персональные</h2>
          <div>
            <div>
              <div>
                <p>
                  ФИО
                </p>
                <p>
                  Иван	Иванов	Иванович
                </p>
              </div>
              <div>
                <p>
                  Телефон
                </p>
                <p>
                  +7 123 456 78 90
                </p>
              </div>
              <div>
                <p className="changeBtn">Изменить данные</p>
              </div>
            </div>
            <div>
              <div>
                <p>
                  Физический адрес
                </p>
                <p>
                  629400, Ямало-Ненецкий автономный округ, город Лабытнанги, Заполярная ул., д. 4, кв. 15
                </p>
              </div>
              <div>
                <p>
                  Почта
                </p>
                <p>
                  example1@example.com
                  <span>
                    <img src={success} alt="" />
                    Почта подтверждена
                  </span>
                </p>
              </div>
              <div>

              </div>
            </div>
          </div>
        </div>

        <div id="section4">
          <div>
            <h2>О компании</h2>
            <p>Изменить данные</p>
          </div>

          <div>
            <div>
              <p>
                Форма юридического лица
              </p>
              <p>
                ОБЩЕСТВО С ОГРАНИЧЕННОЙ <br />ОТВЕТСТВЕННОСТЬЮ
              </p>
            </div>
            <div>
              <p>
                Полное юридическое наименование
              </p>
              <p>
                ОБЩЕСТВО С ОГРАНИЧЕННОЙ <br />ОТВЕТСТВЕННОСТЬЮ  ФИНЛОГИКА
              </p>
            </div>
            <div></div>
          </div>

          <div>
            <div>
              <p>
                Руководитель
              </p>
              <p>
                Иван	Иванов	Иванович
              </p>
            </div>
            <div>
              <p>
                Город
              </p>
              <p>
                Лабытнанги
              </p>
            </div>
            <div></div>
          </div>

          <div>
            <div>
              <div>
                <p>
                  ИНН/КПП
                </p>
                <p>
                  8901039505
                  <br />890101001
                </p>
              </div>
              <div>
                <p>
                  ОГРН/ОГРНИП
                </p>
                <p>
                  8901039505
                  <br />890101001
                </p>
              </div>
            </div>
            <div>
              <p>
                Полное юридическое наименование              </p>
              <p>
                ОБЩЕСТВО С ОГРАНИЧЕННОЙ <br />ОТВЕТСТВЕННОСТЬЮ  ФИНЛОГИКА
              </p>
            </div>
            <div></div>
          </div>
        </div>

        <div id="section5">
          <div>
            <div>
              <div>
                <p>
                  Контактное лицо (ФИО)
                </p>
                <p>
                  Петр Петров Петрович
                </p>
              </div>
              <div>
                <p>
                  Телефон
                </p>
                <p>
                  +7 123 456 89 90
                </p>
              </div>
              <div>
                <p className="changeBtn">Изменить данные</p>
              </div>
            </div>
            <div>
              <div>
                <p>
                  Должность
                </p>
                <p>
                  Коммерческий директор
                </p>
              </div>
              <div>
                <p>
                  Почта
                </p>
                <p>
                  example3@example.com
                  <span>
                    <img src={success} alt="" />
                    Почта подтверждена
                  </span>
                </p>
              </div>
              <div>

              </div>
            </div>
          </div>
        </div>

        <div id="section6">
          <div>
            <div>
              <div>
                <p>
                  Физический адрес
                </p>
                <p>
                  629400, Ямало-Ненецкий автономный округ, город Лабытнанги, Заполярная ул., д. 4, кв. 15
                </p>
              </div>
              <div>
                <p>
                  Юридический адрес
                </p>
                <p>
                  629400, Ямало-Ненецкий автономный округ, город Лабытнанги, Заполярная ул., д. 4, кв. 15
                </p>
              </div>
              <div>
                <p className="changeBtn">Изменить данные</p>
              </div>
            </div>
            <div>
              <div>
                <img src={paperClip} alt="" />
                <span>Прикрепленные сканы документов </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}

export default App;
