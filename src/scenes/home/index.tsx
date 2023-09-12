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
import { Helmet } from "react-helmet-async";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <>
    <Helmet>
      <title>Collide Africa</title>
      <meta name="description" content="Empowering young Africans with the essential skills to excel in the evolving future of work."></meta>
      <link rel="canonical" href="/"/>
    </Helmet>
    <section className=" md:h-screen md:pb-0 bg-black bg-cover  items-center md:py-10  md:justify-between md:flex py-[120px]  " style={{backgroundImage: `url(${Bg})`}}>
     <div className="mx-auto md:w-5/6 md:flex md:justify-between w-full">
     <div className=" md:w-0 w-full p-5 md:p-0">
        <img src={Africa} className=" "/>
      </div>

     <div className=" md:w-1/2 mt-[11%] md:p-0 p-5">
        <div className="md:text-[88px] text-4xl font-semibold">Collide <span className='text-transparent bg-gradient-to-r from-from to-to bg-clip-text'> Africa</span></div>
        <div className="md:text-[25px] text-2xl font-montserrat font-light leading-tight md:mt-5">Empowering young Africans with the essential skills <br/>
to excel in the evolving future of work. </div>

         <button className="h-[55px] bg-green  md:w-[30%]  w-[50%] mt-5 px-2 text-center items-center rounded-[5px] text-[20px] font-semibold">
         Get Started
         </button>
      </div>
      <div className=" md:w-1/2 w-0 p-5 md:p-0">
        <img src={Africa} className=" "/>
      </div>
     </div>      
    </section>
    </>
  );
};

export default Home;
