import React, { createContext, useReducer } from "react";
import { AppReducer } from "../contexts/AppReducer";

const originalValues = {
  transaction: [],
};

export const GlobalState = createContext(originalValues);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, originalValues);

  const deleted = (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };
  const Add = (transaction) => {
    dispatch({
      type: "ADD",
      payload: transaction,
    });
  };
  return (
    <GlobalState.Provider
      value={{
        transaction: state.transaction,
        deleted,
        Add,
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};
