import React, { useEffect } from 'react'
import Card from '../components/Card'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../features/shopSlice/productSlice'


const ProductCard = () => {
const dispatch = useDispatch()
useEffect(()=>{
   dispatch(getData())
},[])
  const {products ,isLoading} = useSelector(state => state.products)
      if(isLoading){
        return(
          <div className="load">
            <div className="loader"></div>
          </div>
        )
      }
  return (
    <div>
      <h1 className='text-center fw-bold mb-4'>All Category</h1>
        <div className="row row-cols-1 row-cols-md-4 g-4">
      {
        products.map(product => <Card key={product.id} product={product}/>)
      }
  </div>
</div>
  )
}

export default ProductCard