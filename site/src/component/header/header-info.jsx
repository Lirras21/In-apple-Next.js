import React from 'react'
import t from '@/locales/ua/header.json';
import Link from 'next/link';

function HeaderInfo() {
  const styleLink = 'relative after:bg-white after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'
  
  return (
    <div className='md:flex text-[14px] justify-center  bg-black text-white h-[37px] hidden' >
        <div className='md:flex text-[14px] justify-between items-center w-[1108px] ml-4 mr-4'>
          <nav>
            <ul>
              <li className='flex gap-[20px]'>
                <Link href='' className={styleLink}>{t.header.info.delivery}</Link>
                <Link href='' className={styleLink}>{t.header.info.guarantee}</Link>
                <Link href='' className={styleLink}>{t.header.info.listCities}</Link>
              </li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li className='flex gap-[20px]'>
                <Link href='' className={styleLink}>{t.header.info.mail}</Link>
                <span className=' text-white cursor-default'>•</span>
                <Link href='' className={styleLink}>{t.header.info.number}</Link>
                <span className=' text-white cursor-default'>•</span>
                <Link href='' className={styleLink}>{t.header.info.number}</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
  )
}

export default HeaderInfo
