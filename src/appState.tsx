import React, { useState, createContext } from "react";

interface AppState {
  authorName: string;
  shoppingCart: {
    items: { id: number; name: string }[];
  };
}

const defaultState: AppState = {
  authorName: "Yip",
  shoppingCart: {
    items: [],
  },
};

export const appContext = createContext(defaultState);
export  const setStateContext = createContext<React.Dispatch<React.SetStateAction<AppState>> | undefined>(undefined);
export const AppProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [state, setState] = useState(defaultState)

  return (
    <appContext.Provider value={state}>
      <setStateContext.Provider value={setState}>
        {props.children}
      </setStateContext.Provider>
    </appContext.Provider>
  );
};
