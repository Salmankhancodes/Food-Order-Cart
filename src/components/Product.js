import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <div>
      <Link to={`products/${product._id}`}>
        <img src={product.image} alt='pizza_image'></img>
        <div className='text-center'>
          <h2 className='text-lg font-bold py-2'>{product.name}</h2>
          <span className='bg-gray-200 py-1 rounded-full text-sm px-4'>
            {product.size}
          </span>
        </div>
        <div className='flex justify-between items-center mt-4'>
          <span>Rs {product.price}</span>
          <button className='bg-yellow-500 py-1 px-4 rounded-full font-bold'>
            Add to Cart
          </button>
        </div>
      </Link>
    </div>
  )
}

export default Product
