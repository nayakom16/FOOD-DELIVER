
import { useContext } from 'react';
import { StoreContext } from '../../context/CreateContext'
import FoodDisplayItem from '../foodDisplayItem/FoodDisplayItem';
import "./fooddisplay.css"

const FoodDispaly = ({category}) => {
  const {food_list} = useContext(StoreContext)
  // console.log(food_list);

  

  return (
    <div className="food-Display">
      <h1>Top Dishes Near You</h1>
      <div className="food-Display-Container">
        {food_list.map((item, index) => {
          // console.log(category , item.category);
          if (category==="All" || category === item.category) {
            return <FoodDisplayItem key={index} id={item._id} name={item.name} image={item.image} des={item.description} price={item.price} />
          }
          // return <FoodDisplayItem key={index} id={item._id} name={item.name} image={item.image} des={item.description} price={item.price} />
        })}
      </div>
    </div>
  )
}

export default FoodDispaly
