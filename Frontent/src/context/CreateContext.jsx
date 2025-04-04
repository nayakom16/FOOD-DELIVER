import { createContext } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext();

export const StoreContextProvider = ({children}) => {

    const contextVelue =  food_list 
    console.log(contextVelue);
    
    return (
        <StoreContext.Provider value={contextVelue}>
            {children}
        </StoreContext.Provider>
    )
}
