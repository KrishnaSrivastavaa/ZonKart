import React from 'react'
import { BiCategory } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { CiShop } from "react-icons/ci";
import { MdOutlineLocalShipping } from "react-icons/md";
import logo from '../../assets/logo1.png'
import { VscAccount } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";




const Sidebar = () => {
  return (
    <div className='w-[20%] flex flex-col justify-between  min-h-screen'>
        <div>
        <img className='h-12 my-6 mx-6' src={logo} alt="" />
      
        <h2 className='mx-9 font-bold text-2xl my-8'>Explore</h2>
      <ul>
        <li className='mx-7  text-white my-8 bg-gradient-to-r from-red-700 via-red-800 to-blue-900 flex py-4 px-4 justify-between items-center'>
            <div className='flex gap-2 items-center'>
                <BiCategory />
                Categories
            </div>
            <IoIosArrowForward />
        </li>
        <li className='flex gap-2 hover:cursor-pointer hover:text-l hover:text-black hover:font-bold my-6 items-center mx-10 text-gray-500'><BiSolidOffer />Best Offers</li>
        <li className='flex gap-2 hover:cursor-pointer hover:text-l hover:text-black hover:font-bold my-6 items-center mx-10 text-gray-500'><CiShop />Sell with Us</li>
        <li className='flex gap-2 hover:cursor-pointer hover:text-l hover:text-black hover:font-bold my-6 items-center mx-10 text-gray-500'><MdOutlineLocalShipping />Track Order</li>

      </ul>
      </div>

      <div>
        <hr className='mx-6' />
        <ul>
            <li className='flex gap-2 hover:cursor-pointer hover:text-l hover:text-black hover:font-bold my-6 items-center mx-10 text-gray-500'><VscAccount />Account</li>
            <li className='flex gap-2 hover:cursor-pointer hover:text-l hover:text-black hover:font-bold my-6 items-center mx-10 text-gray-500'><IoSettingsOutline />Settings</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
