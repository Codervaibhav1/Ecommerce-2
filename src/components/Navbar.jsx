import React from 'react'
import Logo from '../assets/Screenshot 2023-11-20 220740.png'
import { ImCart } from "react-icons/im";
import { FaRegHeart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Navbar = () => {

  const {cartItem} = useSelector(state => state.cart)

  return (
  <nav className="navbar navbar-expand-lg shadow position-sticky top-0 z-1">
      <div className="container">
        <Link to={'/'} className="navbar-brand w-50 text-light" href="#">
         <img id="logo" src={Logo} alt="" />
        </Link>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-evenly w-100">
              <li className="nav-item">
              <Link to={'/electronics'} className="nav-a active text-decoration-none text-black" href="#">
               Electronics
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/register'} className="nav-a active text-decoration-none text-black" href="#">
               Jewelery
              </Link>
            </li>
              <li className="nav-item">
              <Link to={'/mens'} className="nav-a active text-decoration-none text-black" href="#">
                Men's
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/womens'} className="nav-a active text-decoration-none text-black" href="#">
                Women's
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/cart'} className="nav-a active btn btn-primary" href="#">
                <ImCart/>  ({cartItem.length})
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-a active btn btn-primary" href="#">
                <FaRegHeart/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar