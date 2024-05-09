import React from 'react';
import Woman from "../assets/woman.png";
import Spring from "../assets/spring.png";
import Monitor from "../assets/monitoring.png";
import ImageLayer from './ImageLayer';
import "../index.css"

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen mt-4">
        <div className="absolute inset-0">
        <ImageLayer />
      </div>
      <div className="w-2/5 mx-4 bg-red-100 h-screen p-4 flex flex-col items-center justify-center">
     
      </div>
      <div className="w-3/5 mx-4 bg-violet-100 h-screen p-4 flex flex-col justify-center items-center mt-[160px]  z-0">
        <h1 className='font-bold text-[100px] text-pink-900'>
         SHE<span className='cherry-swash-bold'>Can.</span>
        </h1>
  <p className='text-md text-gray-500'>for all the superwomen behind the curtains</p>
  <button className='px-4 py-2 bg-pink-950 rounded-lg text-white mt-4'>Get started</button>
</div>


      
    </div>
  );
};

export default Home;

