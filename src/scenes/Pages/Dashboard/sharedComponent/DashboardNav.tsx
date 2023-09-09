import React from 'react';
import {AiOutlineSearch } from "react-icons/ai";
import {FaDollarSign} from "react-icons/fa";
import {IoMdNotificationsOutline} from "react-icons/io";
import {BsPerson} from "react-icons/bs";

const DashboardNav = () => {
  return (
    <div>
      <div className='flex items-center justify-between h-[74px] w-full text-[14px]'>
          <form action="" className='flex items-center bg-white h-[45px] rounded-[5px] max:w-[602px] hover:shadow-md duration-500'>
            <AiOutlineSearch className='text-[#A0A0A1] w-[24px] bg-white h-[24px] m-2' />
            <input type="search" className='bg-transparent outline-none text-gray border-0 indent-2 w-full' placeholder='Seach for courses here' />
            <button className='bg-[#6FC78F] h-full px-4 pr-4 rounded-r-[5px] duration-500'>Search</button>
          </form>
          <span className='flex items-center bg-[#6FC78F] rounded-full p-2 space-x-2 cursor-pointer hover:scale-95 duration-500'>
            <div className='bg-[#bff0d1] p-2 rounded-full'>
            <FaDollarSign className='h-full rounded-full text-black' />
            </div>
            <p>Balance: 150,000</p>
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
