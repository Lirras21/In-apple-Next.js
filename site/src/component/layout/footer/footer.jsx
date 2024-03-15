import React from 'react'
import t from '@/locales/ua/apple-models.json'
import Link from 'next/link'

const items = [
  { label: t.title.Mac, models: Object.values(t.mac) },
  { label: t.title.iPhone, models: Object.values(t.iPhone) },
  { label: t.title.iPad, models: Object.values(t.iPad) },
  { label: t.title.appleWatch, models: Object.values(t.appleWatch) },
  { label: t.title.accessories, models: Object.values(t.accessories) },
  { label: t.title.service, models: Object.values(t.service) },
]

function Footer() {
  return (
    <div className='flex mb-0 relative justify-center  bg-black h-[505px]'>
      <div className='pt-8  w-[1108px] flex flex-col md:flex-row justify-center gap-24 max-md:gap-12 max-md:text-center  text-white'>
        {items.map((item, index) => (
          <div key={index} className=''>
            <Link href='#' className='text-gray-500'>
              {item.label}
            </Link>
            <ul className='mt-5 max-md:hidden'>
              {item.models.map((el, i) => (
                <li key={i} className='mt-[10px] text-sm'>
                  <a href={`/product-category${el[1]}`} className='relative after:bg-white after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'>{el[0]}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Footer;
