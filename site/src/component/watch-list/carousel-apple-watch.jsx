"use client"
import React, { useEffect, useState } from 'react'
import { watchList } from '@/helper/items-list'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useMediaQuery } from 'react-responsive';
import { useBasket } from '@/helper/add-item-in-basket';
import OrderForm from '@/modules/order-form';
import { VscLoading } from "react-icons/vsc";
import { CiCircleCheck } from "react-icons/ci";

function CarouselWatches() {
  const [startIndex, setStartIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckVisible, setIsCheckVisible] = useState(false);
  const { addItemToBasket } = useBasket();

  const addItemAnimated = () => {
    setIsLoading(true);


    setTimeout(() => {
      setIsLoading(false);
      setIsCheckVisible(true);

      setTimeout(() => {
        setIsCheckVisible(false);
      }, 1000);
    }, 1000);
  };

  const handlePrevClick = () => {
    setStartIndex((prevStartIndex) => (prevStartIndex - 1 + watchList.length) % watchList.length);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleNextClick = () => {
    setStartIndex((prevStartIndex) => (prevStartIndex + 1) % watchList.length);
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
    <div className='flex justify-center mt-5++'>
      <div className='flex justify-center items-center  bg-white w-[75%] lg:w-[1108px] h-[570px]'>
        <div>
          <IoIosArrowBack onClick={handlePrevClick} className='text-[25px] cursor-pointer' />
        </div>
        <div className='flex w-[90%] h-[563px]'>
          {Array.from({ length: itemsPerPage }).map((_, i) => {
            const currentIndex = (startIndex + i) % watchList.length;
            const item = watchList[currentIndex];

            return (
              <div
                key={i}
                className='w-full md:w-1/2 lg:w-1/4 group transition border border-transparent hover:border-gray-300'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className='h-[366px]'>
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
                  <div className='mt-10 flex h-[65px] text-white gap-[1px] opacity-0 group-hover:opacity-100  transition duration-1000'>
                    <button
                      className='flex items-center justify-center w-2/3 bg-black gap-1 hover:invert transition duration-500'
                      onClick={() => { addItemToBasket(item); addItemAnimated() }}
                    >
                      {isLoading && <VscLoading className='animate-spin text-[35px]' />}
                      {isCheckVisible && <CiCircleCheck className='text-[35px]' />}
                      {!isLoading && !isCheckVisible && (
                        <>
                          <img src="/icon/basket.svg" alt="basket" className='h-[25px] invert' />
                          Купити
                        </>
                      )}
                  </button>
                    <button className='flex text-sm text-center justify-center items-center w-1/3 bg-black hover:invert transition duration-500' onClick={() => setShowModal(!showModal)}>
                      <span>Швидка купівля</span>
                    </button>
                  </div>
                }
                {showModal && (
                  <div className='fixed inset-0 flex  items-center justify-center z-50'>
                    <div className='fixed inset-0 bg-black opacity-50'></div>
                    <div className='absolute bg-white p-6 w-full h-[80%] md:h-[90%]  md:w-1/2  flex flex-col gap-4 md:gap-8 justify-center items-center rounded-md'>
                      <img src="/icon/close.svg" alt="Закрити" className='h-4 absolute  top-0 right-0 m-4 cursor-pointer' onClick={handleCloseModal} />
                      <h1 className='font-bold text-[25px] '>Замовлення в 1 клік</h1>
                      <p className='text-[21px]'>Залиште дані і ми зв'яжемося з Вами</p>
                      <OrderForm width='w-4/6 md:w-3/6' />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div>
          <IoIosArrowForward onClick={handleNextClick} className='text-[25px] cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default CarouselWatches
