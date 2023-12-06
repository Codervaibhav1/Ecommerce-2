import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment, remove } from '../features/cartSlice/cartSlice';


const CartItem = ({ item }) => {
  console.log(item.quantity)
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment(item.id));
  };

  const handleDecrement = () => {
    dispatch(decrement(item.id));
  };
const handleRemove = () =>{
  dispatch(remove(item.id))
}
  return (
    <div className="col-7 my-3">
      <div className="card h-100 border border-white shadow">
        <div id='img-section' className='d-flex justify-content-center '>
          <img id='image' src={item.image} className="card-img-top p-2 shadow-sm" alt="..." />
        </div>
        <div className="card-body d-flex justify-content-between flex-column">
          <h5 className="card-title">{item.title}</h5>
          <span className='d-flex justify-content-between fw-bold'>
            <p className="card-text">$ {item.price}</p>
          </span>
          <p>Qty: {item.quantity}</p>
          <span>
            <button className='btn btn-primary' onClick={handleIncrement}>+</button>
            <button className='btn btn-danger mx-3' onClick={handleDecrement}>-</button>
            <button className='btn btn-danger mx-3 float-end' onClick={handleRemove}>Remove Item</button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
