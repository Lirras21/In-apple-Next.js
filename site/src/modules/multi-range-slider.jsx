"use client"
import React, { useState, useEffect, useRef } from 'react'

function MultiRangeSlider({ initialMin, initialMax, min, max, step, priceCap }) {
  const progressRef = useRef(null);
  const [minValue, setMinValue] = useState(initialMin);
  const [maxValue, setMaxValue] = useState(initialMax);

  const handleMin = (e) => {
    if ((maxValue - minValue >= priceCap) && maxValue <= max) {
      if (parseInt(e.target.value) > parseInt(maxValue)) {

      } else {
        setMinValue(parseInt(e.target.value))
      }
    } else {
      if (parseInt(e.target.value) < minValue)
        setMinValue(parseInt(e.target.value))
    }
  }

  const handleMax = (e) => {
    if ((maxValue - minValue >= priceCap) && maxValue <= max) {
      if (parseInt(e.target.value) < parseInt(minValue)) {

      } else {
        setMaxValue(parseInt(e.target.value))
      }
    } else {
      if (parseInt(e.target.value) > maxValue)
        setMaxValue(parseInt(e.target.value))
    }
  }

  useEffect(() => {
    progressRef.current.style.left = (minValue / max) * step + "%";
    progressRef.current.style.right = step - (maxValue / max) * step + "%";
  }, [minValue, maxValue])

  return (
    <div className='flex flex-col gap-3 border-b'>
      <h1 className='text-md'>
        Ціна (грн)
      </h1>
      <div className='flex justify-between items-center'>
        <input
          type="text"
          onChange={setMinValue}
          className='w-5/12 h-9 pl-3 border-2 text-sm'
          value={minValue}
        />
        <span>-</span>
        <input
          type="text"
          onChange={setMaxValue}
          className='w-5/12 h-9 pl-3 border-2 text-sm'
          value={maxValue}
        />
      </div>
      <div className='mt-2'>
        <div className='relative h-1  rounded-md bg-gray-300'>
          <div
            className='absolute h-1  bg-black rounded'
            ref={progressRef}
          ></div>
        </div>
        <div className='relative'>
          <input
            type="range"
            value={minValue}
            onChange={handleMin}
            min={min}
            step={step}
            max={max}
            className=' absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none'
          />
          <input
            type="range"
            value={maxValue}
            onChange={handleMax}
            min={min}
            step={step}
            max={max}
            className='absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none'
          />
        </div>
      </div>
      <div className='flex items-center mt-2 justify-center pb-7'>
        <button className='bg-black text-white hover:invert hover:border items-center  duration-1000 font-bold w-[70px] h-[34px]'>OK</button>
      </div>
    </div>
  )
}

export default MultiRangeSlider;
