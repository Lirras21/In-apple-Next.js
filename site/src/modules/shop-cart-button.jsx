import { useState, useEffect } from 'react';
import { useBasket } from '@/helper/add-item-in-basket';

const ShopCartButton = ({ isOpenShopCart, setIsOpenShopCart }) => {
  const { getBasketItemsLength } = useBasket();

  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    const updatePath = () => {
      setCurrentPath(window.location.pathname);
    };

    updatePath();
    console.log(currentPath)
    window.addEventListener('popstate', updatePath);
    window.addEventListener('hashchange', updatePath);
    return () => {
      window.removeEventListener('popstate', updatePath);
    };
  }, [currentPath]); 

  console.log(currentPath)
  if(currentPath === '/checkout') {
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

