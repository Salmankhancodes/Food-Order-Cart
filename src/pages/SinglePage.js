import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'

const SinglePage = () => {
  const params = useParams()
  const history = useHistory()
  const [product, setProduct] = useState([])
  useEffect(() => {
    fetch(`/api/products/${params._id}`)
      .then((response) => response.json())
      .then((product) => {
        setProduct(product)
      })
  }, [params._id])
  return (
    <div className='container mx-auto mt-12'>
      <button
        className='mb-12 font-bold'
        onClick={() => {
          history.goBack()
        }}
      >
        Back
      </button>
      <div className='flex'>
        <img src={product.image} alt='single_pizza_image' />
        <div className='ml-16'>
          <h1 className='text-xl font-bold'>{product.name}</h1>
          <div className='text-md'>{product.size}</div>
          <div className='font-bold mt-2'>Rs.{product.price}</div>
          <button className='bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default SinglePage
