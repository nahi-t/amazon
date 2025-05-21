



import React,{createContext,useReducer} from "react";
// import { initialstate, reducer } from "../../Utility/reducer";
export const datacontext=createContext();

export const Dataprovider=({children,reducer,initialstate})=>{
    return(
        <datacontext.Provider value={useReducer(reducer,initialstate)}>
         {children}
        </datacontext.Provider>
    )
}
