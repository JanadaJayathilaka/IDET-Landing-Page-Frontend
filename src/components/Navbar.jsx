import {React,useState} from 'react'
import { Watch, Menu,X} from 'lucide-react';
const Navbar = () => {

    const [open,setOpen] = useState(false)
  return (
    <div className='flex pt-5 px-2 sm:px-5 lg:px-10 justify-between items-center'>
        {/* header logo section */}
        <div className=' flex w-full max-w-35 sm:max-w-45 lg:max-w-55 text-xl lg:text-2xl font-semibold items-center gap-2  bg-red-300'>
             <Watch className='size-8 hidden lg:block'/>
            <h1>Storm Watch</h1>
        </div>

        <div>
            <button onClick={() => setOpen(!open)} className='sm:hidden'>{open ? (<X/>):(<Menu/>)} </button>
        </div>
        {/* header menu section */}
        {open ? (
            <ul className='flex flex-col sm:hidden absolute top-14 w-full text-center gap-2 bg-white shadow-lg rounded-lg p-4'> 
            <li>Home</li> 
            <li>Brand Experience</li>
            <li>User Manual</li>
             <li>Guarantee</li>
              <li>Contact Us</li> 
              </ul>): ("")}
        <ul className='hidden sm:flex items-center justify-end w-full gap-8 '>
            <li>Home</li>
            <li>Brand Experience</li>
            <li>User Manual</li>
            <li>Guarantee</li>
            <li>Contact Us</li>
        </ul>
    </div>
  )
}

export default Navbar