import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Bg from "@/assets/bgb.png"
import Africa from "@/assets/africa.png"

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section className=" md:h-screen md:pb-0 bg-black bg-cover  items-center md:py-10  md:justify-between md:flex py-[120px]  " style={{backgroundImage: `url(${Bg})`}}>

    
     <div className="mx-auto w-5/6 flex justify-between">
     <div className=" w-1/2 mt-[11%]">
        <div className="text-[88px] font-semibold">Collide <span className='text-transparent bg-gradient-to-r from-from to-to bg-clip-text'> Africa</span></div>
        <div className="text-[25px] font-montserrat font-light leading-tight">Start your tech journey<br/>
         with us today </div>

         <button className="h-[55px] bg-green  w-[30%] mt-5 px-2 text-center items-center rounded-[5px] text-[20px] font-semibold">
         Get Started
         </button>
      </div>
      <div className=" w-1/2">
        <img src={Africa} className=" "/>
      </div>
     </div>
     
    




      
              
              
    </section>
  );
};

export default Home;
