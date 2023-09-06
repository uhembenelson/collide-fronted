import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Benefits from "@/scenes/benefits";
import Footer from "@/scenes/footer";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Modal from 'react-modal';
import { Route, Routes, createRoutesFromElements, createBrowserRouter, RouterProvider, Outlet, Link} from 'react-router-dom';
import Landing from "./Landing";
import Details from "../src/scenes/Pages/detailsPage"
import useMediaQuery from "@/hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Aboutus from "../src/scenes/Pages/Aboutus/Index"
import Team from "../src/scenes/Pages/Team/Index"
import Login from "../src/scenes/Pages/Auth/Login"
import Register from "../src/scenes/Pages/Auth/Register"
import Dashboard from "../src/scenes/Pages/Dashboard/Index"





function App() {
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route path="/details" element={<Details/>}/>
      <Route index element={<Landing/> }/>
      <Route path="/home" element={<Landing/>}/>
      <Route path="/about-us" element={<Aboutus/>}/>
      <Route path="our-team" element={<Team/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="Dashboard" element={<Dashboard/>}/>


     
    </Route>
  )
)
return (
  <div>
    <RouterProvider router={router} />
  </div>
)
}

export default App;

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};
const Root =()=>{
  const [selectedPage, setSelectedPage] = useState<SelectedPage>( SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return(
    
    <div className="text-white">
      <>
      <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full  py-6 bg-black`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img alt="logo" src={Logo} className="md:w-[150px] w-[100px]" />

            {/* RIGHT SIDE */}
          <div>
          {isAboveMediumScreens ? (
              <div className=" flex justify-between gap-[19rem]">

              

               <div className={`${flexBetween} gap-16 text-sm  mr-10`}>
                  <Link to="/"> Home</Link>
                  <Link to="/about-us">About us</Link>
                  <Link to="/our-team">Our team</Link>
                </div>

                <div className="flex gap-12 text-sm">
                  <div className=" hover:bg-green h-[30px] text-center flex items-center px-5 rounded-sm">
                  <Link to="/login">Login</Link>
                  </div>

                  <div className=" hover:bg-green h-[30px] text-center flex items-center px-5 rounded-sm">
                  <Link to="/register">Register</Link>
                  </div>
                  
                </div>
 
              </div>
            ) : (
              <button
                className="rounded-full bg-green p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-green drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link to="/">Home</Link>
            <Link to="/about-us">About us</Link>
            <Link to="/our-team">Our team</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div> 
        </div>
      )}
    </nav>

    <div>
      <Outlet/>
    </div>
      </>
       
    </div>
     
  

   
  )
}




