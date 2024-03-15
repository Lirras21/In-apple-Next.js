"use client"
import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'


const filters = [
  'Сортувати за замовченням',
  'Сортувати за популярністю',
  'Сортувати за оцінкою',
  'Сортувати за останніми',
  'Сортувати за ціною: від нижчої до вищої',
  'Сортувати за ціною: від вищої до нижчої',
]

function FilterItems() {
  const [filter, setFilter] = useState(filters[0])
  const [filterOpen, setFilterOpen] = useState(false)

  const handleChangeFilter = (index) => {
    setFilter(filters[index])
  }

  return (
    <div>
      <header className='flex items-center justify-between text-[13px] font-light'>
        <h1 className=''>
          Показано 1-6 із 8
        </h1>
        <div className='flex gap-3 items-center cursor-pointer'>
          <h1>
            Сортувати за:
          </h1>
          <div className='relative w-auto'>
            <div onClick={() => setFilterOpen(!filterOpen)} className='p-2 border-2 flex items-center gap-1'>
              {filter}
              <MdOutlineKeyboardArrowDown size='2em' className={`${filterOpen ? 'rotate-180 duration-300' : 'duration-300'}`} />
            </div>
            {filterOpen &&
              <div className='absolute border-2 border-t-0 -z-0 text-start w-auto'>
                {filters.map((item, index) => (
                  <div onClick={() => handleChangeFilter(index)} key={index} className={`px-2 py-1 hover:bg-gray-200 ${item == filter ? 'bg-neutral-200' : ''}`}>{item}</div>
                ))}
              </div>
            }
          </div>
        </div>
      </header>
    </div>
  )
}

export default FilterItems;
