import React from 'react';
// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Home from '@/scenes/home';
// import Courses from './components/Courses';
// import Settings from './components/Settings';

import CourseCard from '../../../../scenes/courseCard/CourseCard'
import { useGetCurrentUserQuery } from "@/store/features/Api";

import { useNavigate } from 'react-router-dom';



const Index = () => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetCurrentUserQuery()
  console.log("this is data",data?.Courses[0].status)

  return (
   <>
    <div className='w-full'>
      <div className='md:px-10 md:py-10 px-5 py-5 flex-wrap flex md:gap-10 gap-5 justify-center items-center'>
      {
        isLoading ?  (<h1>Loading...</h1>) :

        <>
        {
          data?.Courses[0]?.status? <div className="">
          <div>Your course  curriculum will be ready in the coming days stay tuned   </div>
        </div> :

        <div className="justify-center flex items-center text-center">
          <div className='justify-center '>Your have not registered for any course yet?</div>
        </div>
        }
        
        </>
      }
       

        
         
      </div>
     
    </div>
  
   
   </>
  )
}

export default Index
