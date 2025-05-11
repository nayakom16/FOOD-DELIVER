import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, eligendi aut? Aperiam nam corrupti placeat, natus, nesciunt fugiat error praesentium quia delectus temporibus omnis! Ipsa, dicta commodi nostrum nobis et architecto quis, minus recusandae eos in, mollitia quaerat pariatur exercitationem quisquam animi aperiam voluptates sapiente iste earum veniam rem eligendi!</p>
                    <div className="footer-content-left-social">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>91+0000000000</li>
                        <li>contact@gmail.com</li>
                    </ul>
                </div>
            </div>

            <hr />
            <div className="footer-copyright">
                <p>COPYRIGHT 2025 &copy; TOMATO.COM - ALL RIGHT RESERVE </p>
            </div>
        </div>
    )
}

export default Footer
