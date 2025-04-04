import React, { useState } from 'react'
import Hero from '../../components/hero/Hero'
import ExploreMenu from '../../components/exploreMenu/ExploreMenu'

const Home = () => {
  const [category , setCategory] = useState("All")
  return (
    <div>
      <Hero />
      <ExploreMenu category ={category} setCategory={setCategory} />
    </div>
  )
}

export default Home
