import React from 'react'
import './Header.css'
import {RiShoppingCartFill} from 'react-icons/ri'
import {FaShoppingBasket, FaRegHeart} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    
<nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <Link to="/" className="flex items-center">
      <RiShoppingCartFill size={25} className="h-6 mr-2 text-blue-700 sm:h-9" />
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Gigma</span>
  </Link>
  <div className="flex items-center space-around  md:order-2">
      <Link to="../Page/Saved" className="block py-2 pl-3 pr-4 text-gray-700 mr-5 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><FaRegHeart size={20} /></Link>
      <button type="button" className="text-white flex items-center space-around gap-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><FaShoppingBasket size={18} /> {0}</button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link to="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white">Shop</Link>
      </li>
      <li>
        <Link to="/" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Order Review</Link>
      </li>
      <li>
        <Link to="/" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Manage Inventory</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>

    </>
  )
}

export default Header