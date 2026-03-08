import React from "react";
import style from "./Robots.module.css";
import { appContext } from "../appState";
import { setStateContext } from "../appState";
import { withAddToCart } from "./AddToCart";
export interface RobotProps {
  id: number;
  name: string;
  email: string;
  addToCartClick: (id: number, name: string) => void;
}
const Robots: React.FC<RobotProps> = ({ id, name, email, addToCartClick }) => {
  const { authorName } = React.useContext(appContext);
  return (
    <div className={style.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt={name} />
      <h2>{name}</h2>
      <p>{email}</p>
      <div>作者：{authorName}</div>
      <button onClick={() => addToCartClick(id, name)}>加入购物车</button>
    </div>
  );
};

export default withAddToCart(Robots);
