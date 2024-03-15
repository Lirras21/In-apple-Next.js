"use client"
import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GrFormCheckmark } from "react-icons/gr";
function Accordion({ name, value}) {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleButtonClick = (index) => {
    const updatedSelectedItems = [...selectedItems];

    const isItemSelected = updatedSelectedItems.includes(index);

    if (isItemSelected) {
      const itemIndex = updatedSelectedItems.indexOf(index);
      updatedSelectedItems.splice(itemIndex, 1);
    } else {
      updatedSelectedItems.push(index);
    }

    setSelectedItems(updatedSelectedItems);
  };
  return (
    <div>
      <div className='w-full border-b mb-5'>
      <button onClick={() => setAccordionOpen(!accordionOpen)} className='flex justify-between w-full'>
        <span>{name}</span>
        <MdOutlineKeyboardArrowDown className={`${accordionOpen ? 'rotate-180 duration-300' : 'duration-300'}`} />
      </button>
      <div className={`grid overflow-hidden transition-all duration-500 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100 mb-3' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className='flex flex-col gap-2 text-sm mt-4 overflow-hidden'>
          {value.map((el, index) => (
            <div className='flex flex-row gap-3 items-center'>
            <button className={`w-[20px] h-[20px] border flex items-center justify-center ${selectedItems.includes(index) ? ' bg-black text-white  duration-500' : 'duration-500'}`} onClick={() => handleButtonClick(index)}>
              {selectedItems.includes(index) ? <GrFormCheckmark  size='3em' className=' duration-1000'/> : ''}
            </button>
            {el}
          </div>
          ))}
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default Accordion;
