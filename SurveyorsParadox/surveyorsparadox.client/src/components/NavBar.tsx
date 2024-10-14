import { NavLink } from "react-router-dom";
import { useState } from "react";
export default function NavBar(){

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border border-b-slate-100">
            <nav className="w-full flex justify-between h-20">
                <div className="m-10 flex items-center font-guton font-bold">
                    <NavLink to="/" >OFFICE 2 FIELD</NavLink>
                </div>
                 <div className={`w-40 justify-center flex items-center sm:hidden mx-5`}>
                    <button
                        className="text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                        </svg>
                    </button>
                </div>
                <div className="hidden sm:flex items-center font-guton font-semibold">
                    <div className="mx-4">
                        <NavLink to="/form" className={({isActive})=>`${ isActive? "text-customBlue" : "text-black" }`}>ASSIGN TASK</NavLink>
                    </div>
                    <div className="mx-4">
                        <NavLink to="/calendar" className={({isActive})=>`${ isActive? "text-customBlue" : "text-black" }`}>CALENDAR</NavLink>
                    </div>
                    <div className="mx-4">
                        <NavLink to="/reports" className={({isActive})=>`${ isActive? "text-customBlue" : "text-black" }`}>REPORTS</NavLink>
                    </div>
                </div>
               
            </nav>

            <div className="flex justify-end mr-7">
                <div className={`overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-48' : 'max-h-0'} sm:hidden`}>
                    <div className="w-40 text-center my-2">
                        <NavLink to="/form" className={({isActive})=>`${ isActive? "text-yellow-400" : "text-white" }`}>ASSIGN TASK</NavLink>
                    </div>
                    <div className="w-40 text-center my-2">
                        <NavLink to="/calendar" className={({isActive})=>`${ isActive? "text-yellow-400" : "text-white" }`}>CALENDAR</NavLink>
                    </div>
                    <div className="w-40 text-center my-2">
                        <NavLink to="/reports" className={({isActive})=>`${ isActive? "text-yellow-400" : "text-white" }`}>REPORTS</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}