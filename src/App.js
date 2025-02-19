import iconDown from "./photos/Rectangle 40000 (Stroke)@2x.png";
import iconRefresh from "./photos/Vector@2x.png";

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
          
        </div>

      </div>
    </div>

  );
}

export default App;
