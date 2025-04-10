import React from 'react'
import "./loginpupup.css"
import { useState } from 'react'
import { assets } from '../../assets/assets'

const LoginPupup = ({setShowLogin}) => {
    const[currentState, setCurrentState] = useState("Login")

    const handleSubmit = (e) => {
        e.preventDefault()
        
    }

  return (
    <div className='loginpupup'>
        <div className="loginpupup-container">
            <div className="loginpupup-header">
                <h1>{currentState}</h1>
                <button className='close' onClick={()=>setShowLogin(false)}><img src={assets.cross_icon} alt="" /></button>
            </div>
            <form className="loginpupup-form" onSubmit={handleSubmit}>
                {currentState === "Login" ? <></> : <input type="text" placeholder='Your Name' /> }
                <input type="text" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <button>{currentState === "Login" ? "Log In" : "Create Account"}</button>
            </form>

            {currentState === "Login" 
             ? <p className='stetechange'>Create an account <span onClick={()=>setCurrentState("Sign Up")}>click here</span></p>
             : <p className='stetechange'>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login</span></p>
            }
        </div>
      
    </div>
  )
}

export default LoginPupup
