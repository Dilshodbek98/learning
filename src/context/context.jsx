import React from "react";
import { useReducer } from "react";
import { reducer } from "./reducer";

export const Mycontext = React.createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <Mycontext.Provider value={[state, dispatch]}>
      {children}
    </Mycontext.Provider>
  );
};

export default ContextProvider;
