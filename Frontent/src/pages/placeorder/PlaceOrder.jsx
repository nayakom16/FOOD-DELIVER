import React, { useContext } from 'react'
import { StoreContext } from '../../context/CreateContext'
import "./placeorder.css"

const PlaceOrder = () => {
  const { food_list, cartItem, removeFromCart, cartTotal } = useContext(StoreContext)


    return (
        <form className='place-order'>
            <div className="place-order-left">
                <p className='title'>Delivery Information</p>
                <div className="multifields">
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name' />
                </div>
                <input type="Email" placeholder='Email' />
                <input type="text" placeholder='Address' />
                <div className="multifields">
                    <input type="text" placeholder='City' />
                    <input type="text" placeholder='State' />
                </div>
                <div className="multifields">
                    <input type="text" placeholder='Country' />
                    <input type="text" placeholder='Zipcode' />
                </div>

                <input type="text" placeholder='Phone' />
            </div>

            <div className="place-order-right">
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
                            <b>Rs.{cartTotal + Number(cartTotal === 0 ? "0" : "3")}</b>
                        </div>

                    </div>
                    <button>PROCEED TO PAYMENT</button>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder
