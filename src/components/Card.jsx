import React from 'react'
import { useDispatch } from 'react-redux'
import { add} from '../features/cartSlice/cartSlice'

const Card = ({product}) => {
  
  const dispatch = useDispatch()
  const handleAdd = (item)=>{
    dispatch(add(item))
  }
  return (
    <div className="col ">
    <div className="card h-100 border border-white shadow">
      <div id='img-section' className='d-flex justify-content-center '>
      <img id='image' src={product.image} className="card-img-top p-2 shadow-sm" alt="..."/>
      </div>
      <div className="card-body d-flex justify-content-between flex-column">
        <h5 className="card-title">{product.title}</h5>
       <span className='d-flex justify-content-between fw-bold'>
       <p className="card-text">$ {product.price}</p>
        <button className='float-end btn btn-dark rounded-pill' onClick={()=>handleAdd(product)}>Add to Cart</button>
       </span>
      </div>
    </div>
  </div>
  )
}

export default Card