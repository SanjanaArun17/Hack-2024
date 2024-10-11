import DropdownMenu from "./DropdownMenu";
import DatePicker  from "./DatePicker";
import RadioBtns from "./RadioBtns";
import { useState } from "react";

export default function TaskForm(){

    const [canSend, setCanSend] = useState(true)
    const [includeAllPoints, setAllPoints] = useState(false)
    
    const handleSendRequest = () =>{
        setCanSend(!canSend)
    }

    const jobOptions = ["Trimble Information Technology Building"]
    const locationOptions = ["Floor 1", "Floor 2", "Floor 3", "Floor 4", "Floor 5", "Floor 6", "Floor 7"]
    
    const buttonActionText = canSend ? "SEND REQUEST" : "CANCEL REQUEST";


    return(
        <>
            <div className="m-12">
                <div className="grid grid-cols-9">
                    <div className="col-span-2 border border-black text-center p-8">
                        <div>JOB SITE</div>
                    </div>
                    <div className="col-span-7 border border-black text-center p-8">
                        <div><DropdownMenu options={jobOptions}/></div>
                    </div>
                </div>

                <div className="grid grid-cols-9">
                    <div className="col-span-2 border border-black text-center p-8">
                        <div>LOCATION</div>
                    </div>
                    <div className="col-span-7 border border-black text-center p-8 ">
                        <div><DropdownMenu options={locationOptions}/></div>
                    </div>
                </div>

                <div className="grid grid-cols-9">
                    <div className="col-span-2 border border-black text-center p-8">
                        <div>ASSIGNEE</div>
                    </div>
                    <div className="col-span-7 border border-black text-center p-8 ">
                        <div>
                            <input 
                            className=" px-4 py-1  rounded-md border-2 border-customBlue"        
                            type="text"
                            placeholder="Enter Assignee Name"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-9">
                    <div className="col-span-2 border border-black text-center p-8">
                        <div>TASK</div>
                    </div>
                    <div className="col-span-7 border border-black text-center p-8 ">
                        <div><RadioBtns/></div>
                    </div>
                </div>

                <div className="grid grid-cols-9">
                    <div className="col-span-2 border border-black text-center p-8">
                        <div>POINT </div>
                    </div>
                    <div className="col-span-7 border border-black text-center p-8 ">
                        <div className="sm:flex justify-between">
                            <div className="mx-auto">
                                <input type="text"
                                className=" px-4 py-1 lg:w-80  rounded-md border-2 border-customBlue"
                                placeholder="Enter Point Name"
                                />
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox"
                                id="All points"
                                className="mr-2 cursor-pointer"
                                checked={includeAllPoints}
                                onChange={() => setAllPoints(!includeAllPoints)}
                                />
                                <label htmlFor="All points" className="cursor-pointer">All points</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-9">
                    <div className="col-span-2 border border-black text-center p-8">
                        <div>DATE</div>
                    </div>
                    <div className="col-span-7 border border-black text-center p-8 ">
                        <div><DatePicker/></div>
                    </div>
                </div>

                <div className="grid grid-cols-9">
                    <div className="col-span-2 border border-black text-center p-10">
                        <div>DESCRIPTION</div>
                    </div>
                    <div className="col-span-7 border border-black text-center p-10 ">
                        <div>
                            <textarea 
                            className=" w-1/2 h-4/5 px-2 py-1 rounded-md border-2 border-customBlue"
                            placeholder="Enter Description"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-9">
                    <div className="col-span-7 border border-black text-center p-8">
                    </div>
                    <div className={`col-span-2 border border-black  text-center  font-semibold transition-colors duration-300 ease-in-out text-white ${ canSend ? "bg-customBlue" : "bg-red-600"}`}>
                        <button onClick={handleSendRequest} className="p-8 w-full">{buttonActionText}</button>
                    </div>
                </div>
 
            </div>
        
        
        </>
    );
}