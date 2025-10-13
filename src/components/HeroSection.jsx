import React from 'react'
import heroImage from '../assets/hero-image.jpg'
import batteryImage from '../assets/battery-image.jpg'
import thirdHero from '../assets/thirdhero.png'
import { HeartPulse,Activity, Wind,Bed} from 'lucide-react'


const HeroSection = () => {
  return (
    <div className='p-8 md:p-15 bg-background-primary flex flex-col justify-center '>
        {/* first hero section */}
        <div className='text-center '>
            <h3 className='text-[15px] md:text-2xl lg:text-3xl font-semibold text-preorder'>Smart Watch</h3>
            <h1 className='text-2xl md:text-4xl lg:text-6xl font-semibold text-white'>STORM PRO</h1>
        </div>
        <img src={heroImage} alt="hero image" />

        {/* second hero section */}
        <div className='flex flex-col md:flex-row items-center justify-between w-full mt-10 '>
            <div className='bg-red-200 sm:max-w-[50%] mb-5 w-full'>
                <img src={batteryImage} alt="battery image"  />
            </div>
            <div className='md:max-w-[50%]'>
                <h2 className='text-white text-2xl md:text-4xl lg:text-5xl font-semibold text-center md:text-start'>Battery life for days</h2>
                <p className='text-white my-8 text-center md:text-start'>When you're on the second day of a backpacking trip, the final leg of a triathlon, or diving along a coral reef, the last thing you want to think about is running out of battery. With longer battery life than ever, you can take on almost anything and have energy to spare.</p>
                <div className='flex w-full'>
                    <div className=" w-full">
                        <p className='text-white text-[15px] md:text-xl'>upto</p>
                        <p className='text-preorder text-2xl md:text-4xl font-semibold'>36 hours</p>
                        <p className='text-white md:text-xl'>of normal use</p>
                    </div>
                    <div className='w-full'>
                        <p className='text-white text-[15px] md:text-xl'>upto</p>
                        <p className='text-preorder text-2xl md:text-4xl font-semibold '>60 hours</p>
                        <p className='text-white text-[13px] mt-0.5 md:text-[16px] lg:text-xl'>on low power settings</p>
                    </div>
                </div>
               
            </div>

        </div>

        {/* third hero section */}
        <div className='mt-25'>
            <h1 className='text-white text-center text-2xl md:text-4xl font-family-pop'>Powerful <span className='text-preorder '>health</span> Features</h1>
            <div className='flex md:flex-row flex-col justify-between mt-20 '>
                <div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-3'>
                            <HeartPulse className='text-red-500 bg-gray-900 rounded-full'/>
                             <p className='text-white w-full text-xl font-semibold'>Heart Health Notifications</p>
                        </div>
                        
                       
                        <p className='text-white'>
                            Receive notifications of unusually high or low heart rates and irregular heart rhythms.
                        </p>
                    </div>
                    <div className='flex flex-col gap-3  mt-15 md:mt-35 '>
                        <div className='flex gap-3'>
                            <Activity  className='text-green-500'/>
                             <p className='text-white w-full text-xl font-semibold'>ECG</p>
                        </div>
                        
                       
                        <p className='text-white'>
                            The ECG app can record your heartbeat and rhythm using the electrical heart sensor.
                        </p>
                    </div>
                </div>

                <div className='max-w-[90%] md:max-w-[33%]  w-full flex justify-center items-center'>
                    <img src={thirdHero} alt="third hero" className=' size-85 ' />

                </div>
                
                <div>
                   <div className='flex flex-col gap-3'>
                        <div className='flex gap-3'>
                            <Wind  className='text-blue-500'/>
                             <p className='text-white w-full text-xl font-semibold'>Blood Oxygen</p>
                        </div>
                        
                       
                        <p className='text-white'>
                            Get readings of your blood oxygen for Insights into an important indicator of your overall wellness.
                        </p>
                    </div>
                    <div className='flex flex-col gap-3  mt-15 md:mt-39 lg:mt-35'>
                        <div className='flex gap-3'>
                            <Bed  className='text-orange-500'/>
                             <p className='text-white w-full text-xl font-semibold'>Sleep Tracking</p>
                        </div>
                        
                       
                        <p className='text-white'>
                            Keep track of your sleep. See how much time you spend in three sleep stages: REM, Core, and Deep.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className='mt-30 flex text-white'>
            <h1 className='text-3xl w-[50%]'>Designed for Versatility performance and</h1>
            <p className='w-[50%] text-gray-300'>Find strength in numbers. Making progress as an athlete requires accurate data and insights. Updates to the workout app like new metrics and views give you all the information you need to be and best your best</p>
        </div>


    </div>
  )
}

export default HeroSection