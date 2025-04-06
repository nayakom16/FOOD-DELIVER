
import { useContext } from 'react'
import { assets } from '../../assets/assets'
import './fooddisplayitem.css'
import { StoreContext } from '../../context/CreateContext'

const FoodDisplayItem = ({id, name, image, des, price }) => {
 
  const {cartItem,addToCart,removeFromCart} = useContext(StoreContext)

  return (
    <div className='food-item'>
      <div className="food-item-image-container">
        <img src={image} alt="" />
        {!cartItem[id] ?
          <img className='add' src={assets.add_icon_white} onClick={()=>addToCart(id)} />
          :
          <div className='counter-add-sub'>
            <img className='red-remove' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} />
            <p className='counter-btn count-value'>{cartItem[id]}</p>
            <img className='green-add' onClick={()=>addToCart(id)} src={assets.add_icon_green} />
          </div>
        }
      </div>

      <div className="food-item-name-rating">
        <h4>{name}</h4>
        <img src={assets.rating_starts} alt="" />
      </div>
      <p className="food-item-des">{des}</p>
      <span className="food-item-pricing">Rs.{price}</span>
    </div>
  )
}
export default FoodDisplayItem
