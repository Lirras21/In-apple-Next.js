import Link from 'next/link';
import React from 'react';
import { MdPhoneCallback } from "react-icons/md";

function CityList() {
  return (
    <div className='flex justify-center bg-gray-100 '>
      <div className='w-[75%] mb-[100px]'>
        <div>
          <div className='flex w-[75%] gap-4 text-sm mt-6'>
            <Link href='/'>Головна</Link>
            <span className='text-black cursor-default'>•</span>
            <h1>Список міст</h1>
          </div>
          <div className='text-center mt-12 text-[25px] font-bold border-b-2 '>
            <div>Список міст</div>

            <a href='tel:0800307775' className='flex justify-center gap-4 my-10 text-[40px] items-center'>
              <MdPhoneCallback />
              0 800 30 777 5
            </a>

          </div>
          <div className='flex items-center justify-center mt-10 h-[500px]'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2576.1119322576183!2d23.639992612432167!3d49.78395997135368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473b1c66b1ac4cbb%3A0xff53114e1683d751!2z0KLQtdGF0L3QvtC70Y7QutGB!5e0!3m2!1suk!2sua!4v1708599667699!5m2!1suk!2sua"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-5/6'></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CityList
