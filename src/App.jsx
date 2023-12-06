import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Pagenotfound from './pages/Pagenotfound'
import Cart from './pages/Cart'



const App = () => {
  return (
    <Router>
      <Navbar/>
      <div className="container mt-3">
        <Routes>
        <Route path='*' element={<Pagenotfound/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        
        </Routes>
      </div>
    </Router>
  )
}

export default App