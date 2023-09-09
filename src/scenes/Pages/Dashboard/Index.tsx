import React from 'react';
// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Home from '@/scenes/home';
// import Courses from './components/Courses';
// import Settings from './components/Settings';
import Sidebar from './sharedComponent/Sidebar';
import DashboardNav from './sharedComponent/DashboardNav';
import "./d-style.css"
import CourseCard from '../../courseCard/CourseCard'
import { useGetCurrentUserQuery } from "@/store/features/Api";



const Index = () => {
 // const { data: currentUser, isError } = useGetCurrentUserQuery();
  return (
    // <BrowserRouter>
    //     <Routes>
    //         <Route path='/' element={<Home />} />
    //         <Route path='courses' element={<Courses />}  />
    //         <Route path='settings' element={<Settings />} />
    //     </Routes>
    // </BrowserRouter>
    <div className=' w-full min-h-[100vh] flex  bg-light-gray'>
      <div>
        <Sidebar />
      </div>
      <div className='w-full'>
        <DashboardNav />
        <div className='px-10 py-10 flex-wrap flex gap-10'>
         <CourseCard />
        </div>
      </div>
    </div>
  )
}

export default Index
