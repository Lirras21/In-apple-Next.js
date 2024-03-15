"use client"
import React from 'react';
import Link from 'next/link';
import MultiRangeSlider from '@/modules/multi-range-slider';
import Accordion from '@/modules/accordion';
import FilterItems from '@/modules/filter-items';
const colorValue = ['Gold', 'Silver', 'Black'];
const memoryValue = ['128 GB', '256 GB', '512 GB'];

function ProductCategory() {
  const maxCost = 20000;

  return (
    <div className='flex justify-center items-center'>
      <div className='w-[1108px] h-[800px]'>
        <div className='flex w-[75%] gap-4 text-sm mt-6'>
          <Link href='/'>Головна</Link>
          <span className='text-black cursor-default'>•</span>
          <h1>Модель продукту...</h1>
        </div>
        <div className='w-full flex mt-7'>
          <div className='w-[23%] flex flex-col gap-5'>
            <MultiRangeSlider
              initialMin={0}
              initialMax={maxCost}
              min={0}
              max={maxCost}
              step={100}
              priceCap={1200}
            />
            <div>
              <Accordion name='Колір' value={colorValue} />
              <Accordion name="Пам'ять" value={memoryValue} />
            </div>
          </div>
          <div className='w-[77%] text-center ml-5 '>
            <FilterItems />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCategory;
