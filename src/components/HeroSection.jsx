import React from "react";
import heroImage from "../assets/hero-image.jpg";
import batteryImage from "../assets/battery-image.jpg";
import thirdHero from "../assets/thirdhero.png";
import sec41 from "../assets/sec4-i1.png";
import sec42 from "../assets/sec4-2.png";
import sec43 from "../assets/sec4-3.png";
import sec51 from "../assets/sec51.jpg";
import sec6 from "../assets/sec6.webp";
import { HeartPulse, Activity, Wind, Bed, CircleCheck } from "lucide-react";
import WatchCard from "./WatchCard";

const HeroSection = () => {
  return (
    <div className="p-8 md:p-15 bg-background-primary flex flex-col justify-center ">
      {/* first hero section */}
      <div className="text-center ">
        <h3 className="text-[15px] md:text-2xl lg:text-3xl font-semibold text-preorder">
          Smart Watch
        </h3>
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold text-white">
          STORM PRO
        </h1>
      </div>
      <img src={heroImage} alt="hero image" className="w-full h-[200px] sm:h-auto" />

      {/* second hero section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full mt-10 ">
        <div className=" sm:max-w-[50%] mb-5 w-full">
          <img src={batteryImage} alt="battery image" />
        </div>
        <div className="md:max-w-[50%]">
          <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-semibold text-center md:text-start">
            Battery life for days
          </h2>
          <p className="text-white my-8 text-center md:text-start">
            When you're on the second day of a backpacking trip, the final leg
            of a triathlon, or diving along a coral reef, the last thing you
            want to think about is running out of battery. With longer battery
            life than ever, you can take on almost anything and have energy to
            spare.
          </p>
          <div className="flex w-full">
            <div className=" w-full">
              <p className="text-white text-[15px] md:text-xl">upto</p>
              <p className="text-preorder text-2xl md:text-4xl font-semibold">
                36 hours
              </p>
              <p className="text-white md:text-xl">of normal use</p>
            </div>
            <div className="w-full">
              <p className="text-white text-[15px] md:text-xl">upto</p>
              <p className="text-preorder text-2xl md:text-4xl font-semibold ">
                60 hours
              </p>
              <p className="text-white text-[13px] mt-0.5 md:text-[16px] lg:text-xl">
                on low power settings
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* third hero section */}
      <div className="mt-25">
        <h1 className="text-white text-center text-2xl md:text-4xl font-family-pop">
          Powerful <span className="text-preorder ">health</span> Features
        </h1>
        <div className="flex md:flex-row flex-col justify-between mt-20 ">
          <div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <HeartPulse className="text-red-500 bg-gray-900 rounded-full" />
                <p className="text-white w-full text-xl font-semibold">
                  Heart Health Notifications
                </p>
              </div>

              <p className="text-white">
                Receive notifications of unusually high or low heart rates and
                irregular heart rhythms.
              </p>
            </div>
            <div className="flex flex-col gap-3  mt-15 md:mt-35 ">
              <div className="flex gap-3">
                <Activity className="text-green-500" />
                <p className="text-white w-full text-xl font-semibold">ECG</p>
              </div>

              <p className="text-white">
                The ECG app can record your heartbeat and rhythm using the
                electrical heart sensor.
              </p>
            </div>
          </div>

          <div className="max-w-[90%] md:max-w-[33%]  w-full flex justify-center items-center">
            <img src={thirdHero} alt="third hero" className=" size-85 " />
          </div>

          <div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <Wind className="text-blue-500" />
                <p className="text-white w-full text-xl font-semibold">
                  Blood Oxygen
                </p>
              </div>

              <p className="text-white">
                Get readings of your blood oxygen for Insights into an important
                indicator of your overall wellness.
              </p>
            </div>
            <div className="flex flex-col gap-3  mt-15 md:mt-39 lg:mt-35">
              <div className="flex gap-3">
                <Bed className="text-orange-500" />
                <p className="text-white w-full text-xl font-semibold">
                  Sleep Tracking
                </p>
              </div>

              <p className="text-white">
                Keep track of your sleep. See how much time you spend in three
                sleep stages: REM, Core, and Deep.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 sm:mt-30 flex text-white">
        <h1 className=" text-xl sm:text-3xl w-[50%] ">
          Designed for Versatility performance and
        </h1>
        <p className="text-[13px] sm:text-[15px] w-[50%] text-gray-300">
          Find strength in numbers. Making progress as an athlete requires
          accurate data and insights. Updates to the workout app like new
          metrics and views give you all the information you need to be and best
          your best
        </p>
      </div>

      {/* 4th hero section  */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-10 text-white ">
        <WatchCard
          img={sec41}
          title="Alphine Loop"
          price="$ 1,900"
          description1="Customized your best performance, this"
          description2="cutting edge Storm Connected Watch "
          description3="pushes the boundaries of technology"
        />
        <WatchCard
          img={sec42}
          title="Ocean Band"
          price="$ 1,999"
          description1="A new dimension in watchmaking,this cutting"
          description2="edge band is designed for the adventurous"
          description3="at heart."
        />
        <WatchCard
          img={sec43}
          title="Trail Loop"
          price="$ 2,075"
          description1="Built for the outdoors, this band is"
          description2="durable and ready for any adventure."
          description3="Connected watch s as luxurious as ever"
        />
      </div>

      {/* 5th section  */}
      <div className="text-white flex mt-30 justify-between lg::ml-10 ml-0">
        <div className="md:w-[50%] w-full">
          <h1 className="md:text-3xl ml-8 text-[20px]">
            The last delivery you <br /> need to stay home for:
          </h1>
          <div className="flex items-center ml-8">
            <img src={sec51} alt="" className="mt-7 w-[20%] rounded" />
            <p className="mt-7 items-center ml-5">
              Storm Watch - The first smart watch <br />
              <span className="text-[12px]">Worry free parcel deliveries</span>
            </p>
          </div>
          <div className="mt-6 md:mt-10 lg:mt-15 ml-8 md:text-[15px] text-[12px] lg:text-xl xl:text-xl">
            <p className="flex gap-2 md:mt-2 lg:mt-4">
              <span>
                <CircleCheck className="text-preorder" />
              </span>
              Starts shipping October 2022
            </p>
            <p className="flex gap-2 mt-3 md:mt-2 lg:mt-4">
              <span>
                <CircleCheck className="text-preorder" />
              </span>
              Pick up your items easily and safely
            </p>
            <p className="flex gap-2 mt-3 md:mt-2 lg:mt-4">
              <span>
                <CircleCheck className="text-preorder" />
              </span>
              Get 3% Daily Cash back. All up front
            </p>
            <p className="flex gap-2 mt-3 md:mt-2 lg:mt-4">
              <span>
                <CircleCheck className="text-preorder" />
              </span>
              Cancel anytime, money back
            </p>
            <p className="flex gap-2  mt-3 md:mt-2 lg:mt-4">
              <span>
                <CircleCheck className="text-preorder" />
              </span>
              Be the first with a Storm Watch
            </p>
            <button className="bg-preorder text-black mt-8 px-4 py-3 shadow shadow-black font-semibold ">
              Pre-order Storm Watch- $1900
            </button>
          </div>
        </div>
        <div>
          <img src={sec43} alt="" className="lg:mr-50 hidden md:flex " />
        </div>
      </div>

      {/* get your smart watch section  */}
      <div className="relative w-full -p-8">
        <img src={sec6} alt="" className="mt-10 relative opacity-60 w-full h-45"/>
        <div className="absolute top-1/4 lg:left-1/7 xl:left-1/6 md:left-1/5 left-1/7 sm: text-center">
            <h1 className="text-white text-2xl md:text-4xl lg:text-6xl font-semibold">Get your smart Watch Now</h1>
            <p className="mt-2 md:mt-4 text-[10px] text-white">Get a 3% cashback, only for Pre-order</p>
            <button className="bg-preorder  mt-2 px-3 py-2 md:mt-10 font-semibold">Pre Order</button>
        </div>
        
      </div>
    </div>
  );
};

export default HeroSection;
