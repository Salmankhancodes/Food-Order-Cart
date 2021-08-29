import React from 'react'

const Product = (props) => {
  const { product } = props
  return (
    <div>
      <img src='\images\pizza.png'></img>
      <div className='text-center'>
        <h2 className='text-lg font-bold py-2'>{product.companyname}</h2>
        <span className='bg-gray-200 py-1 rounded-full text-sm px-4'>
          Medium
        </span>
      </div>
      <div className='flex justify-between items-center mt-4'>
        <span>RS {product.noofrounds}00</span>
        <button className='bg-yellow-500 py-1 px-4 rounded-full font-bold'>
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default Product
