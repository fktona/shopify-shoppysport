'use client'

import Link from 'next/link'
import { useContext } from 'react'
import { CartContext } from '../app/context/shopContext'
import MiniCart from './MiniCart'
import { useMenu } from '../app/context/menuContext'

export default function Nav() {
  const { openMenu, handleOpenMenu } = useMenu();
  const { cart, cartOpen, setCartOpen } = useContext(CartContext)

  let cartQuantity = 0
  cart.map(item => {
    return (cartQuantity += item?.variantQuantity)
  })

  return (
    <header className=" fixed text-white w-full  top-0 z-[100] bg-black/85 lg:px-[70px] sm:px-6 ">
      <div className="flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl">
        <Link href="/" passHref>
          <div className="cursor-pointer">
            <span className="text-lg pt-1 font-bold">
               SHOPPYSPORT
            </span>
          </div>
        </Link>
       
        <MiniCart cart={cart} />
        <nav className="hidden space-x-8 lg:flex ">
          <Link href="/#hero" passHref className="text-md ">Home
          </Link>
          <Link href="/shop" passHref className="text-md ">Shop
          </Link>
          <Link href="/#product" passHref className="text-md ">Products
          </Link>
          <Link href="#footer" passHref className="text-md ">Contact
          </Link>
        </nav>
        <div className="relative flex gap-3 items-center justify-center">
        <button
          className="text-md relative flex font-bold cursor-pointer"
          onClick={() => setCartOpen(!cartOpen)}
          >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
 <span className='bg-red-500 text-[8px] p-[3px] px-[4px] -left-2 relative rounded-full'>{cartQuantity}</span>
        </button>

        
        <div
        onClick={handleOpenMenu}
        className="gap-[3px] z-[77777] md:hidden cursor-pointer relative flex flex-col"
      >
        <span
          className={`${openMenu ? "rotate-45 top-1" : ""} transition-all duration-300 delay-75 w-[40px]   h-[4px] relative bg-white`}
        ></span>
        <span
          className={` ${openMenu ? "-rotate-45 bottom-1" : ""} w-[40px]  transition-all duration-300 
          delay-75 relative  h-[4px] bg-white`}
        ></span>
        <span
          className={`${openMenu ? "-bottom-3" : ""} transition-all duration-300  w-[40px] relative   h-[4px] bg-white`}
        ></span>
      </div>
        
        </div>
      </div>
    </header>
  )
}
