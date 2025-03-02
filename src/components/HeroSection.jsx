import React from 'react';
import HeroImg from "../assets/img/heroBanner.jpg";


const HeroSection = ({ icon, number, paragraph }) => {
  // console.log({});

  return (

    <div className='flex gap-7 flex-col'>
      <div className='px-[50px]'>
        <img src={HeroImg} alt="" className='w-full' />
      </div>
      
    </div>
  );
}

export default HeroSection;
