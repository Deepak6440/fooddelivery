import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import {Route, Routes} from "react-router"
import { Home } from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Checkout from "./pages/Checkout/Checkout"
import Contactus from './pages/Contactus/Contactus'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  return (
    <>
    {showLoginForm? <LoginPopup setShowLoginForm={setShowLoginForm}/> : <> </>}
     <div className='app'>
      <Navbar LoginPopup={setShowLoginForm} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/cart' element={<Cart/> } />
        <Route path='/checkout' element={ <Checkout/> } />
        <Route path='/contact-us' element={<Contactus/>} />
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App