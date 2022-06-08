import React, { createContext } from "react";
import { store } from "./store";

 export const ReduxContext = createContext();
const ReduxProvider = ({children}) => {
  return (
    <ReduxContext.Provider value={[store.getState.bind(store), store.dispatch.bind(store)]}>
      {children}
    </ReduxContext.Provider>
  );
};

export default ReduxProvider;
