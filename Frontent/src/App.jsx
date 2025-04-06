import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar'
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
