import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <div className='flex flex-col justify-center items-center py-12 my-20'>

      <h1 className='text-3xl md:text-4xl font-semibold mb-2'>Customer Testimonials</h1>

      <p className='text-neutral-600 mb-12'>Hear what our satisfied customers are saying.</p>

      <div className='flex flex-wrap gap-6'>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className='rounded-lg shadow-md w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all duration-300 p-12'>
            <div className='flex flex-col items-center'>
              <img src={testimonial.image} alt={testimonial.name} className='w-14 rounded-full' />
              <p className='text-lg font-semibold mt-3'>"{testimonial.name}"</p>
              <p className='text-gray-500 mb-4'>{testimonial.role}</p>
              <div className='flex mb-4'>
                {Array(testimonial.stars).fill('').map((item, index) => (
                  <img src={assets.rating_star} alt="" className='w-4' key={index} />
                ))}
              </div>

              <p className='text-center text-gray-600 text-sm'>{testimonial.text}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Testimonials
