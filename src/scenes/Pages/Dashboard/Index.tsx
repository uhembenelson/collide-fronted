import React from 'react';
// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Home from '@/scenes/home';
// import Courses from './components/Courses';
// import Settings from './components/Settings';
import Sidebar from './sharedComponent/Sidebar';
import DashboardNav from './sharedComponent/DashboardNav';
import "./d-style.css"

const Index = () => {
  return (
    <>
    {/* <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='courses' element={<Courses />}  />
            <Route path='settings' element={<Settings />} />
        </Routes>
    </BrowserRouter> */}
    <div>
        Dashboard
    </div>
    </>
    
  )
}

export default Index
