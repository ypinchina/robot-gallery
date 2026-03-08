import React from "react";
import style from "./Robots.module.css";
import { appContext } from "../appState";
import { UserAddToCart } from "./AddToCart";
interface RobotProps {
  id: number;
  name: string;
  email: string;
}
const RobotsDiscount: React.FC<RobotProps> = ({ id, name, email }) => {
  const { authorName } = React.useContext(appContext);
  const addToCartClick = UserAddToCart();
  return (
    <div className={style.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt={name} />
      <div>折扣商品</div>
      <h2>{name}</h2>
      <p>{email}</p>
      <div>作者：{authorName}</div>
      <button onClick={() => addToCartClick(id, name)}>加入购物车</button>
    </div>
  );
};

export default RobotsDiscount;
