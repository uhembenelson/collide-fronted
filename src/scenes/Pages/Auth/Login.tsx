import React, {useEffect} from "react";
import africa from "@/assets/africa.png";
import bg from "@/assets/bgb.png";
import { Link , useNavigate } from "react-router-dom";
import {z, ZodType} from "zod";
import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation, useGetCurrentUserQuery} from "@/store/features/Api";
import { useState } from "react";
import signImg from "@/assets/in.png";
import {AiOutlineMail } from "react-icons/ai";
import {RiLockPasswordLine} from "react-icons/ri";
import {AiOutlineEyeInvisible} from "react-icons/ai";
import {AiOutlineEye} from "react-icons/ai";
import { Helmet } from "react-helmet-async";


type FormData = {
    email: string,
    password: string,
    

}





const Index = ()=>{
   
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClick = () => {
        setShowPassword((prevState) => {
            return !prevState;
        })
    }

    const navigate = useNavigate();
    const [errorMsg, SetErrorMsg] = useState("")
    const schema: ZodType<FormData> = z.object({
        email: z.string().min(3).max(30),
        password: z.string().min(5).max(30)
        
    })
    const [login, { isLoading: isChecking , error, data: userdata}] = useLoginMutation();
    const {data} = useGetCurrentUserQuery()

 
   
   

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({resolver: zodResolver(schema)})

    const submitData = async (payload: FormData) => {
    try{
        const response: any = await login(payload)
        if(response.error){
            return SetErrorMsg(response.error.data.message)
        }
        if(response?.data?.accessToken){
            console.log("this is token",response?.data?.accessToken)
            localStorage.setItem("accessToken", response?.data?.accessToken);
            navigate("/dashboard");   
        }
       
    }catch{
        return error
    }
       
    }
    return(
<>
<Helmet>
    

      <title>Leaning</title>
      <meta name="description" content="Log in to Collide Africa to begin your journey into tech"></meta>
      <link rel="canonical" href="/login"/>
    </Helmet>


<div className=" bg-[#1C1C1C] md:px-0 text-black bg-no-repeat bg-cover bg-center md:h-screen pb-10">

             <div className=" mt-[50px] px-2 md:px-0 overflow-hidden  w-[100%] flex flex-col md:flex-row items-center md:items-start justify-around gap-16 md:mx-auto md:w-4/6">

            <div className="bg-[#0F1318]  gap-[50px] flex flex-col md:space-x-12 items-center pt-0 mt-20 rounded-none md:rounded-[50px] md:flex-row">
            <div className=" h-[30%] md:w-[45%]  overflow-hidden rounded-none md:rounded-l-[50px]">
                    <img src={signImg} alt=""/>
                </div>


                <div className=" w-full md:w-1/3 mt-10 md:mt-0 md:mb-0 mb-20 ">
                <form onSubmit={handleSubmit(submitData)} className="flex px-5 md:px-0 flex-col space-y-3 text-white md:text-center">
                <h2 className="text-[30px] md:text-[40px] font-[poppins] self-center md:self-start text-center font-semibold">Sign In</h2>
                <p className="text-[15px] px-4 md:px-0 pb-10 self-center md:self-start text-start">Don't have an account? <Link className="text-[#6FC78F]" to={"/register"}>Click here</Link> to create one</p>
                        <section className="flex flex-col gap-4">
                        {error && 
                        <div className="bg-white h-10 flex items-center gap-5 rounded-sm">
                            <div className="bg-rose-600 w-3 h-full rounded-l-sm"></div>
                            <div className="text-[14px] text-rose-600 text-center bg-white ">{errorMsg}</div>
                        </div>
                        
                        }
                        {errors.email && <span className="text-[.7rem] text-rose-600 text-left">{errors.email.message}</span>}
                        <div className="flex flex-col items-start mb-4">
                            <label className="flex flex-col items-start" htmlFor="email">Email</label>
                            <span className="flex items-center space-x-2 border-b-[2px] border-b-[#a0a0a1] w-full text-[#A0A0A1] text-[15px]">
                            <AiOutlineMail />
                            <input 
                            type="email" 
                            id="email" 
                            placeholder="Enter your email address here" 
                            className="bg-transparent w-full border-0 rounded-none h-[47px] md:h-[52px] indent-0 md:placeholder:text-xl  placeholder:text-sm pb-0 outline-none" 
                            {...register("email")}
                            />
                            </span>
                            </div>
                           
                           {errors.password && <span className="text-[.7rem] text-rose-600 text-left mt-3">{errors.password.message}</span>}
                           <div className="flex flex-col items-start mb-4">
                            <label className="flex flex-col items-start" htmlFor="password">Password</label>
                            <span className="flex items-center space-x-2 border-b-[2px] border-b-[#a0a0a1] w-full text-[#A0A0A1] text-[15px]">
                            <RiLockPasswordLine />
                            <input 
                            type={showPassword ? "text" : "password"}
                            id="password" 
                            placeholder="Enter your password here" 
                            className="bg-transparent w-full focus:bg-transparent border-0 rounded-none h-[47px] md:h-[52px] indent-0 placeholder:text-sm  md:placeholder:text-xl pb-0 outline-none" 
                            {...register("password")}
                            />
                            {!showPassword ? <AiOutlineEyeInvisible className="cursor-pointer text-[1.3rem]" onClick={handleClick} />: <AiOutlineEye className="cursor-pointer text-[1.3rem]" onClick={handleClick} />}
                            </span>
                            </div>
                            <div className="flex justify-between items-center text-[15px]">
                                <span className="flex items-center space-x-2 cursor-pointer">
                                    <input id="remember" type="checkbox" />
                                    <label className="cursor-pointer" htmlFor="remember">Remember me?</label>
                                </span>
                                <span className="text-[#6FC78F]"><a href="#">Forgot password?</a></span>
                            </div>

                            <div>
                                <button className="h-[47px] md:h-[52px] mb-2 bg-[#6FC78F] w-full rounded-[7px] font-semibold text-[1rem] md:text-[20px] hover:scale-95 duration-500">
                                    {
                                        isChecking ?   <span>Loading...</span> : <span>Sign In</span>
                                    }
                                   
                                </button>
                            </div>
                        </section>
                    </form>
                </div>
                </div>
            </div>

           
        </div>
</>

        
    )
}

export default Index;