import Link from 'next/link'
import React from 'react'
import { items } from './items'

function News() {
  return (
    <div className='m-auto flex justify-center  mt-6 w-[75%] border-t'>
      <div className='mt-10'>
        <div className='text-[23px] text-center font-bold'>
          Новини
        </div>
        <div className='md:flex items-center justify-between gap-11 mt-11'>
          {items.map((item, i) => (
            <div key={i} className='lg:w-1/3'>
              <Link href={item.href}>
                <img src={item.src} alt={item.alt} />
                <span className='flex mt-4 text-md'>{item.topic}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default News
