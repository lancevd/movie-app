import React from 'react';
import {MdPlayCircleFilled} from 'react-icons/md'
import SliderCarousel from '../Slider';

const Hero = () => {
  return (
    <div className='contain flex gap-6'>
        <div className='w-full md:w-1/2 p-4 md:pr-10 leading-8 lg:p-8 flex flex-col gap-4'>
            <div id="hl-greeting">
                <p className='lg:text-xl font-semibold'>Welcome</p>
                <div id='after'></div>
            </div>
            <h2 className='text-2xl md:text-3xl lg:text-6xl'>Let's Make Your Own Cinema</h2>
            <p id="hl-sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt non, reprehenderit voluptates blanditiis.</p>
            <div className='flex gap-4 '>
                <button className='w-1/2 h-12 md:text-lg border-[#DF3A3A] font-medium border-4 hover:text-xl '>Show Plan</button>
                <button className='w-1/2 h-12 md:text-lg border-[#DF3A3A] font-medium border-4 hover:text-xl bg-[#DF3A3A]'>Get Started</button>
            </div>
        </div>
        <div className='hidden w-1/2 pl-6 lg:flex lg:flex-col gap-3 justify-center items-center md:block'>
            <div id="hr-icon"><MdPlayCircleFilled /></div>
            <p>Watching Now</p>
        </div>
        
    </div>
  )
}

export default Hero