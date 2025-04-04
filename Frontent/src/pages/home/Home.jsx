import React, { useState } from 'react'
import Hero from '../../components/hero/Hero'
import ExploreMenu from '../../components/exploreMenu/ExploreMenu'
import FoodDispaly from '../../components/foodDisplay/FoodDispaly'

const Home = () => {
  const [category , setCategory] = useState("All")
  return (
    <div>
      <Hero />
      <ExploreMenu category ={category} setCategory={setCategory} />
      <FoodDispaly category={category}/>
    </div>
  )
}

export default Home
