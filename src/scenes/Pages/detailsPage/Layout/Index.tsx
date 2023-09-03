import { useState } from "react";
import { useLocation } from 'react-router-dom'
import Card from "./Card"
import { useAppSelector } from "@/store/store";
const Index = ()=>{
   const data = useAppSelector((state)=> state.CourseDetail.courseDetails[0]);

   console.log("this is my data",data)
    const [toggle, setToggle] = useState(false)
   
    return (<div className="md:flex flex-row md:justify-between  md:px-40 py-10 px-3 text-black">

        <div className="md:w-[50%]">
            <p className="text-xl font-semibold mt-20">Curriculum</p>
            <div className="bg-green w-20 h-[4px] mt[2px] rounded-sm"></div>
            <p className="text-xl font-semibold mt-10"> What you'll learn</p>

            <div className="mt-3 text-[14px] md:text-[15px] text-gray mr-4">
            {data.description}
            </div>
            <div className="mt-5 flex flex-row justify-between">
               <div className="ml-3 text-green font-semi-bold w-[70%]">
                Content
               </div>

               <div className="mr-[145px] text-green font-semi-bold">
                Duration
               </div>
            </div>

            {
               data.outline?.map((item: any)=>{
                  return(
                     <>
                     <div className="mt-3 bg-white h-[55px] mr-4 rounded-sm flex items-center ml-5">
               <p className="md:text-[13px] text-[12px] font-semibold w-[70%] text-black ml-5"> {item.tile}</p>
               <div className="text-[13px] font-semibold ml-5" > {item.time}</div>
            </div>
            <div className="mt-3 mr-4   px-4  rounded-sm ">
               {
                  item.content?.map((c: any)=>{
                   return(
                     <p className="text-[12px]  w-full mt-2 ml-5 ">{c.title}</p>
                   )

                  })
               }
              
               
            </div>
                     </>
                  )


               })
            }


            

            

            
            



        </div>

        <div className="mt-20 w-[100%] md:w-[50%]  iitems-center justify-around">
           <div className="md:ml-[20%]">
            <div className="text-2xl font-normal ">Simple, transparent pricing</div>
            <div className="mt-3 text-[14px] text-black">
            we are totally transparent with our pricing and offer monthly and full course subscriptions to make learning accessible.
            </div>
           </div>
           <Card data={data} open={undefined} onClose={undefined} children={undefined}/> 
        </div>


    </div>);
}

export default Index