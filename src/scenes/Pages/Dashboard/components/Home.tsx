import React from 'react';
// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Home from '@/scenes/home';
// import Courses from './components/Courses';
// import Settings from './components/Settings';

import CourseCard from '../../../../scenes/courseCard/CourseCard'
import { useGetCurrentUserQuery } from "@/store/features/Api";

import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();
  const { data, error } = useGetCurrentUserQuery()

  return (
   <>
    <div className='w-full'>
      <div className='md:px-10 md:py-10 px-5 py-5 flex-wrap flex md:gap-10 gap-5'>
       <CourseCard />
      </div>
     
    </div>
  
   
   </>
  )
}

export default Home
