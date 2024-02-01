import React, { useState } from 'react'
import t from '@/locales/ua/apple-models.json';
import Link from 'next/link';


function BurgerMenu() {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleChangeIndex = (index) => {
    activeIndex === index ? setActiveIndex(null) : setActiveIndex(index)
  }
  const items = [
    { icon: "/icon/mac.svg", height: '35px', label: t.title.Mac, list: Object.values(t.mac) },
    { icon: "/icon/ipad.svg", height: '40px', label: t.title.iPad, list: Object.values(t.iPad) },
    { icon: "/icon/iphone.svg", height: '30px', label: t.title.iPhone, list: Object.values(t.iPhone) },
    { icon: "/icon/apple-watch.svg", height: '30px', label: t.title.appleWatch, list: Object.values(t.appleWatch) },
    { icon: "/icon/accessories.svg", height: '30px', label: t.title.accessories, list: Object.values(t.accessories) },
    { icon: "/icon/service.svg", height: '30px', label: t.title.service, list: Object.values(t.service) },
  ];
  return (
    <div className='lg:hidden absolute w-full h-full bg-white'>
      {items.map((item, index) => (
        <div className='' key={index} onClick={() => handleChangeIndex(index)}>
          <div className={`flex items-center  justify-center h-[67px] border-[1px] border-b-gray-300 border-solid ${activeIndex === index ? 'bg-gray-200' : 'bg-white'}`}>
            <div className='flex items-center'>
              <img src={item.icon} alt="mac" className={`h-[${item.height}]`} />
              <h1 className='ml-4'>{item.label}</h1>
            </div>
          </div>
          <div className={`${activeIndex === index ? 'flex items-center justify-center bg-gray-200' : 'hidden'}`}>
            <ul className='mt-4 mb-4 text-lg text-center font-bold'>
              {item.list.map((el, i) => (
                <li key={i} className='h-10 ml-4'>
                  <Link href='#' className=''>{el}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BurgerMenu;