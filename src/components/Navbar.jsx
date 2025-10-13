import {React,useState} from 'react'
import { Watch, Menu,X} from 'lucide-react';
const Navbar = () => {

    const [open,setOpen] = useState(false)
  return (
    <div className='flex py-5 px-2 sm:px-5 font-family-sans lg:px-10 justify-between items-center bg-background-primary text-white '>
        {/* header logo section */}
        <div className=' flex w-full max-w-35 sm:max-w-45 lg:max-w-55 text-xl lg:text-2xl font-semibold items-center gap-2 cursor-pointer'>
             <Watch className='size-8 hidden lg:block'/>
            <h1>Storm Watch</h1>
        </div>

        <div>
            <button onClick={() => setOpen(!open)} className='sm:hidden'>{open ? (<X/>):(<Menu/>)} </button>
        </div>
        {/* header menu section */}
        {open ? (
            <ul className='flex flex-col sm:hidden absolute top-16 right-0 sm:right-1.5  w-full text-center gap-2 bg-background-primary shadow-lg rounded-lg py-4 '> 
            <li className='hover:bg-gray-800 transition-all duration-200 cursor-pointer' onClick={()=>{console.log("clicked")}}>Home</li> 
            <li className='hover:bg-gray-800 transition-all duration-200 cursor-pointer'>Brand Experience</li>
            <li className='hover:bg-gray-800 transition-all duration-200 cursor-pointer'>User Manual</li>
             <li className='hover:bg-gray-800 transition-all duration-200 cursor-pointer'>Guarantee</li>
              <li className='hover:bg-gray-800 transition-all duration-200 cursor-pointer'>Contact Us</li> 
              <li className='hover:scale-110 transition-all duration-200'><button className='bg-preorder  text-black py-3 px-3 font-semibold text-xs' >Pre-Order-$1900</button></li>
              </ul>): ("")}
        <ul className='hidden sm:flex items-center justify-end w-full gap-8 '>
            <li className='hover:scale-110 transition-all duration-300'>Home</li>
            <li className='hover:scale-110 transition-all duration-300'>Brand Experience</li>
            <li className='hover:scale-110 transition-all duration-300'>User Manual</li>
            <li className='hover:scale-110 transition-all duration-300'>Guarantee</li>
            <li className='hover:scale-110 transition-all duration-300'>Contact Us</li>
            <li className='hover:scale-110 transition-all duration-300'><button className='bg-preorder text-black py-3 px-3 font-semibold text-xs' >Pre-Order-$1900</button></li>
            
        </ul>

        
    </div>
  )
}

export default Navbar