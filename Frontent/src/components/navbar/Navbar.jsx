
import { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/CreateContext'

export default function Navbar({setShowLogin}) {
    const [manu , setMenu] = useState("home")
    const { cartTotal } = useContext(StoreContext)
    const nevigate = useNavigate()
    return(
        <div>
            <div className="navbar">
                <img src={assets.logo} alt="" className="logo" onClick={(()=>nevigate('/'))} />
                <ul className="navbar-menu">
                    <Link to="/" onClick={()=>{setMenu("home")}} className={"home"==manu ?"active" :"" }>home</Link>
                    <a href='#explore-menu' onClick={()=>{setMenu("menu")}} className={"menu"==manu ?"active" :"" }>menu</a>
                    <a href="#mobile-app" onClick={()=>{setMenu("mobile-app")}} className={"mobile-app"==manu ?"active" :"" }>mobile-app</a>
                    <a href="#footer" onClick={()=>{setMenu("contact us")}} className={"contact us"==manu ?"active" :"" }>contact us</a>
                    {/* <a href="#footer" onClick={()=>{setMenu("contact us")}} className={"contact us"==manu ?"active" :"" }>contact us</a> */}
                    {/* <a href="#footer" onClick={()=>{setMenu("contact us")}} className={"contact us"==manu ?"active" :"" }>contact us</a> */}
                    {/* <a href="#footer" onClick={()=>{setMenu("contact us")}} className={"contact us"==manu ?"active" :"" }>contact us</a> */}
                    {/* <a href="#footer" onClick={()=>{setMenu("contact us")}} className={"contact us"==manu ?"active" :"" }>contact us</a> */}
                    {/* <a href="#footer" onClick={()=>{setMenu("contact us")}} className={"contact us"==manu ?"active" :"" }>contact us</a> */}
                    {/* <a href="#footer" onClick={()=>{setMenu("contact us")}} className={"contact us"==manu ?"active" :"" }>contact us</a> */}
                    {/* <a href="#footer" onClick={()=>{setMenu("contact us")}} className={"contact us"==manu ?"active" :"" }>contact us</a> */}
                    {/* <a href="#footer" onClick={()=>{setMenu("contact us")}} className={"contact us"==manu ?"active" :"" }>contact us</a> */}
                </ul>

                <div className="navbar-right">
                    <img src={assets.search_icon} alt="" />
                    <div className="cart-icon">
                    <Link to='/cart'>
                        <img src={assets.bag_icon} alt="" />
                        <div className={cartTotal===0 ? "" : "navbar-cart-dot"}></div>
                    </Link>
                    </div>
                    <button onClick={()=>setShowLogin(true)}>Sign IN</button>
                </div>
            </div>
        </div>
    )
}