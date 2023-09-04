import React from "react";
import akwunte from "@/assets/akwunte.png";
import ezra from "@/assets/ezra.png";
import nelly from "@/assets/nelly.png";
import Footer from "@/scenes/footer";




const Index =() =>{
    return(
        <>
        <div className='w-screen mt-[4rem]'>
            <article className='flex flex-col md:flex-row'>
                <div className='h-[50vh] md:h-screen'>
                    <img src={nelly} alt="nelson" className='w-[100%] flex items-center justify-center md:w-[54rem] h-full' />
                </div>
                <div className='flex flex-col items-center justify-center md:w-[54rem] bg-[#1C1C1C] h-[50vh] md:h-screen'>
                    <h1 className='text-[4rem] block md:text-[6rem] font-bold text-center'>Nelson Uhembe</h1>
                    <div className='h-[0.4375rem] w-[15.125rem] md:w-[25.125] bg-green block'></div>
                </div>
            </article>

            <article className='flex flex-col md:flex-row-reverse'>
                <div className='h-[50vh] md:h-screen'>
                    <img src={ezra} alt="" className='w-[100%] flex items-center justify-center md:w-[54rem] h-full' />
                </div>
                <div className='flex flex-col items-center justify-center w-[100%] md:w-[54rem] bg-[#1C1C1C] h-[50vh] md:h-screen'>
                    <h1 className='text-[4rem] md:text-[6rem] font-bold text-center'>Ezra Abraham</h1>
                    <div className='h-[0.4375rem] w-[15.125rem] md:w-[25.125] bg-green block'></div>
                </div>
            </article>

            <article className='flex flex-col md:flex-row'>
                <div className='h-[50vh] md:h-screen'>
                    <img src={akwunte} alt="" className='w-[100%] flex items-center justify-center md:w-[54rem] h-full' />
                </div>
                <div className='flex flex-col items-center justify-center w-[100%] md:w-[54rem] bg-[#1C1C1C] h-[50vh] md:h-screen'>
                    <h1 className='text-[4rem] md:text-[6rem] font-bold text-center self-center'>Akwunte' Amali</h1>
                    <div className='h-[0.4375rem] w-[15.125rem] md:w-[25.125] bg-green block'></div>
                </div>
            </article>
        </div>
        <Footer />
        </>
    )

}
export default Index