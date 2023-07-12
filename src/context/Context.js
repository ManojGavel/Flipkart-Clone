import { createContext, useContext, useReducer } from "react";


//prepares the dataLayer
export const StateContext=createContext();

//wrap our app and provide the data layer
export const SetProvider=({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)
  const useStateValue=()=>useContext(StateContext)
  export { useStateValue}