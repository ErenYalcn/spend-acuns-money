import React from 'react'

export const Product = ({product, basket, setBasket, money, total}) => {
    
    const basketItem = basket.find(item => item.id === product.id);

    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id);

        if(checkBasket){
            checkBasket.amount += 1;
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket]);

        }else{
            setBasket([...basket, {
                id: product.id,
                amount : 1
            }])
        }
    }

    const removeBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id);

        if(checkBasket.amount > 1){
            checkBasket.amount -= 1;
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket]);

        }else{
            setBasket(basket.filter(item => item.id !== product.id));
        }
    }


  return (
    <div>
        <div className='flex flex-col items-center bg-slate-50 m-2 rounded-md'>
            <img className='w-44 h-[140px] object-contain p-2 mb-4 mt-4' src={product.image} />
            <h5 className='font-bold text-xl'>{product.title}</h5>
            <p className='font-semibold text-lg text-amber-600'>{product.price}₺</p>
            <div className='md:flex grid gap-x-10 items-center w-full my-4 p-2'>
            <button disabled={!basketItem} onClick={removeBasket} className='md:flex-1 bg-blue-500 rounded-lg p-1 text-white hover:bg-opacity-90 disabled:bg-gray-400'>Sat</button>
                <span className='text-center '>{basketItem && basketItem.amount || 0}</span>
                <button disabled={total + product.price > money} onClick={addBasket} className='md:flex-1 bg-orange-500 rounded-lg p-1 text-white hover:bg-opacity-90 whitespace-nowrap disabled:bg-gray-400'>Satın Al</button>
            </div>
        </div>
    </div>
  )
}
