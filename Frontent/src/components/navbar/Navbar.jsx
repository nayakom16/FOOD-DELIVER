
import { useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'

export default function Navbar({setShowLogin}) {
    const [manu , setMenu] = useState("home")
    return(
        <div>
            <div className="navbar">
                <img src={assets.logo} alt="" className="logo" />
                <ul className="navbar-menu">
                    <li onClick={()=>{setMenu("home")}} className={"home"==manu ?"active" :"" }>home</li>
                    <li onClick={()=>{setMenu("menu")}} className={"menu"==manu ?"active" :"" }>menu</li>
                    <li onClick={()=>{setMenu("mobile-app")}} className={"mobile-app"==manu ?"active" :"" }>mobile-app</li>
                    <li onClick={()=>{setMenu("contact us")}} className={"contact us"==manu ?"active" :"" }>contact us</li>
                </ul>

                <div className="navbar-right">
                    <img src={assets.search_icon} alt="" />
                    <div>
                        <img src={assets.bag_icon} alt="" />
                        <div className="navbar-cart-dot"></div>
                    </div>
                    <button onClick={()=>setShowLogin(true)}>Sign IN</button>
                </div>
            </div>
        </div>
    )
}