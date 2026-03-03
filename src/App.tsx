import React, { useState } from "react";
// import robots from "./mockdata/robots.json";
import logo from "./assets/images/logo.svg";
import Robots from "./components/Robots";
import style from "./App.module.css";
import ShopCart from "./components/ShopCart";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div className={style.app}>
      <div className={style.appHeader}>
        <img src={logo} className={style.appLogo} alt="" />
        <h1>罗伯特机器人画廊</h1>
      </div>
      <ShopCart></ShopCart>
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          增加
        </button>
        <span>计数: {count}</span>
      </div>
      {/* <div className={style.robotList}>
        {this.state.robotsGalleryList.map((robot) => (
          <Robots {...robot} key={robot.id} />
        ))}
      </div> */}
    </div>
  );
};

export default App;
