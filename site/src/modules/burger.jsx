import React from 'react'

function Burger({isOpenBurgerMenu, setIsOpenBurgerMenu}) {
  const genericHamburgerLine = `h-1 w-6 my-[2px] rounded-full bg-black transition ease transform duration-500`;

  return (
    <button
      className="lg:hidden flex flex-col  w-12  rounded justify-center items-center group"
      onClick={() => setIsOpenBurgerMenu(!isOpenBurgerMenu)}
    >
      <div
        className={`${genericHamburgerLine} ${isOpenBurgerMenu && "rotate-45 translate-y-[8px]"}`}
      />
      <div
        className={`${genericHamburgerLine} ${isOpenBurgerMenu && "opacity-0"}`}
      />
      <div
        className={`${genericHamburgerLine} ${isOpenBurgerMenu && "-rotate-45 -translate-y-[8px]"}`}
      />
    </button>
  )
}

export default Burger
