import React from 'react'

const WatchCard = ({img, title, price, description1, description2,description3}) => {
  return (
    <div className='text-center sm:w-[33%]'>
                    <img src={img} alt="" className='mb-5' />
                    <h1 className='text-2xl font-semibold'>{title}</h1>
                    <p className='text-preorder text-2xl'>{price}</p>
                    <p className='text-center text-[12px] sm:text-[15px]'>{description1}<br/>{description2}<br/>{description3}</p>
                </div>
  )
}

export default WatchCard