import React from 'react';
import logo from "@/assets/darkLogo.png";
import {AiOutlinePoweroff} from "react-icons/ai";
import {PiGraduationCapBold} from "react-icons/pi";
import {MdOutlineDashboard} from "react-icons/md";
import {LuBookCopy} from "react-icons/lu";
import {MdOutlineAccountBalanceWallet} from "react-icons/md";
import {AiFillSetting} from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className='text-[#0F1318] hidden md:block p-6 h-[100%] w-fit bg-[#ffffff]'>
      <div className='w-[374px] h-[1064px] bg-[#FFFFFF] space-y-5'>
        <img className='w-[152px]' src={logo} alt="" />
        <div className='flex flex-col space-y-2'>
        <p className='flex items-center space-x-2 text-[#FFFAFA] text-[18px] bg-[#6FC78F] w-[272px] h-[60px] rounded-[5px] pl-4 cursor-pointer'>
            <PiGraduationCapBold />
            <span>Home</span>
        </p>
        <p className='flex items-center space-x-2 text-[#0F1318] text-[18px] w-[272px] h-[60px] rounded-[5px] pl-4 hover:bg-[#6FC78F] duration-500 cursor-pointer'>
            <MdOutlineDashboard />
            <span>Dashboard</span>
        </p>

        <p className='flex items-center space-x-2 text-[#0F1318] text-[18px] w-[272px] h-[60px] rounded-[5px] pl-4 hover:bg-[#6FC78F] duration-500 cursor-pointer'>
            <LuBookCopy />
            <span>Courses</span>
        </p>

        <p className='flex items-center space-x-2 text-[#0F1318] text-[18px] w-[272px] h-[60px] rounded-[5px] pl-4 hover:bg-[#6FC78F] duration-500 cursor-pointer'>
            <MdOutlineAccountBalanceWallet />
            <span>Wallet</span>
        </p>

        <p className='flex items-center space-x-2 text-[#0F1318] text-[18px] w-[272px] h-[60px] rounded-[5px] pl-4 hover:bg-[#6FC78F] duration-500 cursor-pointer'>
            <AiFillSetting />
            <span>Settings</span>
        </p>
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
