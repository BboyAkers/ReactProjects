// state.js

import { createContext, PropsWithChildren, useContext, useState } from "react";

const AppStateContext = createContext({});

const AppProvider = ({ children }:PropsWithChildren) => {
  const value = useState({});
  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}

const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState must be used within the AppProvider");
  }
  return context;
}

export { useAppState, AppProvider, AppStateContext}
