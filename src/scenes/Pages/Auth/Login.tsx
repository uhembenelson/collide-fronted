import React from "react";
import africa from "@/assets/africa.png";
import bg from "@/assets/bgb.png";
import { Link , useNavigate } from "react-router-dom";
import {z, ZodType} from "zod";
import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "@/store/features/Api";
import { useState } from "react";


type FormData = {
    email: string,
    password: string,
    

}

const Index = ()=>{
    const navigate = useNavigate();
    const [errorMsg, SetErrorMsg] = useState("")
    const schema: ZodType<FormData> = z.object({
        email: z.string().min(3).max(30),
        password: z.string().min(5).max(30)
        
    })
    const [login, { isLoading: isChecking , error}] = useLoginMutation();

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
        <div style={{backgroundImage: `url(${bg})`}} className="mt-[4rem] md:px-0 text-black bg-no-repeat bg-cover bg-center md:h-screen items-center">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-around md:mx-auto md:w-5/6 gap-16 px-5 ">
                <div className=" md:w-1/2 md:mt-20 mt-20">
                    <img src={africa} alt=""/>
                </div>
                <div className=" w-full md:w-1/3 md:mt-[150px] md:mb-0 mb-20">
                    <form onSubmit={handleSubmit(submitData)} className="flex flex-col space-y-3 text-white md:text-center">
                        <h2 className="text-[30px] md:text-[50px] text-center font-semibold font-[kufam]">Hello ! <br /> Welcome back</h2>
                        <section className="flex flex-col gap-4">
                        {error && 
                        <div className="bg-white h-10 flex items-center gap-5 rounded-sm">
                            <div className="bg-rose-600 w-3 h-full rounded-l-sm"></div>
                            <div className="text-[14px] text-rose-600 text-center bg-white ">{errorMsg}</div>
                        </div>
                        
                        }
                        {errors.email && <span className="text-[.7rem] text-rose-600 text-left">{errors.email.message}</span>}
                            <input 
                            type="text" 
                            placeholder="Email address" 
                            className="rounded-[7px] h-[47px] md:h-[52px] indent-4 placeholder:text-[1rem] placeholder:text-xl outline-none text-gray"
                            {...register("email")} 
                            />
                           
                           {errors.password && <span className="text-[.7rem] text-rose-600 text-left mt-3">{errors.password.message}</span>}
                            <input 
                            type="password" 
                            id="" 
                            placeholder="********" 
                            className="rounded-[7px] h-[47px] md:h-[52px] indent-4 placeholder:text-[1rem] placeholder:text-xl outline-none text-gray" 
                            {...register("password")}
                            />
                            

                            <p className="text-[.8rem] md:text-[18px] text-end mb-5 text-[#A0A0A1] hover:text-blue-900 duration-500">
                                    <Link to={"/Login"}>
                                        Recover Password?
                                    </Link>
                            </p>

                            <div>
                                <button className="h-[47px] md:h-[52px] mb-2 bg-[#6FC78F] w-full rounded-[7px] font-semibold text-[1rem] md:text-[20px] hover:scale-95 duration-500">LOGIN</button>
                                <p className="text-[.8rem] md:text-[18px] text-center text-[#A0A0A1] hover:text-blue-900 duration-500">
                                    <Link to={"/Register"}>
                                        Don't have an account? <span className="text-darker-gray hover:text-blue-900">Create Account</span>
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