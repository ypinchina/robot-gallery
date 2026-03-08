import React from "react";
import { setStateContext } from "../appState";
import { RobotProps } from "./Robots";
export const withAddToCart = (
  ChildComponent: React.ComponentType<RobotProps>,
) => {
  //    return class AddToCart extends React.Component {}
  return (props: RobotProps) => {
    const setState = React.useContext(setStateContext);
    const addToCartClick = (id: number, name: string) => {
      if (setState) {
        setState((prevState) => ({
          ...prevState,
          shoppingCart: {
            ...prevState.shoppingCart,
            items: [...prevState.shoppingCart.items, { id, name }],
          },
        }));
      }
    };
    return <ChildComponent {...props} addToCartClick={addToCartClick} />;
  };
};

export const UserAddToCart = () => {
  const setState = React.useContext(setStateContext);
  const addToCartClick = (id: number, name: string) => {
    if (setState) {
      setState((prevState) => ({
        ...prevState,
        shoppingCart: {
          ...prevState.shoppingCart,
          items: [...prevState.shoppingCart.items, { id, name }],
        },
      }));
    }
  };
  return addToCartClick;
};
