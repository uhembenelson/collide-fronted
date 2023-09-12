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
import PaymentForm from './components/PaymentForm';
import { useNavigate } from 'react-router-dom';


const Index = () => {
  const navigate = useNavigate();
  const { data, error } = useGetCurrentUserQuery()

  return (
   <>
   {
    data?  <div className=' w-full min-h-[100vh] flex  bg-light-gray'>
    <div>
      <Sidebar />
    </div>
    <div className='w-full'>
      <DashboardNav />
      <div className='md:px-10 md:py-10 px-5 py-5 flex-wrap flex md:gap-10 gap-5'>
       <CourseCard />
      </div>
     
    </div>
  </div> : navigate('/login')
   }
   </>
  )
}

export default Index
