import { Link } from "react-router-dom";

export default function NavBar(){
    return (
        <>
            <nav className="grid grid-cols-3 h-20 border border-b-slate-100 items-center mb-12 font-semibold">
                <div className="col-span-2 mx-2">MOBILE INSPECTOR</div>
                <div className="col-span-1 flex justify-around">
                    <div className="mx-4"><Link to="/form">ASSIGN TASK</Link></div>
                    <div className="mx-4"><Link to="/calendar">CALENDAR</Link></div>
                    <div className="mx-4 text-yellow-200"><Link to="/reports">REPORTS</Link></div>
                </div>
            </nav>
        
        </>
    );
}