import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './fooddisplayitem.css'

const FoodDisplayItem = ({ name, image, des, price }) => {
  const [itemCount, setItemCount] = useState(0)
  return (
    <div className='food-item'>
      <div className="food-item-image-container">
        <img src={image} alt="" />
        {!itemCount ?
          <img className='add' src={assets.add_icon_white} onClick={() => { setItemCount(prev => prev + 1) }} />
          :
          <div className='counter-add-sub'>
            <img className='red-remove' onClick={()=>{setItemCount(prev=>prev-1)}} src={assets.remove_icon_red} />
            <p className='counter-btn count-value'>{itemCount}</p>
            <img className='green-add' onClick={()=>{setItemCount(prev=>prev+1)}} src={assets.add_icon_green} />
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
