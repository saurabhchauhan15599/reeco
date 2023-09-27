/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useReducer } from "react";
import { appReducer } from "./appReducer";

interface IAppContextProps {
  children: React.ReactNode;
}

export const AppContext = createContext<any>({});

const AppContextProvider: React.FC<IAppContextProps> = (props) => {
  const initialState = {
    registerData: {
      phone_number: "",
    },
  };
  const [appState, appDispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
