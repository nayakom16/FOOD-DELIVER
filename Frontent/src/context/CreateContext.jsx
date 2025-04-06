import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext();

export const StoreContextProvider = ({children}) => {

    const [cartItem , setCartItem] = useState({})

    function addToCart(itemID){
        if(!cartItem[itemID]){
            setCartItem(prev=>({...prev ,[itemID]:1}))
        }else{
            setCartItem(prev=>({...prev , [itemID]:prev[itemID]+1}))
        }
    }

    function removeFromCart(itemID){
        setCartItem(prev=>({...prev,[itemID]:prev[itemID]-1}))
    }

    useEffect(()=>{
        console.log(cartItem);
        
    } , [cartItem])

    const contextVelue =  {
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart
    } 
    console.log(contextVelue);
    
    return (
        <StoreContext.Provider value={contextVelue}>
            {children}
        </StoreContext.Provider>
    )
}
