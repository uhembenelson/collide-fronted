import React from 'react';
import {AiOutlineSearch } from "react-icons/ai";
import {FaDollarSign} from "react-icons/fa";
import {IoMdNotificationsOutline} from "react-icons/io";
import {BsPerson} from "react-icons/bs";

const DashboardNav = () => {
  return (
    <div className='hidden md:block'>
      <div className='flex items-center justify-between h-[74px] w-full text-[14px] md:px-10 mt-5'>
          <form action="" className=' flex items-center bg-white h-[50px] rounded-[5px] w-1/3 hover:shadow-md duration-500'>
            <AiOutlineSearch className='text-[#A0A0A1] w-[24px] bg-white h-[24px] m-2' />
            <input type="search" className='bg-transparent outline-none text-gray border-0 indent-2 w-full ' placeholder='Seach for courses here' />
            <button className='bg-[#6FC78F] h-full px-10  rounded-r-[5px] duration-500 text-white '>Search</button>
          </form>
          <span className='flex items-center bg-[#6FC78F] rounded-full p-2 space-x-2 cursor-pointer hover:scale-95 duration-500'>
            <div className='bg-[#bff0d1] p-2 rounded-full'>
            <FaDollarSign className='h-full rounded-full text-black' />
            </div>
            <p className='text-white px-2'>Balance: 0</p>
          </span>
          <div className='flex space-x-6'>
            <span className='bg-[#bff0d1] p-2 rounded-full text-black text-xl font-semibold cursor-pointer hover:scale-105 duration-500' >
              <IoMdNotificationsOutline />
            </span>
            <span className='bg-[#bff0d1] p-2 rounded-full text-black text-xl font-semibold cursor-pointer hover:scale-105 duration-500' >
              <BsPerson />
            </span>
          </div>
        </div>
    </div>
  )
}

export default DashboardNav
