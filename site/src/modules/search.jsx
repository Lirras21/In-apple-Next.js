import React from 'react'
import t from '../locales/ua/header.json'

function Search({handleOpenSearch}) {
  return (
    <search className='flex items-center justify-center border-[1px] border-b-gray-200 bg-white absolute h-[100px] w-full'>
          <div className='flex justify-between items-center ml-4 mr-5 w-[1108px] h-1/2 '>
            <input
              type="text"
              className=' h-full w-5/6 text-lg text-left outline-none border-b'
              placeholder={t.header.search}
            />
            <div className='flex gap-4 mr-2'>
              <img
                src="/icon/search.svg"
                alt="search"
                className='cursor-pointer transform hover:rotate-90 transition-transform duration-500 h-[25px]'
              />
              <img
                src="/icon/close.svg"
                alt="search"
                className='cursor-pointer transform hover:rotate-90 transition-transform duration-500 h-[25px]'
                onClick={() => handleOpenSearch()}
              />
            </div>
          </div>
        </search>
  )
}

export default Search
