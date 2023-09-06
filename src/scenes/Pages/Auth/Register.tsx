import React from "react";
import africa from "@/assets/africa.png";
import bg from "@/assets/bgb.png";
import { Link } from "react-router-dom";
import {z, ZodType} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { useSignupMutation } from "@/store/features/Api";
import { useState } from "react";
type FormData = {
    firstName: string,
    lastName: string,
    phoneNumber: number,
    email: string,
    password: string
};

const Index =()=>{
    const [errorMsg, SetErrorMsg] = useState("")
    const [sucessMsg, SetSucessMsg] = useState("")
    const schema: ZodType<FormData> = z.object({
        firstName: z.string().min(3).max(30),
        lastName: z.string().min(3).max(30),
        phoneNumber: z.number().min(3).max(30),
        email: z.string().email(),
        password: z.string().min(3).max(30)
    })
    const [signup, { isLoading: isChecking , error, data}] = useSignupMutation();

    const {register, handleSubmit, formState:{errors}} = useForm<FormData>({resolver: zodResolver(schema)});

    const submitData = async (payload: FormData) => {
        try{
            const response: any = await signup(payload)
            console.log("response", response.error.data.error);
            if(response?.error){
               return SetErrorMsg(response.error.data.error)
            }
            
            if(response?.data.msg === "Register/SignUp SUCCESSFUL!!!!"){
                console.log(response)
             return SetSucessMsg(response.data.msg)
            }
        
        }catch{
            return error
        }
    }

    return(
        <div style={{backgroundImage: `url(${bg})`}} className="mt-[4rem] md:px-0 text-black bg-no-repeat bg-cover bg-center md:h-screen">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-around gap-16 md:mx-auto md:w-5/6 px-5">
                <div className=" md:w-1/2 md:mt-20 mt-20">
                    <img src={africa} alt=""/>
                </div>
                <div className=" w-full md:w-1/3 md:mt-20 md:mb-0 mb-20">
                    <form onSubmit={handleSubmit(submitData)} className="flex flex-col space-y-3 text-white md:text-center">
                        <h2 className="text-[30px] md:text-[50px] text-center font-semibold">Get Started</h2>
                        {error && 
                        <div className="bg-white h-10 flex items-center gap-5 rounded-sm">
                            <div className="bg-rose-600 w-3 h-full rounded-l-sm"></div>
                            <div className="text-[14px] text-rose-600 text-center bg-white ">{errorMsg}</div>
                        </div>
                        
                        }
                          {data && 
                        <div className="bg-white h-10 flex items-center gap-5 rounded-sm">
                            <div className="bg-green w-3 h-full rounded-l-sm"></div>
                            <div className="text-[14px] text-black text-center bg-white ">{sucessMsg}</div>
                        </div>
                        
                        }
                        <section className="flex flex-col gap-4">
                            <input 
                            type="text" 
                            placeholder="First Name" 
                            className=" rounded-[7px] h-[47px] md:h-[52px] indent-4 placeholder:text-[1rem] placeholder:text-xl outline-none text-gray bg-white focus:bg-slate-200" 
                            {...register("firstName")}
                            />
                            {errors.firstName && <span className="text-[.7rem] text-rose-600">{errors.firstName.message}</span>}

                            <input 
                            type="text" 
                            placeholder="Last Name" 
                            className="rounded-[7px] h-[47px] md:h-[52px] indent-4 placeholder:text-[1rem] placeholder:text-xl outline-none text-gray bg-white focus:bg-slate-200" 
                            {...register("lastName")}
                            />
                            {errors.lastName && <span className="text-[.7rem] text-rose-600">{errors.lastName.message}</span>}

                            <input 
                            type="email" 
                            id="" 
                            placeholder="Email Address" 
                            className="rounded-[7px] h-[47px] md:h-[52px] indent-4 placeholder:text-[1rem] placeholder:text-xl outline-none text-gray bg-white focus:bg-slate-200" 
                            {...register("email")}
                            />
                            {errors.email && <span className="text-[.7rem] text-rose-600">{errors.email.message}</span>}

                            <input 
                            type="number" 
                            id="" 
                            placeholder="Phone Number" 
                            className="rounded-[7px] h-[47px] md:h-[52px] indent-4 placeholder:text-[1rem] placeholder:text-xl outline-none text-gray bg-white focus:bg-slate-200" 
                            {...register("phoneNumber", {valueAsNumber: true})}
                            />
                            {errors.phoneNumber && <span className="text-[.7rem] text-rose-600">{errors.phoneNumber.message}</span>}

                            <input 
                            type="password" 
                            id="" 
                            placeholder="********" 
                            className="rounded-[7px] h-[47px] md:h-[52px] indent-4 placeholder:text-[1rem] placeholder:text-xl outline-none text-gray bg-white focus:bg-slate-200" 
                            {...register("password")}
                            />
                            {errors.password && <span className="text-[.7rem] text-rose-600">{errors.password.message}</span>}

                            <div className="mt-8">
                                <button className="h-[47px] md:h-[52px] mb-2 bg-[#6FC78F] w-full rounded-[7px] font-semibold text-[1rem] md:text-[20px] hover:scale-95 duration-500">Sign Up</button>
                                <p className="text-[.8rem] md:text-[18px] text-center text-[#A0A0A1] hover:text-blue-900 duration-500">
                                    <Link to={"/Login"}>
                                        Already have an account? <span className="text-darker-gray hover:text-blue-900">Login</span>
                                    </Link>
                                </p>
                            </div>
                        </section>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Index;