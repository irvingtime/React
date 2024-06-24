import React from 'react'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className='flex h-screen bg-black justify-center items-center'>


<motion.div
className='bg-white p-10'
  whileHover={{ scale: 1.2, rotate: 90 ,}}
  whileTap={{
    scale: 0.8,
    rotate: -90,
    borderRadius: "100%"
    
  }}
/>


    </div>
    
  )
}

export default App