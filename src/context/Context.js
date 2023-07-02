import { createContext, useContext, useReducer } from "react";

const Context=createContext();

export const ContextProvider=({reducer,initialState,children})=>{
    <Context.Provider value={useReducer(reducer,initialState)}>{children}</Context.Provider>
}
export const ContextUse=()=>useContext(Context)