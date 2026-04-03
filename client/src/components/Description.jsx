import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
    <div className='flex flex-col justify-center items-center p-6 my-24 md:px-28'>
      <h1 className='text-3xl md:text-4xl font-semibold mb-2'>Create Ai Images</h1>

      <p className='text-neutral-600 mb-8'>Turn your imagination into a Dream Canvas.</p>

      <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
        <img className='w-60 xl:w-96 rounded-lg shadow-lg' src={assets.sample_img_1} alt="Description" />
        <div className='mt-4'>
          <h2 className='text-xl font-medium max-w-lg mb-4'>Introducing the AI-Powered Text to Image Generator</h2>

          <p className='text-gray-500 mb-4'>A cutting-edge creative platform that transforms your words into visually stunning, high-quality images within seconds. The AI intelligently interprets your ideas, style preferences, and fine details to create artwork that aligns perfectly with your vision. Whether you're an artist seeking inspiration, a content creator enhancing visuals, or just exploring creativity, this tool makes the experience seamless, fast, and exciting. Powered by advanced models, it understands composition, lighting, and artistic styles to deliver unique and captivating results every time.</p>

          <p className='text-gray-500'>Getting started is simple and magical. Enter a clear and descriptive prompt, choose or adjust styles if available, and let the AI work its magic to generate your image in moments. You can refine your prompt, tweak details, and experiment with variations to achieve the perfect result. The platform is designed to be intuitive for both beginners and professionals, removing the need for complex tools or design skills. It empowers you to turn imagination into a Dream Canvas into reality with just a few words.</p>
        </div>
      </div>
    </div>
  )
}

export default Description