import React from 'react'
import {menu_list} from '../../assets/assets'
import './exploreMenu.css'

const ExploreMenu = () => {
  return (
    <div className='explore-menu-contain'>
      <h1>Explore Our Menu</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nisi, pariatur inventore dolorum consectetur ducimus odio, distinctio, similique nam facere repudiandae perspiciatis illo laborum vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, fugiat?</p>
      <div className='menu-item-list'>
        {menu_list.map((item)=>{
            return(
                <div className='menu-item-content'>
                    <img src={item.menu_image} alt="" />
                    <p>{item.menu_name    }</p>
                </div>    
            )
        })}
      </div>
     
    </div>
  )
}

export default ExploreMenu
