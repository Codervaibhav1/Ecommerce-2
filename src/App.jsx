import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Pagenotfound from './pages/Pagenotfound'
import Cart from './pages/Cart'
import Electronics from './pages/Electronics'
import Mens from './pages/Mens'
import Womens from './pages/Womens'


const App = () => {
  return (
    <Router>
      <Navbar/>
      <div className="container mt-3">
        <Routes>
        <Route path='*' element={<Pagenotfound/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/Electronics' element={<Electronics/>}/>
        <Route path='/Mens' element={<Mens/>}/>
        <Route path='/Womens' element={<Womens/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App