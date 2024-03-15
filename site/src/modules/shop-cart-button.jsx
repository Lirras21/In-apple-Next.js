import { useState, useEffect } from 'react';
import { useBasket } from '@/helper/add-item-in-basket';
import { usePathname } from 'next/navigation';

const ShopCartButton = ({ isOpenShopCart, setIsOpenShopCart }) => {
  const pathname = usePathname();
  const { getBasketItemsLength } = useBasket();
  
  if(pathname === '/checkout') {
    return null
  }
  
  return (
    <div className='relative' onClick={() => setIsOpenShopCart(!isOpenShopCart)}>
      <img src="/icon/basket.svg" alt="basket" className='h-[25px]' />
      <div className='absolute top-[-17px] right-[-17px] text-black rounded-full px-2 py-1 text-sm'>
        {getBasketItemsLength()}
      </div>
    </div>
  );
};

export default ShopCartButton;

