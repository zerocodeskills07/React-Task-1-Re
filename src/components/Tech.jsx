import React from 'react'
import { DiJava, DiPython, DiReact } from 'react-icons/di'
import { FaCss3, FaSwift, FaVuejs } from "react-icons/fa"

const Tech = () => {
  return (
    <div>
      
      <h1 className='text-4xl text-center font-bold underline underline-offset-4'>
        Technologies I Use
      </h1>

      <div className='grid grid-cols-4 gap-y-10 my-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center'>

        <DiReact size={150} className='hover:fill-red-500 hover:scale-125 transition-all duration-300' />
        <DiJava size={150} />
        <FaVuejs size={150} />
        <FaCss3 size={150} className='animate-bounce' />
        <DiPython size={150} />
        <FaSwift size={150} />

      </div>

    </div>
  )
}

export default Tech