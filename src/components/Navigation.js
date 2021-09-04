import React from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'
import { useContext } from 'react'

const Navigation = () => {
  const { cart } = useContext(CartContext)
  const cartStyle = {
    background: '#F59E0D',
    display: 'flex',
    padding: '6px 12px',
    borderRadius: '50px',
  }

  return (
    <div>
      <nav className='container mx-auto flex items-center justify-between py-4'>
        <Link to='/'>
          <img style={{ height: 45 }} src='/images/logo.png' alt='logo' />
        </Link>

        <ul className='flex items-center'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li className='ml-6'>
            <Link to='/products'>Products</Link>
          </li>
          <li className='ml-6'>
            <Link to='/cart'>
              <div style={cartStyle} className='container flex'>
                <span className='text-black className="ml-6"'>
                  {cart.total ? cart.total : 0}
                </span>
                <img className='ml-2' src='images/cart.png' alt='cart-black' />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
