import React from 'react';
import logo from "@/assets/darkLogo.png";
import {AiOutlinePoweroff} from "react-icons/ai";
import {PiGraduationCapBold} from "react-icons/pi";
import {MdOutlineDashboard} from "react-icons/md";
import {LuBookCopy} from "react-icons/lu";
import {MdOutlineAccountBalanceWallet} from "react-icons/md";
import {AiFillSetting} from "react-icons/ai";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='text-[#0F1318] hidden md:block  w-fit bg-[#ffffff]'>
      <div className='w-5/6 h-screen bg-[#FFFFFF] space-y-5 mt-5'>
        <img className='w-[152px] ml-5 mb-10' src={logo} alt="" />
        <div className='flex flex-col space-y-5 '>

        <Link to="home" className='flex items-center space-x-3  text-[#0F1318] text-[18px]  w-[272px] h-[50px] bg-light-gray  cursor-pointer'>
           <p className='h-full  bg-[#6FC78F] w-2 mr-3'></p>
           <div className='flex  space-x-2 '>
           <PiGraduationCapBold />
            <span>Dashboard</span>
           </div>
        </Link>
        <Link to="classroom" className='flex items-center space-x-3  text-[#0F1318] text-[18px]  w-[272px] h-[50px] hover:bg-light-gray  cursor-pointer'>
           <p className='h-full   w-2 mr-3 hover:bg-green'></p>
           <div className='flex  space-x-2 '>
           <LuBookCopy />
            <span>Course curriculum</span>
           </div>
        </Link>
        <Link to="classroom" className='flex items-center space-x-3  text-[#0F1318] text-[18px]  w-[272px] h-[50px] hover:bg-light-gray  cursor-pointer'>
           <p className='h-full   w-2 mr-3 hover:bg-green'></p>
           <div className='flex  space-x-2 '>
           <LuBookCopy />
            <span>Your instructor</span>
           </div>
        </Link>
        </div>

      </div>

      <div>
        <p className='flex items-center space-x-2 text-[24px] font-semibold text-[#6FC78F]'>
            <AiOutlinePoweroff />
            <span>Logout</span>
        </p>
        <p className='text-[14px]'>All rights reserved@collide.africa</p>
      </div>    
    </div>
  )
}

export default Sidebar
