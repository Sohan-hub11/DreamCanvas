import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/appContextProvider'

const Login = () => {

  const [state, setState] = useState('Login');
  const {setShowLogin} = useContext(AppContext);

  useEffect(() => {
      document.body.style.overflow = 'hidden';

      return () => {
          document.body.style.overflow = 'unset';
      }
  },[])

  return (
    <div className='absolute top-0 bottom-0 left-0 right-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>

      <form className='relative bg-white rounded-xl p-10 text-slate-500'>
        {state === 'Login' ? (<h1 className='text-2xl font-bold text-center mb-4 text-neutral-500'>Login</h1>) : (<h1 className='text-2xl font-bold text-center mb-4 text-neutral-500'>Sign Up</h1>)}

        {state === 'Login' ? (<p className='text-sm text-center'>Welcome Back! Please login to continue.</p>) : (<p className='text-sm text-center mb-4 text-neutral-500'>Create an account to get started.</p>)}
        

        {state !== 'Login' && (
          <div className='border px-6 py-2 flex items-center rounded-full mt-5 gap-2'>
            <img src={assets.profile_icon} alt="" width={30} />
            <input type="text" placeholder='Username' className='outline-none text-sm' required />
          </div>
        )}

        <div className='border px-6 py-2 flex items-center rounded-full mt-4 gap-2'>
          <img src={assets.email_icon} alt="" width={20} className='ml-1' />
          <input type="email" placeholder='Email' className='outline-none text-sm ml-1' required />
        </div>

        <div className='border px-6 py-2 flex items-center rounded-full mt-4 gap-2'>
          <img src={assets.lock_icon} alt="" width={15} className='ml-1' />
          <input type="password" placeholder='Password' className='outline-none text-sm ml-2' required />
        </div>

        <p className='text-sm text-blue-500 py-4 cursor-pointer'>Forgot password?</p>

        <button className='bg-blue-500 text-white px-6 py-2 rounded-full w-full mt-4'>{state === 'Login' ? 'Login' : 'Create Account'}</button>

        {state === 'Login' ? (
          <p className='text-sm text-center mt-4'>Didn't have an account? <span className='text-blue-500 cursor-pointer' onClick={() => setState('Sign Up')}>Sign up</span></p>
        ) : (
          <p className='text-sm text-center mt-4'>Already have an account? <span className='text-blue-500 cursor-pointer' onClick={() => setState('Login')}>Login</span></p>
        )}

        <img src={assets.cross_icon} alt="" className='absolute top-5 right-5 cursor-pointer' onClick={() => setShowLogin(false)} />

      </form>

    </div>
  )
}

export default Login
