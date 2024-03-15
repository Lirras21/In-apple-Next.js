import React from 'react'
import { useBasket } from '@/helper/add-item-in-basket';
import Link from 'next/link';

function ShopCart({ isOpenShopCart, setIsOpenShopCart }) {
  const { items, removeAllItemsFromBasket } = useBasket();



  const itemCounts = {};

  items.forEach((item) => {
    if (itemCounts[item.description]) {
      itemCounts[item.description]++;
    } else {
      itemCounts[item.description] = 1;
    }
  });

  if (items.length <= 0) {
    return <></>;
  }

  return (
    <div
      className={`${isOpenShopCart && items.length >= 0 ? 'bg-white lg:w-[30%] md:w-2/3 w-full h-full fixed right-0 top-0 translate-x-0 transition duration-1000 z-10' : 'bg-white lg:w-[30%] md:w-2/3 w-full h-full fixed opacity-0 right-0 top-0 translate-x-full transition duration-1000'} `}
    >
      <div>
        <div className='bg-black text-white text-lg flex justify-between items-center font-bold px-4 h-14'>
          <h1>Корзина</h1>
          <button onClick={() => setIsOpenShopCart(!isOpenShopCart)}>
            <img src="/icon/close.svg" alt="Закрити" className='invert h-5' />
          </button>
        </div>
        <div>
          {Object.keys(itemCounts).map((itemId) => {
            const item = items.find((item) => item.description === itemId);

            return (
              <div key={itemId} className='h-auto border-b flex items-center gap-4 p-4 justify-between'>
                <div className=''>
                  <img src={item.src} alt="" className='h-16' />
                </div>
                <div className='w-2/3'>
                  <h1 className='font-bold text-md'>{item.description}</h1>
                  <p>{itemCounts[itemId]} x {item.cost}</p>
                </div>
                <button className='hover:rotate-90   duration-500' onClick={() => removeAllItemsFromBasket(item.description)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-5 h-5 hover:text-red-500 duration-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
        <div className='flex justify-center mt-6 text-center items-center font-bold' onClick={() => setIsOpenShopCart(!isOpenShopCart)}>
          <Link href='/checkout' className='bg-black text-white py-2 px-3 text-sm hover:invert duration-500 border'>ОФОРМИТИ ЗАМОВЛЕННЯ</Link>
        </div>
      </div>
    </div>
  );
}


export default ShopCart
