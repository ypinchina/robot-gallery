import React, { useState, useEffect } from "react";
// import robots from "./mockdata/robots.json";
import logo from "./assets/images/logo.svg";
import Robots from "./components/Robots";
import style from "./App.module.css";
import ShopCart from "./components/ShopCart";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [robotsGalleryList, setRobotsGalleryList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  useEffect(() => {
    document.title = `clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    const getFetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setLoading(false);
        setRobotsGalleryList(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError("未知错误");
        }
      }
    };
    getFetchData();
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
      {
        error ? '发现错误:' + error : ''
      }
      {!loading ? (
        <div className={style.robotList}>
          {robotsGalleryList.map((robot) => (
            <Robots {...robot} key={robot.id} />
          ))}
        </div>
      ) : (
        <h2>数据加载中...</h2>
      )}
    </div>
  );
};

export default App;
