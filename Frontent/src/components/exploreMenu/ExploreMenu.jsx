import React from 'react'
import {menu_list} from '../../assets/assets'
import './exploreMenu.css'

const ExploreMenu = ({category , setCategory}) => {
  return (
    <div className='explore-menu-contain' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nisi, pariatur inventore dolorum consectetur ducimus odio, distinctio, similique nam facere repudiandae perspiciatis illo laborum vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, fugiat?</p>
      <div className='menu-item-list'>
        {menu_list.map((item)=>{
            return(
                <div className='menu-item-content' key={item.menu_name} onClick={()=>{
                  setCategory(prev=>prev===item.menu_name ? "All" : item.menu_name)   
                }} >
                  <img src={item.menu_image} alt="" className={category===item.menu_name ? "active" : ""} />
                  <p>{item.menu_name}</p>
                </div> 
            )
        })}
        
        {/* <h1>{category}</h1> */}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
