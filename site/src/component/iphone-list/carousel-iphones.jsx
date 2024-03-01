"use client"
import React, { useEffect, useState } from 'react'
import { iphoneList } from '@/helper/items-list'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useMediaQuery } from 'react-responsive';
import { useBasket } from '@/helper/add-item-in-basket';


function CarouselPhones() {
  const [startIndex, setStartIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const {addItemToBasket} = useBasket()

  const handlePrevClick = () => {
    setStartIndex((prevStartIndex) => (prevStartIndex - 1 + iphoneList.length) % iphoneList.length);
  };

  const handleNextClick = () => {
    setStartIndex((prevStartIndex) => (prevStartIndex + 1) % iphoneList.length);
  };


  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  useEffect(() => {
    if (isLargeScreen) {
      setItemsPerPage(4);
    } else if (isMediumScreen) {
      setItemsPerPage(2);
    } else {
      setItemsPerPage(1);
    }
  }, [isLargeScreen, isMediumScreen]);


  return (
    <div className='flex justify-center mt-4'>
      <div className='flex justify-center items-center bg-white  w-[1108px] h-[470px]'>
        <div>
          <IoIosArrowBack  onClick={handlePrevClick} className='text-[25px] cursor-pointer'/>
        </div>
        <div className='flex w-[90%] h-[483px]'>
        {Array.from({ length: itemsPerPage }).map((_, i) => {
            const currentIndex = (startIndex + i) % iphoneList.length;
            const item = iphoneList[currentIndex];

            return (
            <div
              key={i}
              className='w-full md:w-1/2 lg:w-1/4 group transition border border-transparent hover:border-gray-300'
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className='h-[300px]'>
                <div className='pt-[40px] flex justify-center'>
                  <img src={item.src} alt={item.alt} />
                </div>
                <div className='text-center mx-8 my-4 text-md font-bold'>
                  <h1 className='flex justify-center items-center'>{item.description}</h1>
                </div>
              </div>
              <div className='flex flex-col gap-1 items-center mt-5'>
                <p className='text-sm'>{item.price}</p>
                <div className='font-bold bg-gray-200 px-4 py-3'>{item.cost} ₴</div>
              </div>
              {isHovered &&
                <div className='mt-6 flex h-[65px] text-white gap-[1px] opacity-0 group-hover:opacity-100  transition duration-1000'>
                  <button 
                    className='flex items-center justify-center w-2/3 bg-black gap-1 hover:invert transition duration-500'
                    onClick={() => addItemToBasket(item)}
                  >
                    <img src="/icon/basket.svg" alt="basket" className='h-[25px] invert' />
                    Купити
                  </button>
                  <div className='flex text-sm text-center justify-center items-center w-1/3 bg-black hover:invert transition duration-500'>
                    <button>Швидка купівля</button>
                  </div>
                </div>
              }
            </div>
            );
          })}
        </div>
        <div>
          <IoIosArrowForward onClick={handleNextClick} className='text-[25px] cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}

export default CarouselPhones
