import React, { useState, useEffect } from "react";
// import robots from "./mockdata/robots.json";
import logo from "./assets/images/logo.svg";
import Robots from "./components/Robots";
import style from "./App.module.css";
import ShopCart from "./components/ShopCart";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [robotsGalleryList, setRobotsGalleryList] = useState<any[]>([]);
  useEffect(() => {
    document.title = `clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setRobotsGalleryList(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

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
      <div className={style.robotList}>
        {robotsGalleryList.map((robot) => (
          <Robots {...robot} key={robot.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
