import React from 'react';
import Woman from "../assets/woman.png";
import Spring from "../assets/spring.png";
import Monitor from "../assets/monitoring.png";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen mt-4">
      <div className="w-2/5 mx-4 bg-red-100 h-screen p-4 flex flex-col items-center justify-center">
        <img src={Woman} className='w-[200px] h-[200px]' alt="Woman Image"/>
      </div>
      <div className="w-3/5 mx-4 bg-violet-100 h-screen p-4 flex flex-col items-center justify-center mt-[160px]">
        <img src={Spring} className='w-[350px] h-[350px] mt-4 ' alt="Spring Image"/>
        <img src={Monitor} className='w-[400px] h-[400px] mt-4' alt="Monitor Image"/>
      </div>
    </div>
  );
};

export default Home;
