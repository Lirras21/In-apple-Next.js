"use client"
import { redirect } from 'next/navigation';
import Link from 'next/link'
import React, { useState } from 'react'
import { useBasket } from '@/helper/add-item-in-basket'
import CarouselPhones from '@/component/iphone-list/carousel-iphones';
import OrderForm from '@/modules/order-form';

function Checkout() {
  const { items, getBasketItemsLength, addItemToBasket, removeItemFromBasket, removeAllItemsFromBasket } = useBasket();
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (getBasketItemsLength() <= 0) {
    redirect('/');
  }

  const itemCounts = {};

  items.forEach((item) => {
    if (itemCounts[item.description]) {
      itemCounts[item.description]++;
    } else {
      itemCounts[item.description] = 1;
    }
  });

  const totalCost = items.reduce((accumulator, currentObject) => {
    return accumulator + currentObject.cost;
  }, 0);

  return (
    <div className='flex flex-col mb-10 items-center'>
      <div className='md:w-[1108px] w-[85%]'>
        <div className='flex gap-4 text-sm mt-6 '>
          <Link href='/'>Головна</Link>
          <span className='text-black cursor-default'>•</span>
          <h1>Доставка і оплата</h1>
        </div>
        <div className='text-center mt-16'>
          <div className=' mt-12 text-[23px] font-bold '>
            Моя корзина: {getBasketItemsLength()} товари на ₴{totalCost.toLocaleString()}
          </div>
          <div className=' mt-12  bg-white lg:flex pb-10 border-b'>
            <div className=' lg:w-1/2 my-6 flex justify-center'>
              <div className='md:w-4/6'>
                <div>
                  {Object.keys(itemCounts).map((itemId) => {
                    const item = items.find((item) => item.description === itemId);

                    return (
                      <div key={itemId} className='h-auto border-b flex items-center gap-4 p-4 justify-between'>
                        <div className=''>
                          <img src={item.src} alt="" className=' h-[91px]' />
                        </div>
                        <div className='w-2/3'>
                          <h1 className='text-start text-sm'>{item.description}</h1>
                          <div className='flex gap-4 mt-3'>
                            <div className='flex border w-1/3'>
                              <button className='flex justify-center w-1/3 hover:text-white hover:bg-black duration-500 items-center' onClick={() => removeItemFromBasket(item.description)}>-</button>
                              <div className='flex justify-center w-1/3 text-sm  items-center'>{itemCounts[itemId]}</div>
                              <button className='flex justify-center w-1/3 hover:text-white hover:bg-black duration-500 items-center' onClick={() => addItemToBasket(item)}>+</button>
                            </div>
                            <p className='text-start text-lg'>₴{item.cost.toLocaleString()}</p>
                          </div>
                        </div>
                        <button className='hover:rotate-90 duration-500' onClick={() => removeAllItemsFromBasket(item.description)}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-5 h-5 hover:text-red-500 duration-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                          </svg>
                        </button>

                      </div>
                    );
                  })}
                </div>
                <div className='text-start  text-[23px] font-bold mt-9'>
                  Всього на ₴{totalCost.toLocaleString()}
                </div>
              </div>
            </div>
            <div className='lg:w-1/2 bg-gradient-to-b from-gray-200  flex justify-center h-fit'>
              <div className='w-5/6 my-6 '>
                <div className='text-[23px]'>
                  Залиште дані <br /> і ми зв’яжемося з Вами
                </div>
                <OrderForm  showModal={showModal} setShowModal={setShowModal} items={items} width='w-5/6'/>
                {showModal && (
                  <div className='fixed inset-0 flex items-center justify-center z-50'>
                    <div className='fixed inset-0 bg-black opacity-50'></div>
                    <div className='absolute bg-white p-6 md:h-1/3 md:w-4/5 lg:w-3/6 flex flex-col gap-4 md:gap-8 justify-center items-center rounded-md'>
                      <img src="/icon/close.svg" alt="Закрити" className='h-4 absolute  top-0 right-0 m-4 cursor-pointer' onClick={handleCloseModal} />
                      <Link href='/'>
                        <img src="/icon/logo.svg" alt="logo" className='h-[40px] md:h-[40px]' />
                      </Link>
                      <h1 className='font-bold text-[23px]'>Дякуємо за Вашу заявку.</h1>
                      <p>Найближчим часом наш менеджер обробить її <br /> і звяжеться з вами за вказаними контактами.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-10' style={{ width: '100%' }}>
        <div className='text-[23px] text-center font-bold'>Можливо Вас зацікавлять інші товари?</div>
        <div className='mt-10'>
          <CarouselPhones />
        </div>
      </div>
    </div>
  )
}

export default Checkout;