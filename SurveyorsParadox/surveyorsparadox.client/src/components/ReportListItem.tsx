import { randomUUID } from "crypto";
import Dialog from "./Dialog";
import { useState } from "react";
// import { Button } from "./ui/button";

export default function ReportListItem(){

    const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

    const reportObject = {
        reportID : "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        location : "Trimble Information Technology Building",
        title : "Job Title",
        timeTaken : "5.6",
        date : "27/09/2024",
        assignee : "Name",
        pointDetails :[
            {
                pointName : "Point 01",
                isLaidOut : true,
                dateTime : "",
                tolernace : {
                    HA: 10,
                    VA: 20,
                }
            },
            {
                pointName : "Point 02",
                isLaidOut : true,
                dateTime : "",
                tolernace : {
                    HA: 10,
                    VA: 20,
                }
            },
            {
                pointName : "Point 03",
                isLaidOut : false,
                dateTime : "",
                tolernace : {
                    HA: 10,
                    VA: 20,
                }
            },
            {
                pointName : "Point 04",
                isLaidOut : true,
                dateTime : "",
                tolernace : {
                    HA: 10,
                    VA: 20,
                }
            },
            {
                pointName : "Point 05",
                isLaidOut : true,
                dateTime : "",
                tolernace : {
                    HA: 10,
                    VA: 20,
                }
            },
        ]
    }

    return(
        <>

            <div>
                <div className="flex justify-center my-6 font-guton">
                    <div className="group w-4/5 border-2 border-black rounded-lg cursor-pointer transition-colors duration-200 hover:bg-customBlue hover:text-white p-6" onClick={openModal}>
                        <div className="grid grid-cols-2">
                            <div>
                                <div>
                                    <div className="text-4xl my-2 font-bold">{reportObject.date}</div>
                                    <div className="group-hover:text-white font-medium text-sm my-2">{reportObject.location}</div>
                                    <div className="my-2 font-medium">{reportObject.assignee}</div>
                                </div>
                            </div>

                            <div className="flex justify-end h-full items-center">
                                <div>
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000" className="fill-current group-hover:text-white"><path d="M319.33-246.67h321.34v-66.66H319.33v66.66Zm0-166.66h321.34V-480H319.33v66.67ZM226.67-80q-27 0-46.84-19.83Q160-119.67 160-146.67v-666.66q0-27 19.83-46.84Q199.67-880 226.67-880H574l226 226v507.33q0 27-19.83 46.84Q760.33-80 733.33-80H226.67Zm314-542.67v-190.66h-314v666.66h506.66v-476H540.67Zm-314-190.66v190.66-190.66 666.66-666.66Z"/></svg>
                                    </div>
                                    {/* <Button className={`rounded hover:bg-white hover:text-black` } onClick={openModal}>{buttonText}</Button> */}
                                </div>
                            </div>
                        </div>                        
                    </div>

                </div>
                <Dialog isOpen={isModalOpen} onClose={closeModal}>
                    <div className="font-bold">
                        <div className="grid grid-cols-3">
                            <div className="border  border-black flex items-center justify-center">
                                POINT NAME
                            </div>
                            <div className="border  border-black flex items-center justify-center">
                                LAID OUT
                            </div>
                            <div className="border  border-black text-center">
                                <div>TOLERANCE</div>
                                <div className="flex justify-around">
                                    <div>HA</div>
                                    <div>VA</div>
                                </div>
                            </div>
                        </div>

                        {
                            reportObject.pointDetails.map((point)=>{
                                return (
                                    <div className="grid grid-cols-3">
                                        <div className="border border-black text-center py-4">
                                            {point.pointName}
                                        </div>
                                        <div className="border  border-black text-center py-4">
                                            {point.isLaidOut ? "YES" : "NO"}
                                        </div>
                                        <div className="border  border-black text-center py-4">
                                            
                                            <div className="flex justify-around">
                                                <div>{point.tolernace.HA}</div>
                                                <div>{point.tolernace.VA}</div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                        <div className="ml-10 mt-5">
                            <div className="m-2 p-4">
                                {reportObject.title}
                            </div>
                            <div className="m-2 p-4">
                                {reportObject.timeTaken} Minutes to Layout
                            </div>
                            <div className="p-4">
                                Chennai
                            </div>
                        </div>
                    </div>
                </Dialog>
            </div>
        </>
    );
}