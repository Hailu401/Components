import React, { createContext, useContext, useReducer } from "react";

//preparing the context//
export const StateContext = createContext();

// the wrap our data and provide the data layer//

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// pull and push information from tthe data layer//
export const useStateValue = () => useContext(StateContext);
