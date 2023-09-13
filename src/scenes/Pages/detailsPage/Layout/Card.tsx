import React, { Children, useEffect, useState } from "react";
import db from "@/firebase";
import Web from "@/assets/web.png";
import { collection, addDoc, doc } from "firebase/firestore";
import Logo2 from "@/assets/logo2.png";
import { PaystackButton } from "react-paystack";
import Modalc from "../../../modal/index";
import { Link, useNavigate } from "react-router-dom";


import Tw from "@/assets/t.png";
import In from "@/assets/i.png";
import Fb from "@/assets/f.png";
import Ig from "@/assets/i.png";

import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { async } from "@firebase/util";

type Props = {
  open: any;
  onClose: any;
  children: any;
  data: any;
};
import { useGetCurrentUserQuery, useRegisterCourseMutation } from "@/store/features/Api";

const CourseCard = ({ onClose, children, data }: Props) => {
  const navigate = useNavigate()
  const { data:currentUser, error } = useGetCurrentUserQuery()
  const [registerCourse, {isError, isLoading, isSuccess, isUninitialized, data:result}] = useRegisterCourseMutation()
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [course, setCourse] = useState(
    "Introduction to frontend summer classes"
  );
  const [open, setOpen] = useState(false);
  const [errormsg, setErrormsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [courseid, setCourseId] = useState("");
  const [showm, setShowm] = useState(true);
  const [studyMode, setStudyMode] = useState("")
  const [amountPaid, setAmountPaid] = useState("")
  const [paymentType, setPaymentType] = useState("")
  const [fullPayment, setFullpayment] = useState(false)
  const [price, setPrice] = useState(25000)
  const [courseFee, setCourseFee] = useState("")
  const [balance, setBalance] = useState("")
  const [registeredCourse, setRegisteredCourse] = useState([])
  const [msg, setMsg] = useState("")
  console.log(studyMode)
    
  const showy = () => {
    setShowm(false);
   
  };




  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  });

  //     const data = [
  //         {
  //         id: "1",
  //        title:"Introduction to Frontend Development- (Summer classes) ",
  //         description:"In this course we will go over the concepts of Design thinking, User Interface Design with Figma, introduction to the web, HTML5, CSS3, Javascript, react js, and tailwind,",
  //         location:"Onsite",
  //         price:"N 25,000",
  //         duration: "30 days",
  //         status: "Enroll Now",
  //         imageURL: Web,
  //         icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  //         <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
  //       </svg>

  //     },
  // ]
  const enroll = async () => {
    //
    const payload = {
      studyMode,
      amountPaid:price,
      paymentType,
      status:"active",
      courseFee: data.price,
      balance: parseInt(data.price) * data.duration - price,
      registeredCourse: data
    }

    try{
      setLoading(true);
      const response: any = await  registerCourse(payload)
      console.log("this load",response)
      if(response.data.msg === "Course registerd"){
        setLoading(false);
        setMsg(response.data.msg)
      }

    }catch(error){
      alert("")
    }


   



    // const collectionRef = collection(db, "users");
    // setLoading(true);
    // console.log("working here");
    // const docRef = await addDoc(collectionRef, payload);
    // if (docRef.id) {
    //   setLoading(false);
    //   setCourseId(docRef.id);
    // }
  };

  // you can call this function anything
  const handlePaystackSuccessAction = (reference: any) => {
    setLoading(true);
    enroll();
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };
  const config = {
    reference: new Date().getTime().toString(),
    email:currentUser?.email,
    amount: price * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    // pk_test_299940f7bef87eb2b0d1e584e89665eec91be4f9
    // pk_live_1d303d36ff533def3dfa814bbf3bd69664fa84c5
    publicKey: "pk_live_1d303d36ff533def3dfa814bbf3bd69664fa84c5",
  };

  const componentProps = {
    ...config,
    text: `${loading ? "loading" : "Proceed"}`,
    onSuccess: (reference: any) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return (
    <>
      <div className=" w-full">
        {[data]?.map((item: any) => {
          return (
            <>
              <div className="mt-6 flex  md:ml-[20%]">
                <div
                  onClick={() => {
                    setShowm(true),
                    setPrice(item.price  - ((parseInt(item.price)) / 100) *10),
                    setPaymentType("partTime")
                  }}
                  className={`p-3 ${
                    showm ? "bg-green text-white " : "bg-white text-black "
                  }  cursor-pointer rounded-l-[5px] text-[14px] text-white`}
                >
                  Pay monthly
                </div>

                <div
                  onClick={()=>{showy(), 
                    setPrice(item.price * item.duration -
                      ((parseInt(item.price) * parseInt(item.duration)) /
                        100) *
                        10),
                        setPaymentType("fulltime")
                  }}
                  className={`p-3 ${
                    !showm ? "bg-green text-white " : "bg-white text-black "
                  }  cursor-pointer rounded-r-[5px] text-[14px] text-white`}
                >
                  Full payment
                  <span className="ml-2 rounded-md border border-green  p-1 px-2">
                    Save 10%
                  </span>
                </div>
              </div>

              {showm ? (
                <div
                  key={item.id}
                  className="mt-4 flex w-full flex-col justify-between rounded-[10px] border-2 border-darker-gray  bg-white md:ml-[20%] md:w-[70%]"
                >
                  <div className="">
                    <img
                      src={item.imageURL}
                      className="mt-3 h-[200px] w-full rounded-[10px] bg-cover p-2 px-5"
                    />
                    <div className="px-5 py-5 font-semibold text-black md:text-[19px] ">
                      {item.title}
                    </div>
                    <div className="px-5 text-[12px] font-light   text-gray-400 line-clamp-3 md:text-[14px] ">
                      {item.description}
                    </div>
                  </div>
                  <div className="">
                    <div className="mt-3 flex  justify-between  px-5 text-black ">
                      <div className="text-[10px] font-semibold text-green md:text-[13px]">
                        {" "}
                        Location : {item.location}
                      </div>
                     
                    <div>
                      <div className="text-[10px] font-semibold text-black  md:text-[13px]">
                        {" "}
                        Price :{" "}
                        {formatter.format( item.price  - ((parseInt(item.price)) / 100) *10 )
                        
                        }
                        {" "}
                      </div>

                      <div className="text-[10px] font-semibold text-black  md:text-[13px] line-through">
                        {formatter.format(item.price)} 
                      </div>

                      </div>
                    </div>















                    <div className=" ">
                      {item?.status === "Enroll" ? (
                        <button
                          onClick={() => {
                            
                            currentUser? setOpen(true) : navigate('/login')
                          }}
                          className="mt-5 flex w-full flex-row justify-center rounded-br-md rounded-bl-md bg-green py-5 px-5  "
                        >
                          <div className="flex gap-5">
                            <div className="md:text-1xl text-[15px] font-semibold text-white ">
                              {item.status}
                            </div>
                          </div>
                        </button>
                      ) : (
                        <div className="flex flex-row justify-between py-5 px-5 ">
                          <div className="flex items-center justify-center gap-5">
                            <div className="md:text-1xl text-[15px] font-semibold text-black ">
                              {item.status}
                            </div>
                          </div>

                          <div className="md:text-1xl text-[14px] font-semibold text-green md:text-[15px]">
                            Read More
                          </div>
                        </div>
                      )}
                    </div>



                  </div>
                </div>
              ) : (
                <div
                  key={item.id}
                  className="mt-4 flex w-full flex-col justify-between rounded-[10px] border-2 border-darker-gray  bg-white md:ml-[20%] md:w-[70%]"
                >
                  <div className="">
                    <img
                      src={item.imageURL}
                      className="mt-3 h-[200px] w-full rounded-[10px] bg-cover p-2 px-5"
                    />
                    <div className="px-5 py-5 font-semibold text-black md:text-[19px] ">
                      {item.title}
                    </div>
                    <div className="px-5 text-[12px] font-light   text-gray-400 line-clamp-3 md:text-[14px] ">
                      {item.description}
                    </div>
                  </div>
                  <div className="">
                    <div className="mt-3 flex  justify-between  px-5 text-black ">
                      <div className="text-[10px] font-semibold text-green md:text-[13px]">
                        {" "}
                        Location : {item.location}
                      </div>

                      <div>
                      <div className="text-[10px] font-semibold text-black  md:text-[13px]">
                        {" "}
                        Price :{" "}
                        {formatter.format(
                          item.price * item.duration -
                            ((parseInt(item.price) * parseInt(item.duration)) /
                              100) *
                              10
                        )
                        
                        }{" "}
                      </div>

                      <div className="text-[10px] font-semibold text-black  md:text-[13px] line-through">
                        {formatter.format(item.price * item.duration)} 
                      </div>

                      </div>
                     
                    </div>



                    <div className=" ">
                      {item?.status === "Enroll" ? (
                        <button
                          onClick={() =>{
                            currentUser?  setOpen(true) :  navigate('/login')
                           

                            
                             }
                            
                            
                           
                          
                          }
                          className="mt-5 flex w-full flex-row justify-center rounded-br-md rounded-bl-md bg-green py-5 px-5  "
                        >
                          <div className="flex gap-5">
                            <div className="md:text-1xl text-[15px] font-semibold text-white ">
                              {item.status}
                            </div>
                          </div>
                        </button>
                      ) : (
                        <div className="flex flex-row justify-between py-5 px-5 ">
                          <div className="flex items-center justify-center gap-5">
                            <div className="md:text-1xl text-[15px] font-semibold text-black ">
                              {item.status}
                            </div>
                          </div>

                          <div className="md:text-1xl text-[14px] font-semibold text-green md:text-[15px]">
                            Read More
                          </div>
                        </div>
                      )}
                    </div>



                  </div>
                </div>
              )}

              <div className="md:ml-[20%] mt-10">
              <div className="text-2xl font-normal ">Meet your teacher</div>
              <img src={item.image} className="md:mr-[20%] md:w-[87%] mt-10"/>
              <div className="text-2xl font-normal mt-6 ">{item.name}</div>
              <div className="mt-3 text-[14px] text-black md:w-[88%]" >
              {item.bio}
            </div>
            <div className="flex gap-3 mb-5 mt-5">
              {
                item.socials.map((i: any)=>{
                  return(
                    <a href={i.url} target="_blank">
                      <img src={i.icon}  className="w-[30.5px] h-[30px]"></img>  
                    </a>
                   
                  )
                })
              }
           
            
          </div>
              </div>
            </>
          );
        })}

        <Modalc
          open={open}
          onClose={() => {
            setOpen(false);
            setCourseId("");
          }}
        >
          {msg ? (
            <div>
              <div className="flex items-center justify-center ">
                <img src={Logo2} className="w-[60px] rounded-[360px]" />
              </div>
              <div className="mt-6 text-center text-[14px] text-gray-400">
                Thank you for registering, classes start for both online and onsite users on the 3rd of October, we look forward to
                seeing you soon,  Our office is conveniently located at N0: 237, JOS SOUTH SHOPPING COMPLEX ABATTOIR. JOS PLATEAU, call us on +23408106119178 or email us
                help@collide.africa for info
              </div>
            </div>
          ) : (
            <div className="text-black rounded-sm">
              <div className="flex items-center justify-center">
                <img src={Logo2} className="w-[60px] rounded-[360px]" />
              </div>
              <div className="mt-3 text-[14px] text-red">{errormsg}</div>
            
              <div className="mt-3">
                <label >Select your study mode </label>
                <select 
                value={studyMode} // ...force the select's value to match the state variable...
                onChange={e => setStudyMode(e.target.value)} 
                className="bg-gray-50 h-[45px] w-full rounded-[5px] border border-gray-400 p-3 text-gray-400 focus:border-green focus:ring-green mt-2">
                  <option value="onsite" >OnSite</option>
                  <option value="online" >Online</option>
                </select>
               
              </div>
             
              <PaystackButton
                className="hover mt-4 h-[45px] w-full rounded-[5px] bg-green text-white"
                {...componentProps}
              />

              
            </div>
          )}
        </Modalc>
      </div>
    </>
  );
};

export default CourseCard;
