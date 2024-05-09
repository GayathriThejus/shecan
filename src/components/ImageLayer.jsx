import React from 'react'
import Woman from "../assets/woman.png";
import Spring from "../assets/spring.png";
import Monitor from "../assets/monitoring.png";

const ImageLayer = () => {
  return (
    <div className='mx-auto flex px-7'>
          <img src={Woman} className='w-[200px] h-[200px] mt-[240px]' alt="Woman Image"/>
          <div className='flex flex-col '>
          <img src={Monitor} className='relative z-10 w-[300px] h-[300px] mt-2' alt="Spring Image" style={{ marginRight: '140px' }} />
          <img src={Spring} className=' relative z-10 w-[350px] h-[350px] mt-2' alt="Monitor Image" style={{ marginRight: '140px' }} />

          </div>

    </div>
  )
}

export default ImageLayer