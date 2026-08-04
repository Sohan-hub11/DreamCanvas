import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContextProvider'

const GenerateBtn = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate('/Result');
    } else {
      setShowLogin(true);
    }
  }

  return (
    <motion.div className='pb-6 text-center'
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h1 className='text-2xl md:text-3xl sm:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16'>See the magic. Try now</h1>

      <motion.button onClick={onClickHandler} className='bg-black inline-flex items-center hover:scale-105 text-white m-auto gap-2 py-3 px-12 rounded-full'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ default: { duration: 0.5 }, opacity: { delay: 0.8, duration: 1 } }}
      >
        Generate Images
        <img src={assets.star_group} className="h-6 ml-2" alt="" />
      </motion.button>
    </motion.div>
  )
}

export default GenerateBtn