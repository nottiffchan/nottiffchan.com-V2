import React, { createContext, useReducer, useContext } from "react";

const defaultState = {
  dispatch: "",
};

const defaultDispatch = {
  cursorType: "",
};

//Define Conext
const GlobalStateContext = createContext(defaultState);
const GlobalDispatchContext = createContext(defaultDispatch);

//Reducer
const globalReducer = (state, action) => {
  switch (action.type) {
    case "CURSOR_TYPE": {
      return {
        ...state,
        cursorType: action.cursorType,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

//Provider

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    cursorType: false,
    cursorStyles: ["pointer", "hovered", "viewCase", "white"],
  });

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
};

//custom hooks for when we want to use our global state
export const useGlobalStateContext = () => useContext(GlobalStateContext);

export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);
