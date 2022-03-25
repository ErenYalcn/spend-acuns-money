import React from 'react'

export default function BasketItem({item, product}) {
  return (
    <div>
        {product.title}  <span className='text-orange-500'>x {item.amount}</span>
    </div>
  )
}
