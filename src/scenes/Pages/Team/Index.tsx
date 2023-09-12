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
                    <img src={nelly} alt="nelson" className='flex items-center justify-center md:w-[54rem] md:h-full' />
                </div>
                <div className='flex flex-col items-center justify-center md:w-[54rem] bg-[#1C1C1C] h-[20vh] md:h-screen '>
                    <h1 className='text-[3rem] block md:text-[4rem] text-left leading-[96px] md:px-0 px-2 md:font-bold'>Nelson Uhembe</h1>
                    <div className='h-[0.4375rem] w-[300px] md:w-[25.125] bg-green block'></div>
                </div>
            </article>
            

            <article className='flex flex-col md:flex-row-reverse'>
                <div className='h-[50vh] md:h-screen'>
                    <img src={ezra} alt="" className='w-[100%] flex items-center justify-center md:w-[54rem] md:h-full' />
                </div>
                <div className='flex flex-col items-center justify-center md:w-[54rem] bg-[#1C1C1C] h-[20vh] md:h-screen'>
                    <h1 className='text-[3rem] block md:text-[4rem] text-left leading-[96px] md:px-0 px-2 md:font-bold'>Ezra Abraham</h1>
                    <div className='h-[0.4375rem] w-[15.125rem] md:w-[25.125] bg-green block'></div>
                </div>
            </article>

            <article className='flex flex-col md:flex-row'>
                <div className='h-[50vh] md:h-screen'>
                    <img src={akwunte} alt="" className='w-[100%] flex items-center justify-center md:w-[54rem] h-full' />
                </div>
                <div className='flex flex-col items-center justify-center md:w-[54rem] bg-[#1C1C1C] h-[20vh] md:h-screen'>
                    <h1 className='text-[3rem] block md:text-[4rem] text-left leading-[96px] md:px-0 px-2 md:font-bold'>Akwunte' Amali</h1>
                    <div className='h-[0.4375rem] w-[15.125rem] md:w-[25.125] bg-green block'></div>
                </div>
            </article>
        </div>
        <Footer />
        </>
    )

}
export default Index