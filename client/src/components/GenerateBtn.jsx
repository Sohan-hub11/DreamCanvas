import React from 'react'
import { assets } from '../assets/assets'

const GenerateBtn = () => {
  return (
    <div className='pb-6 text-center'>
      <h1 className='text-2xl md:text-3xl sm:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16'>See the magic. Try now</h1>

      <button className='bg-black inline-flex item-center hover:scale-105 text-white m-auto gap-2 py-3 px-12 rounded-full transition-all duration-500'>
        Generate Images
        <img src={assets.star_group} className="h-6 ml-2" alt="" />
      </button>
    </div>
  )
}

export default GenerateBtn