import React from 'react'
import back from '../assets/ecom1-removebg-preview.png'
import ProductCard from '../components/ProductCard'
const Home = () => {
  return (
    <>
    <div className='row p-3' id='hero-section'>
       <div className='col-6 d-flex justify-content-center align-item-center flex-column fw-bold'>
      <p className='fs-1 animate__animated animate__bounce'>Click. Shop. Smile.</p>
      <h5 className=''>Your Wishes, Our Deals</h5>
      <button className='btn btn-primary w-50 rounded-pill'>Shop Now</button>
       </div>
       <div id='hero-img' className='col-6 py-5'>
       <img id='hero' src={back} alt="" />
       </div>
    </div>
    <ProductCard/>
    </>
  )
}

export default Home