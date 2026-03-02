import React from "react";
import style from "./ShopCart.module.css";
import { FiShoppingCart } from "react-icons/fi";
const ShoppingCartIcon = FiShoppingCart as React.ElementType;
interface Props {}

interface State {
  isOpen: boolean;
}

class ShopCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  shopCartButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("e.target", e.target);
    console.log("e.currentTarget", e.currentTarget);
    if (e.target instanceof HTMLElement && e.target.nodeName === "SPAN") {
      this.setState({ isOpen: !this.state.isOpen });
    }
  };
  render() {
    return (
      <div className={style.cartContainer}>
        <button onClick={this.shopCartButtonClick} className={style.button}>
          <ShoppingCartIcon />
          <span>购物车(2件)</span>
        </button>
        <div
          style={{ display: this.state.isOpen ? "block" : "none" }}
          className={style.cartDropDown}
        >
          <ul>
            <li>robot1</li>
            <li>robot2</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ShopCart;
