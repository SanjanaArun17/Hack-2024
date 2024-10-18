import DropdownMenu from "./DropdownMenu";
import DatePicker  from "./DatePicker";
import RadioBtns from "./RadioBtns";
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import {setAssignee, setDescriptionValue, setPointsField, taskDetails } from "../features/formSlice"

export default function TaskForm(){

    const [canSend, setCanSend] = useState(true)
    const [includeAllPoints, setAllPoints] = useState(false)

    const [assigneeName, setAssigneeName] = useState("")
    const [description, setDescription] = useState("")
    const [points, setPoints] = useState("")

    const dispatch = useDispatch()
    
    const handleSendRequest = () =>{
        setCanSend(!canSend)
        sendRequest(resObj)
    }

    const jobOptions = ["Trimble Information Technology Building"]
    const locationOptions = ["Floor 1", "Floor 2", "Floor 3", "Floor 4", "Floor 5", "Floor 6", "Floor 7"]
    
    const buttonActionText = canSend ? "SEND REQUEST" : "CANCEL REQUEST";

    const setValues = () => {
        dispatch(setAssignee(assigneeName))
        dispatch(setPointsField(points))
        dispatch(setDescriptionValue(description))
    }

    const sendRequest = async (data : {}) => {
        setValues()
        try {
          const response = await fetch('/Task/posttask', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify(data),
          });
      
          if (!response.ok) {
            throw new Error('Failed to send data');
          }
      
          const result = await response.json();
          console.log(result);
        } catch (error) {
          console.error('Error:', error);
        }
      };

    const jobSite : string = useSelector((state : taskDetails) => state.jobSite)
    
    const resObj = {
        jobSite : useSelector((state : taskDetails) => state.jobSite),
        location : useSelector((state : taskDetails) => state.location),
        assignee : useSelector((state : taskDetails) => state.assignee),
        task : useSelector((state : taskDetails) => state.assignee),
        points : useSelector((state : taskDetails) => state.points),
        date : useSelector((state : taskDetails) => state.date),
        description : useSelector((state : taskDetails) => state.description)
    }


    return(
        <>
            <div className="m-12 font-guton">
                <div className="grid grid-cols-9">
                    <div className="col-span-2 border border-black text-center p-8 font-semibold">
                        <div>JOB SITE</div>
                    </div>
                    <div className="col-span-7 border border-black text-center p-8 font-medium">
                        <div><DropdownMenu attribute="Job Site" options={jobOptions}/></div>
                    </div>
                </div>

                <div className="grid grid-cols-9">
                    <div className="col-span-2 border border-black text-center p-8 font-semibold">
                        <div>LOCATION</div>
                    </div>
                    <div className="col-span-7 border border-black text-center p-8 font-medium">
                        <div><DropdownMenu attribute="Location" options={locationOptions}/></div>
                    </div>
                </div>

                <div className="grid grid-cols-9">
                    <div className="col-span-2 border border-black text-center p-8 font-semibold">
                        <div>ASSIGNEE</div>
                    </div>
                    <div className="col-span-7 border border-black text-center p-8 font-medium">
                        <div>
                            <input 
                            className=" px-4 py-1 font-guton font-medium rounded-md border-2 border-customBlue"        
                            type="text"
                            value={assigneeName}
                            placeholder="Enter Assignee Name"
                            onChange={(e) => setAssigneeName(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-9">
                    <div className="col-span-2 border border-black text-center p-8 font-semibold">
                        <div>TASK</div>
                    </div>
                    <div className="col-span-7 border border-black text-center p-8 font-medium">
                        <div><RadioBtns/></div>
                    </div>
                </div>

                <div className="grid grid-cols-9">
                    <div className="col-span-2 border border-black text-center p-8 font-semibold">
                        <div>POINT </div>
                    </div>
                    <div className="col-span-7 border border-black text-center p-8 font-medium">
                        <div className="sm:flex justify-between">
                            <div className="mx-auto">
                                <input type="text"
                                value={points}
                                onChange={(e) => setPoints(e.target.value)}
                                className=" px-4 py-1 lg:w-80 rounded-md border-2 border-customBlue"
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
                    <div className="col-span-2 border border-black text-center p-8 font-semibold">
                        <div>DATE</div>
                    </div>
                    <div className="col-span-7 border border-black text-center p-8 font-medium">
                        <div><DatePicker/></div>
                    </div>
                </div>

                <div className="grid grid-cols-9">
                    <div className="col-span-2 border border-black text-center p-10 font-semibold">
                        <div>DESCRIPTION</div>
                    </div>
                    <div className="col-span-7 border border-black text-center p-10 font-medium">
                        <div>
                            <textarea 
                            className=" w-1/2 h-4/5 px-2 py-1 rounded-md border-2 border-customBlue"
                            placeholder="Enter Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
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