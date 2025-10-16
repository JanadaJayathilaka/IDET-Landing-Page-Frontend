import React from 'react'
import { Watch } from 'lucide-react';
const Footer = () => {
  return (
    <div className="flex justify-between bg-black text-white w-full px-5 py-5 flex-wrap">

         <div className=' flex flex-col w-full max-w-35 sm:max-w-45 lg:max-w-55 text-xl lg:text-2xl font-semibold items-center gap-2 cursor-pointer'>
             <Watch className='size-15 hidden lg:block'/>
            <h1 className='text-3xl ml-5'>Storm Watch</h1>
            <p className='text-[12px] ml-5 mt-45 mb-5 text-gray-500 hidden sm:flex'>Find strength in numbers. Making <br />progress as an athlete requires <br />accurate data and insights</p>
        </div>
        <div>
            <h1 className='text-preorder mb-5 font-semibold '>Storm</h1>
            <ul>
                <li className='mt-3'>Our Company</li>
                <li className='mt-3'>Our Story</li>
                <li className='mt-3'>Career</li>
                <li className='mt-3'>Site Map</li>
                <div>
                    <p>Documentation</p>
                </div>
                <li className='mt-10 flex items-end'></li>
            </ul>
        </div>
        <div>
          <ul>
                <li className='mt-3'>Our Company</li>
                <li className='mt-3'>Our Story</li>
                <li className='mt-3'>Career</li>
                <li className='mt-3'>Site Map</li>
                <div>
                    <p>Documentation</p>
                </div>
                <li className='mt-10 flex items-end'></li>
            </ul>
        </div>
        <div>
           <ul>
                <li className='mt-3'>Our Company</li>
                <li className='mt-3'>Our Story</li>
                <li className='mt-3'>Career</li>
                <li className='mt-3'>Site Map</li>
                <div>
                    <p>Documentation</p>
                </div>
                <li className='mt-10 flex items-end'></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer