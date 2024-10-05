import { Link, NavLink } from "react-router-dom";

export default function NavBar(){
    return (
        <>
            <nav className="grid grid-cols-3 h-20 w-dvw border border-b-slate-100 items-center mb-12 font-semibold">
                <div className="col-span-2 mx-10">
                    <NavLink to="/" >OFFICE 2 FIELD</NavLink>
                </div>
                <div className="col-span-1 flex justify-around ">
                    <div className="mx-4">
                        <NavLink to="/form" className={({isActive})=>`${ isActive? "text-yellow-400" : "text-white" }`}>ASSIGN TASK</NavLink>
                    </div>
                    <div className="mx-4">
                        <NavLink to="/calendar" className={({isActive})=>`${ isActive? "text-yellow-400" : "text-white" }`}>CALENDAR</NavLink>
                    </div>
                    <div className="mx-4 text-yellow-200">
                        <NavLink to="/reports" className={({isActive})=>`${ isActive? "text-yellow-400" : "text-white" }`}>REPORTS</NavLink>
                    </div>
                </div>
            </nav>
        
        </>
    );
}