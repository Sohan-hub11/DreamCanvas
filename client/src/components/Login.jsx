import React from 'react'
import { assets } from '../assets/assets'

const Login = () => {
  return (
    <div className='absolute top-0 bottom-0 left-0 right-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>

      <form className='relative bg-white rounded-xl p-10 text-slate-500'>
        <h1 className='text-2xl font-bold text-center mb-4 text-neutral-500'>Sign Up</h1>
        <p className='text-sm text-center'>Welcome Back! Please sign in to continue.</p>

        <div className='border px-6 py-2 flex items-center rounded-full mt-5 gap-2'>
          <img src={assets.profile_icon} alt="" width={30} />
          <input type="text" placeholder='Username' className='outline-none text-sm' required />
        </div>

        <div className='border px-6 py-2 flex items-center rounded-full mt-4 gap-2'>
          <img src={assets.email_icon} alt="" width={20} className='ml-1' />
          <input type="email" placeholder='Email' className='outline-none text-sm ml-1' required />
        </div>

        <div className='border px-6 py-2 flex items-center rounded-full mt-4 gap-2'>
          <img src={assets.lock_icon} alt="" width={15} className='ml-1' />
          <input type="password" placeholder='Password' className='outline-none text-sm ml-2' required />
        </div>

        <p className='text-sm text-blue-500 py-4 cursor-pointer'>Forgot password?</p>
      </form>

    </div>
  )
}

export default Login
