import { NavLink } from "react-router-dom";
import { FaHandHoldingWater } from "react-icons/fa";
import { AppContext } from "../Context/AppContext";
import { useLocation } from "react-router-dom";
import "./stylee.css"
import logo from '../images/mylogo.png'
import './Navbar.css'
import { useContext } from "react";



const Navbar = () => {
    const { isLogin } = useContext(AppContext);
    const location = useLocation();
    return (

        <div className=" w-[70rem] navbar h-[50px] font-[450] p-4 bg-white rounded-3xl flex items-center mx-auto justify-between " >

            <div className="text-2xl items-center justify-center ">
                <NavLink to="/" >
                    <img className="w-[2rem]" src={logo}/>
                </NavLink>
            </div>

            <div className="flex ">
                <ul className=" flex flex-row gap-8 font-semibold justify-between ">
                    <li className="hover:font-bold transition-all group" >
                        <NavLink to="/" >
                            <p>Home</p>
                        </NavLink>
                        <div  className={`${location.pathname==='/' ? 'border-2' : 'border-none'} animate-from-left absolute w-[2.8rem] border-green-500`}></div>
                    </li>
                    <li className="hover:font-bold group" >
                        <NavLink to="/selectfile" >
                            <p>Search</p>
                        </NavLink>
                        <div className={`${location.pathname==='/selectfile' || location.pathname==='/diseaseInfo' ? 'border-2' : 'border-none'} animate-from-left absolute w-[2.8rem] border-green-500`}></div>
                    </li>

                    <li className="hover:font-bold group">
                        <NavLink to="/About" >
                            <p>About</p>
                        </NavLink>
                        <div  className={`${location.pathname==='/About' ? 'border-2' : 'border-none'} animate-from-left absolute w-[2.8rem] border-green-500`}></div>
                    </li>

                    <li className="hover:font-bold group">
                        <NavLink to="/Contact" >
                            <p>{isLogin ? "LogOut" : "SignUp"}</p>
                        </NavLink>
                        <div className={`${location.pathname==='/Contact' || location.pathname==='/Login' ? 'border-2' : 'border-none'} animate-from-left absolute w-[2.8rem] border-green-500`}></div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;