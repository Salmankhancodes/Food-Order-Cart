import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../CartContext'

const Product = ({ product }) => {
  const { cart, setCart } = useContext(CartContext)
  const [isAdding, setisAdding] = useState(false)
  const addToCart = (event, product) => {
    event.preventDefault()
    let _cart = { ...cart }

    if (!_cart.items) {
      _cart.items = {}
    }
    if (_cart.items[product._id]) {
      _cart.items[product._id] += 1
    } else {
      _cart.items[product._id] = 1
    }

    if (!_cart.total) {
      _cart.total = 0
    }

    _cart.total += 1
    setisAdding(true)
    setCart(_cart)
    setTimeout(() => {
      setisAdding(false)
    }, 1000)
  }
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
          <button
            disabled={isAdding}
            className={`${
              isAdding ? `bg-green-500` : `bg-yellow-500`
            } py-1 px-4 rounded-full font-bold`}
            onClick={(e) => {
              addToCart(e, product)
            }}
          >
            Add{isAdding ? `ed` : ``}
          </button>
        </div>
      </Link>
    </div>
  )
}

export default Product
