import React from 'react'

import { Formatter } from 'Formatter'

export const Header = ({money, total}) => {
  return (
    <div className=' mb-8 sticky top-0 bg-gradient-to-r from-green-400 to-blue-500'>
            <p className='text-4xl text-white text-center font-semibold m-auto p-2 lining-nums'>{Formatter(money-total)}</p>
    </div>
  )
}
