import React from "react";
import robots from "./mockdata/robots.json";
import logo from './assets/images/logo.svg'
import Robots from "./components/Robots";
import style from "./App.module.css";
import ShopCart from "./components/ShopCart";
function App() {
  return (
    <div className={style.app}>
      <div className={style.appHeader}>
        <img src={logo} className={style.appLogo} alt="" />
        <h1>罗伯特机器人画廊</h1>
      </div>
      <ShopCart></ShopCart>
      <div className={style.robotList}>
        {robots.map((robot) => (
          <Robots {...robot} key={robot.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
