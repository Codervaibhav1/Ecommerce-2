import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'

const Cart = () => {

    const {cartItem} = useSelector(state => state.cart)
    const total = cartItem.reduce((p , c)=>{
      return p + c.price * c.quantity
    } ,0)


  return (
    <div className='row'>
    <div className='col-8'>
        {
            cartItem.map(item => <CartItem key={item.id} item={item}/>)
        }
    </div>
    <div id='total' className="card col-4 p-5" >
  <div className="card-body">
    <h5 className="card-title text-center fw-bold">Total Amount</h5>
    <p className="card-text text-center">${+total}</p>
    <button className='btn btn-primary w-100'>Pay Now</button>
  </div>
</div>
    </div>
  )
}

export default Cart
