import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext();

export const StoreContextProvider = ({children}) => {

    const [cartItem , setCartItem] = useState({})
    let [cartTotal , setCartTotal] = useState(0)

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

    useEffect(() => {
        let total = 0;
        food_list.forEach((item) => {
          if (cartItem[item._id] ) {
            total =total+ (item.price * cartItem[item._id]);
          }
        });
        setCartTotal(total);
    }, [cartItem])
    
    console.log(cartTotal)

    const contextVelue =  {
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        cartTotal
    } 
    console.log(contextVelue);
    
    return (
        <StoreContext.Provider value={contextVelue}>
            {children}
        </StoreContext.Provider>
    )
}
