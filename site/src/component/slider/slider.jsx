"use client"
import Image from 'next/image';
import React from 'react';

function Slider() {

  return (
    <div className='w-[100%] mb-7 flex items-center justify-center'>
        <div className='flex '>
            <div className=''>
              <Image src='/slider/slide-first.jpg' width='1100' height='520' alt="First picture in slider" />
            </div>
        </div>
      </div>
  );
}

export default Slider;
