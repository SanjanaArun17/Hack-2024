import DropdownMenu from "./DropdownMenu";
import DatePicker  from "./DatePicker";
import RadioBtns from "./RadioBtns";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";

export default function TaskForm(){

    const [canSend, setCanSend] = useState(true)
    
    const handleSendRequest = () =>{
        setCanSend(!canSend)
    }
    
    const buttonActionText = canSend ? "SEND REQUEST" : "CANCEL REQUEST";


    return(
        <>
            <NavBar/>
            
            <div className="m-12 ">
                <div className="grid grid-cols-9">
                    <div className="col-span-2 border text-center p-8">
                        <div>Job</div>
                    </div>
                    <div className="col-span-7 border text-center p-8">
                        <div><DropdownMenu/></div>
                    </div>
                </div>

                <div className="grid grid-cols-9">
                    <div className="col-span-2 border text-center p-8">
                        <div>LOCATION</div>
                    </div>
                    <div className="col-span-7 border text-center p-8 ">
                        <div><DropdownMenu/></div>
                    </div>
                </div>

                <div className="grid grid-cols-9">
                    <div className="col-span-2 border text-center p-8">
                        <div>ASSIGNEE</div>
                    </div>
                    <div className="col-span-7 border text-center p-8 ">
                        <div>NAME</div>
                    </div>
                </div>

                <div className="grid grid-cols-9">
                    <div className="col-span-2 border text-center p-8">
                        <div>TASK</div>
                    </div>
                    <div className="col-span-7 border text-center p-8 ">
                        <div><RadioBtns/></div>
                    </div>
                </div>

                <div className="grid grid-cols-9">
                    <div className="col-span-2 border text-center p-8">
                        <div>DATE</div>
                    </div>
                    <div className="col-span-7 border text-center p-8 ">
                        <div><DatePicker/></div>
                    </div>
                </div>

                <div className="grid grid-cols-9">
                    <div className="col-span-2 border text-center p-10">
                        <div>DESCRIPTION</div>
                    </div>
                    <div className="col-span-7 border text-center p-10 ">
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sed maxime? Veniam obcaecati iste reprehenderit necessitatibus, deleniti culpa aliquid, voluptate maxime laboriosam quasi dignissimos in, neque earum minima. Dolor perspiciatis, expedita quasi dolore cupiditate itaque ducimus. Nam laboriosam est rerum hic dolor ipsa. Alias odit assumenda sequi pariatur maiores ullam?</div>
                    </div>
                </div>

                <div className="grid grid-cols-9">
                    <div className="col-span-7 border text-center p-8">
                    </div>
                    <div className={`col-span-2 border text-center  font-semibold transition-colors duration-300 ease-in-out ${ canSend ? "bg-yellow-400 text-black" : "bg-red-600 text-white"}`}>
                        <button onClick={handleSendRequest} className="p-8 w-full">{buttonActionText}</button>
                    </div>
                </div>
 
            </div>
        
        
        </>
    );
}