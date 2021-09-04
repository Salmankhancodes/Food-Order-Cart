import React, { useEffect, useState } from 'react'
import { CartContext } from '../CartContext'
import { useContext } from 'react'
const Cart = () => {
  const [products, setProducts] = useState([])
  const { cart, setCart } = useContext(CartContext)

  useEffect(() => {
    if (!cart.items) {
      return
    }
    fetch('/api/products/cart-items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.keys(cart.items)),
    })
      .then((response) => response.json())
      .then((products) => {
        setProducts(products)
      })
  }, [cart])

  const getQty = (productId) => {
    return cart.items[productId]
  }

  const Incement = (productID) => {
    const existingQty = cart.items[productID]
    const _cart = { ...cart }
    _cart.items[productID] = existingQty + 1
    _cart.total += 1
    setCart(_cart)
  }

  const Decrement = (productID) => {
    if (cart.items[productID] === 1) return

    const existingQty = cart.items[productID]
    const _cart = { ...cart }
    _cart.items[productID] = existingQty - 1
    _cart.total -= 1
    setCart(_cart)
  }

  return (
    <div className='container mx-auto lg:w-1/2 w-full pb-24'>
      <h1 className='my-12 font-bold'> Cart Items</h1>
      <ul>
        {products.map((product) => {
          return (
            <li className='mb-12'>
              <div className='flex item-center justify-between'>
                <div className='flex item-center'>
                  <img src={product.image} alt='cart_item' className='h-16' />
                  <span className='font-bold ml-4 w-48'> {product.name}</span>
                </div>
                <div>
                  <button
                    onClick={() => {
                      Decrement(product._id)
                    }}
                    className='bg-yellow-500 px-4 py-2 rounded-full leading-none'
                  >
                    -
                  </button>
                  <b className='px-4'>{getQty(product._id)}</b>
                  <button
                    onClick={() => {
                      Incement(product._id)
                    }}
                    className='bg-yellow-500 px-4 py-2 rounded-full leading-none'
                  >
                    +
                  </button>
                </div>
                <span>Rs {product.price}</span>
                <button className='bg-red-500 px-4 py-2 rounded-full leading-none text-white'>
                  Delete
                </button>
              </div>
            </li>
          )
        })}
      </ul>
      <hr className='my-6' />
      <div className='text-right'>
        <b>Grand Total:</b> Rs 1200
      </div>
      <div className='text-right mt-6'>
        <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>
          Order Now
        </button>
      </div>
    </div>
  )
}

export default Cart
