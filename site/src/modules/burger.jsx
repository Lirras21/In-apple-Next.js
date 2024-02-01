import React from 'react'

function Burger({isOpen, setIsOpen}) {
  const genericHamburgerLine = `h-1 w-6 my-[2px] rounded-full bg-black transition ease transform duration-300`;

  return (
    <button
      className="lg:hidden flex flex-col  w-12  rounded justify-center items-center group"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${isOpen && "rotate-45 translate-y-[8px]"}`}
      />
      <div
        className={`${genericHamburgerLine} ${isOpen && "opacity-0"}`}
      />
      <div
        className={`${genericHamburgerLine} ${isOpen && "-rotate-45 -translate-y-[8px]"}`}
      />
    </button>
  )
}

export default Burger
