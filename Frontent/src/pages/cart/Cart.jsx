import React, { useContext, useEffect } from 'react'
import { StoreContext } from '../../context/CreateContext'
import "./cart.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const { food_list, cartItem, removeFromCart, cartTotal } = useContext(StoreContext)
  const navigate = useNavigate();



  return (
    <div className='cart'>
      <div className="cart-tems">
        <div className="cart-items-tittle">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {console.log(cartItem)}
        {food_list.map((item) => {
          if (cartItem[item._id]) {
            return (
              <div>
                <div className="cart-items-tittle cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>Rs.{item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>Rs.{item.price * cartItem[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>

      {/* {cartTotal} */}

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-total-content">
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rs.{cartTotal}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rs.{cartTotal === 0 ? "0" : "3"}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>Rs.{cartTotal +Number(cartTotal === 0 ? "0" : "3")}</b>
            </div>
            
          </div>
          <button onClick={()=>navigate("/order")}>PROCEED TO CHECKOUT</button>
        </div>

        <div className="cart-promocode">
          <div>
            <p>If you have any promo code, Enter it here</p>
            <div className="cart-promo-code-input">
              <input type="text" placeholder='Prome code'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
