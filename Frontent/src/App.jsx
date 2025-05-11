import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar'
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Footer from "./components/footer/Footer";
import LoginPupup from "./components/login-signup/LoginPupup";
import { useState } from "react";
import PlaceOrder from "./pages/placeorder/PlaceOrder";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin === true ? <LoginPupup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
