"use client"
import React, { useState, useEffect } from 'react';
import BurgerMenu from './burger-menu';
import Search from '@/modules/search';
import Burger from '@/modules/burger';
import t from '@/locales/ua/apple-models.json';
import Link from 'next/link';

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  const commonGridClasses = 'grid place-items-center hover:bg-slate-100 cursor-pointer h-[100px] w-1/6 relative';

  const handleItemClick = (index) => {
    activeIndex === index ? setActiveIndex(null) : setActiveIndex(index)
  };

  const handleClickOutside = (event) => {
    if (activeIndex !== null) {
      const activeElement = document.querySelector(`[data-index="${activeIndex}"]`);
      if (activeElement && !activeElement.contains(event.target)) {
        setActiveIndex(null);
      }
    }
  };
  const handleOpenSearch = () => {
    setOpenSearch(!openSearch);
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };

  }, [activeIndex]);

  const itemsInBasket = 2;

  const items = [
    { icon: "/icon/mac.svg", label: t.title.Mac, list: Object.values(t.mac) },
    { icon: "/icon/ipad.svg", label: t.title.iPad, list: Object.values(t.iPad) },
    { icon: "/icon/iphone.svg", label: t.title.iPhone, list: Object.values(t.iPhone) },
    { icon: "/icon/apple-watch.svg", label: t.title.appleWatch, list: Object.values(t.appleWatch) },
    { icon: "/icon/accessories.svg", label: t.title.accessories, list: Object.values(t.accessories) },
    { icon: "/icon/service.svg", label: t.title.service, list: Object.values(t.service) },
  ];

  return (
    <div>
      <div className='h-[100px] border-[1px] flex justify-center border-b-gray-200 border-solid'>
        <div className='flex lg:justify-between justify-between ml-4 mr-5 items-center h-[100px] w-[1108px]'>
          <div className='cursor-pointer'>
            <Link href='/'>
              <img src="/icon/logo.svg" alt="logo" className='h-[30px]' />
            </Link>
          </div>
          <div className='lg:flex hidden items-center h-[100px] relative w-[704px]'>
            {items.map((item, index) => (
              <div
                key={index}
                className={`${commonGridClasses} ${activeIndex === index ? 'bg-slate-100' : ''}`}
                onClick={() => handleItemClick(index)}
                data-index={index}
              >
                <div className='grid place-items-center'>
                  <img key={index} src={item.icon} alt={item.label} className='h-[40px]' />
                  <h1>{item.label}</h1>
                </div>
                <div className={`${activeIndex === index ? 'absolute top-[99px] w-[170px] ' : 'hidden'} bg-slate-100 left-0`}>
                  <ul className='mt-4 mb-4'>
                    {item.list.map((el, i) => (
                      <li key={i} className='h-7 ml-4 z-50'>
                        <Link href="#" className='relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'>{el}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className='flex lg:w-[71px] w-[110px] justify-between items-center cursor-pointer'>
            <div>
              <img
                src="/icon/search.svg"
                alt="search"
                className='cursor-pointer transform hover:rotate-90 transition-transform duration-500 h-[25px]'
                onClick={() => handleOpenSearch()}
              />
            </div>
            <div className='relative'>
              <img src="/icon/basket.svg" alt="basket" className='h-[25px]' />
              {itemsInBasket > 0 && (
                <div className='absolute top-[-17px] right-[-17px] text-black rounded-full px-2 py-1 text-lg'>
                  {itemsInBasket}
                </div>
              )}
            </div>
            <Burger isOpen={isOpen} setIsOpen={setIsOpen}/>
          </div>
        </div>
        {
        openSearch &&
        <Search handleOpenSearch={handleOpenSearch}/>
        }
      </div>
      {isOpen && <BurgerMenu />}
    </div>
  )
}
export default Navbar;