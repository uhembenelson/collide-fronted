import React from "react";
import africa from "@/assets/africa.png";
import bg from "@/assets/bgb.png";
import { Link } from "react-router-dom";
import {z, ZodType} from "zod";
import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
    firstName: string,
    password: string,
}

const Index =()=>{
    const schema: ZodType<FormData> = z.object({
        firstName: z.string().min(3).max(10),
        password: z.string().min(5).max(30)
    })

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({resolver: zodResolver(schema)})

    const submitData = (data: FormData) => {
        console.log("Data submitted " + data)
        alert("Form submitted")
    }

    return(
        <div style={{backgroundImage: `url(${bg})`}} className="mt-[4rem] md:px-0 text-black bg-no-repeat bg-cover bg-center py-16">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-around w-screen gap-16">
                <div className="w-[80%] md:w-1/2">
                    <img src={africa} alt=""/>
                </div>
                <div className="w-[80%] md:w-1/3">
                    <form onSubmit={handleSubmit(submitData)} className="flex flex-col space-y-3 text-white md:text-center">
                        <h2 className="text-[40px] md:text-[50px] text-center font-semibold font-[kufam]">Hello ! <br /> Welcome back</h2>
                        <section className="flex flex-col gap-4">
                            <input 
                            type="text" 
                            placeholder="First Name" 
                            className="rounded-[7px] h-[47px] md:h-[52px] indent-4 placeholder:text-[1rem] placeholder:text-xl outline-none text-gray"
                            {...register("firstName")} 
                            />
                            {errors.firstName && <span className="text-[.7rem] text-rose-600">{errors.firstName.message}</span>}

                            <input 
                            type="password" 
                            id="" 
                            placeholder="********" 
                            className="rounded-[7px] h-[47px] md:h-[52px] indent-4 placeholder:text-[1rem] placeholder:text-xl outline-none text-gray" 
                            {...register("password")}
                            />
                            {errors.firstName && <span className="text-[.7rem] text-rose-600">{errors.firstName.message}</span>}

                            <p className="text-[.8rem] md:text-[18px] text-end mb-10 text-[#A0A0A1] hover:text-blue-900 duration-500">
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