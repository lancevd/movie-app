import React from 'react'
import TestimonialBox from './TestimonialBox'

const Testimonials = () => {
  return (
    <section id='testimonials' className='contain w-full'>
        <div className='flex flex-col lg:flex-row gap-3 lg:justify-between lg:items-center'>
            <h2 className='text-2xl lg:text-4xl xl:text-6xl font-ubuntu font-bold text-white'>What They Think About Our Services</h2>
            <p>The following are the opinion of customers who have used and experienced our services.</p>
        </div>
        <br />

        <TestimonialBox />
    </section>
  )
}

export default Testimonials