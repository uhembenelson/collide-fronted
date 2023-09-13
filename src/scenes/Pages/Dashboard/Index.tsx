import React from 'react';
// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Home from '@/scenes/home';
// import Courses from './components/Courses';
// import Settings from './components/Settings';
import Sidebar from './sharedComponent/Sidebar';
import DashboardNav from './sharedComponent/DashboardNav';
import CourseCard from '../../courseCard/CourseCard'
import { useGetCurrentUserQuery } from "@/store/features/Api";
import { useNavigate, Outlet, Link } from 'react-router-dom';
import Navbar from './components/Navbar';



const Index = () => {
  const navigate = useNavigate();
  const { data, error } = useGetCurrentUserQuery()

  return (
   <>
   
      <div className=' w-full min-h-[100vh]   bg-light-gray'>
        <div className='flex'>
        <Sidebar />
        
        <div className='flex-col w-full'>
          <Navbar/>
          <div>
             <Outlet/>
          </div>
        </div>
        </div>

       
       
     




      {/* <Sidebar />
      <DashboardNav />
      </div>
     
       <Outlet/> */}

   
  
  </div>
   
   </>
  )
}

export default Index
