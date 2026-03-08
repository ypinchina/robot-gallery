import React from "react";
import style from "./ShopCart.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { appContext } from "../appState";
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
    if (e.target instanceof HTMLElement && e.target.nodeName === "SPAN") {
      this.setState({ isOpen: !this.state.isOpen });
    }
  };

  render() {
    return (
      <appContext.Consumer>
        {(context) => {
          return (
            <div className={style.cartContainer}>
              <button
                onClick={this.shopCartButtonClick}
                className={style.button}
              >
                <ShoppingCartIcon />
                <span>购物车({context.shoppingCart.items.length}件)</span>
              </button>
              <div
                style={{ display: this.state.isOpen ? "block" : "none" }}
                className={style.cartDropDown}
              >
                <ul>
                  {context.shoppingCart.items.map((item) => (
                    <li key={item.id}>{item.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        }}
      </appContext.Consumer>
    );
  }
}

export default ShopCart;
