import React from 'react'
import BasketItem from './BasketItem'
import { Formatter } from 'Formatter'


export default function Basket({basket, products, total, emptyBasket}) {
  return (
      
    <div className='m-auto w-fit p-6 rounded-xl bg-white mt-8'>
        <h5 className='text-xl font-semibold'>Sepet 🛒</h5>
        <div>
            <p>Toplam: {Formatter(total)}</p>
        </div>
        {basket.map(item => (
            <BasketItem product={products.find(p => p.id === item.id)} item={item} />
        ))}

        <button onClick={emptyBasket} className='md:flex-1 bg-orange-500 rounded-lg p-2 text-white hover:bg-opacity-90 whitespace-nowrap mt-4'>Sepeti Sıfırla</button>

    </div>
  )
}
