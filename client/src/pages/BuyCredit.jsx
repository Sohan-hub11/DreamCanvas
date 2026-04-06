import React from 'react'
import { assets, plans } from '../assets/assets'

const BuyCredit = () => {
  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10'>
      <button className='border border-gray-400 bg-blue-500 hover:bg-blue-600 text-white px-9 py-3 rounded-full mb-6 transform hover:scale-110 transition duration-300'>Our Plan</button>
      <h1 className='text-center text-3xl font-medium mb-6 sm:mb-10'>Choose Your Plan</h1>

      <div>
        {plans.map((plan, index) => (
          <div key={index}>
            <img src={assets.logo_icon} alt="" />
            <p>{plan.id}</p>
            <p>{plan.desc}</p>
            <p>₹{plan.price} / {plan.credits} credits</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BuyCredit
