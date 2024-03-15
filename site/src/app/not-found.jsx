import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <main className=''>
      <div className='flex flex-col mt-20 items-center h-[610px]'>
        <h1 className='text-[150px] font-bold '>404</h1>
        <p className='text-[20px]'>
          Помилка 404. Сторінку не знайдено
        </p>
        <Link href='/' className=' bg-black text-white font-bold flex  justify-center items-center mt-5 h-16 w-60 border-2 hover:invert duration-500 text-lg'>
          Головна сторінка
        </Link>
      </div>
    </main>
  )
}

export default NotFound
