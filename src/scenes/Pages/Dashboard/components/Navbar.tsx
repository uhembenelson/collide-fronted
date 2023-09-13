import { Link } from "react-router-dom"
import Picolo from "../../../../assets/picolo.png"
const Navbar = ()=>{

    return(
        <div className="bg-black w-full py-4 flex justify-between px-6 item-center">
            <div className="text-white gap-4 flex item-center ">
                <Link to="/">Home</Link>
                <Link to="/dashboard/home">Dashboard</Link>
                <Link to="/dashboard/classroom">Classroom</Link>
            </div>
            <div className="">
                <img src={Picolo} className="h-10" />
            </div>
        </div>
    )
}

export default Navbar