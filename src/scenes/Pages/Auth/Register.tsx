import React from "react";
import bg from "@/assets/bgb.png";
import signImg from "@/assets/in.png";
import { Link } from "react-router-dom";
import {z, ZodType} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { useSignupMutation } from "@/store/features/Api";
import { useState } from "react";
import {AiOutlineMail} from "react-icons/ai";
import {RiLockPasswordLine} from "react-icons/ri";
import {MdOutlineDriveFileRenameOutline} from "react-icons/md";
import {AiOutlineEyeInvisible} from "react-icons/ai";
import {AiOutlineEye} from "react-icons/ai";
import "./style.css";
import { Helmet } from "react-helmet-async";

type FormData = {
    firstName: string,
    email: string,
    password: string
};

const Index =()=>{
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClick = () => {
        setShowPassword((prevState) => {
            return !prevState;
        })
    }

    const [errorMsg, SetErrorMsg] = useState("")
    const [sucessMsg, SetSucessMsg] = useState("")
    const schema: ZodType<FormData> = z.object({
        firstName: z.string().min(3).max(30),
        email: z.string().email(),
        password: z.string().min(3).max(100)
    })
    const [signup, { isLoading: isChecking , error, data}] = useSignupMutation();

    const {register, handleSubmit, formState:{errors}} = useForm<FormData>({resolver: zodResolver(schema)});

    const submitData = async (payload: FormData) => {
        try{
            const response: any = await signup(payload)
            console.log("response", response.data);
            if(response?.error){
               return SetErrorMsg(response.error.data.error)
            }

           
            
            if(response.data.msg === "Registeration Successful"){
                console.log(response)
             return SetSucessMsg(response?.data.msg)
            }
        
        }catch{
            return error
        }
    }

    return(
        <>
    <Helmet>
    <title>Enroll now</title>
    <meta name="description" content="Learn highly sought
after tech skills
without any hassle.
"></meta>
    <link rel="canonical" href="/register"/>
  </Helmet>
        
 <div className=" bg-[#1C1C1C] md:px-0 text-black bg-no-repeat bg-cover bg-center md:h-screen pb-10 mt-5">
            <div className=" mt-[60px] px-2 md:px-0 overflow-hidden h-fit w-[100%] flex flex-col md:flex-row items-center md:items-start justify-around gap-16 md:mx-auto md:w-4/6">
                <div className="bg-[#0F1318]  gap-20 flex flex-col md:space-x-12 items-center pt-0 mt-20 rounded-none md:rounded-[50px] md:flex-row">
                <div className=" h-[30%] md:w-[45%]  overflow-hidden rounded-none md:rounded-l-[50px]">
                    <img src={signImg} alt=""/>
                </div>
                {/* <div className="  md:w-[47%] overflow-hidden rounded-none md:rounded-[50px]">
                    <img src={signImg} alt="" className="overflow-hidden"/>
                </div> */}
                <div className=" w-full md:w-1/3 md:mt-0 md:mb-0 mb-20 ">
                    <form onSubmit={handleSubmit(submitData)} className="flex flex-col space-y-3 text-white md:text-center">
                        <h2 className="text-[30px] md:text-[40px] font-[poppins] self-center md:self-start text-center font-semibold ">Sign Up</h2>
                        <p className="text-[15px] px-4 md:px-0 pb-10 self-center md:self-start text-start">Already have an account? <Link className="text-[#6FC78F]" to={"/Login"}>Click here</Link> to sign in</p>
                        {error && 
                        <div className="bg-white h-10 flex items-center gap-5 rounded-sm md:m-0  m-5">
                            <div className="bg-rose-600 w-3 h-full rounded-l-sm"></div>
                            <div className="text-[14px] text-rose-600 text-center bg-white ">{errorMsg}</div>
                        </div>
                        
                        }
                          {data && 
                        <Link to="/login">
                        <div className="bg-white h-10 flex items-center gap-5 rounded-sm md:m-0  m-5">
                            <div className="bg-green w-3 h-full rounded-l-sm "></div>
                            <div className="text-[14px] text-black text-center bg-white ">{sucessMsg}, login to procced</div>
                        </div>
                        </Link>
                        
                        }
                        <div className="flex flex-col mt-4 gap-4 p-6 md:p-0">
                            <div className="flex flex-col items-start mb-4">
                            <label className="text-[15px]" htmlFor="name">Name</label>
                            <span className="flex items-center space-x-2 border-b-[2px] border-b-[#a0a0a1] w-full text-[#A0A0A1] text-[15px]">
                            <MdOutlineDriveFileRenameOutline />
                            <input 
                            type="text" 
                            id="name"
                            placeholder="Enter your name here" 
                            className="bg-transparent w-full border-0 rounded-none h-[47px] md:h-[52px] indent-0 placeholder:text-[15px] placeholder:text-xl pb-0 outline-none" 
                            {...register("firstName")}
                            />
                            </span>
                            {errors.firstName && <span className="text-[.7rem] text-rose-600">{errors.firstName.message}</span>}
                            </div>

                            <div className="flex flex-col items-start mb-4">
                            <label className="flex flex-col items-start" htmlFor="email">Email</label>
                            <span className="flex items-center space-x-2 border-b-[2px] border-b-[#a0a0a1] w-full text-[#A0A0A1] text-[15px]">
                            <AiOutlineMail />
                            <input 
                            type="email" 
                            id="email" 
                            placeholder="Enter your email address here" 
                            className="bg-transparent w-full border-0 rounded-none h-[47px] md:h-[52px] indent-0 placeholder:text-[15px] placeholder:text-xl pb-0 outline-none" 
                            {...register("email")}
                            />
                            </span>
                            {errors.email && <span className="text-[.7rem] text-rose-600">{errors.email.message}</span>}
                            </div>

                            <div className="flex flex-col items-start mb-4">
                            <label className="flex flex-col items-start" htmlFor="password">Password</label>
                            <span className="flex items-center space-x-2 border-b-[2px] border-b-[#a0a0a1] w-full text-[#A0A0A1] text-[15px]">
                            <RiLockPasswordLine />
                            <input 
                            type={showPassword ? "text" : "password"} 
                            id="password" 
                            placeholder="Enter your password here" 
                            className="bg-transparent w-full focus:bg-transparent border-0 rounded-none h-[47px] md:h-[52px] indent-0 placeholder:text-[15px] placeholder:text-xl pb-0 outline-none" 
                            {...register("password")}

                            />
                            {!showPassword ? <AiOutlineEyeInvisible className="cursor-pointer text-[1.3rem]" onClick={handleClick} />: <AiOutlineEye className="cursor-pointer text-[1.3rem]" onClick={handleClick} />}
                            </span>
                            {errors.password && <span className="text-[.7rem] text-rose-600">{errors.password.message}</span>}
                            </div>
                            <div className="flex justify-between items-center text-[15px]">
                                <span className="flex items-center space-x-2 cursor-pointer">
                                    <input id="remember" type="checkbox" />
                                    <label className="cursor-pointer" htmlFor="remember">Remember me?</label>
                                </span>
                                <span className="text-[#6FC78F]"><a href="#">Forgot password?</a></span>
                            </div>

                            <div className="mt-8">
                                <button className="h-[47px] md:h-[52px] mb-2 bg-[#6FC78F] w-full rounded-[7px] font-semibold text-[1rem] md:text-[20px] hover:scale-95 duration-500">
                                {
                                        isChecking ?   <span>Loading...</span> : <span>Sign Up</span>
                                    }
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>

        </>


       
    )
}

export default Index;