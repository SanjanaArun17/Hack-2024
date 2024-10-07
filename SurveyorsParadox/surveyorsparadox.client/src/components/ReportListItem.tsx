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
        pointDetails :[
            {
                pointName : "Point 01",
                laidOut : true,
                tolernace : {
                    HA: 10,
                    VA: 20,
                    DA: 23
                }
            },
            {
                pointName : "Point 02",
                laidOut : true,
                tolernace : {
                    HA: 10,
                    VA: 20,
                    DA: 23
                }
            }, 
            {
                pointName : "Point 03",
                laidOut : false,
                tolernace : {
                    HA: 10,
                    VA: 20,
                    DA: 23
                }
            }, 
            {
                pointName : "Point 04",
                laidOut : true,
                tolernace : {
                    HA: 10,
                    VA: 20,
                    DA: 23
                }
            }, 
            {
                pointName : "Point 05",
                laidOut : true,
                tolernace : {
                    HA: 10,
                    VA: 20,
                    DA: 23
                }
            }, 
        ]
    }

    return(
        <>

            <div>
                <div className="flex justify-center my-6">
                    <div className="w-4/5 border-2 rounded-md cursor-pointer border-slate-100 hover:border-yellow-300 p-6" onClick={openModal}>
                        <div className="grid grid-cols-2">
                            <div>
                                <div>
                                    <div className="text-4xl my-2">27-09-2024</div>
                                    <div className="text-zinc-400 text-sm my-2">Trimble Information Technology Building</div>
                                    <div className="my-2">Name</div>
                                </div>
                            </div>

                            <div className="flex justify-end h-full items-center">
                                <div>
                                    <div>Icon</div>
                                    <div>Icon.png</div>
                                    {/* <Button className={`rounded hover:bg-white hover:text-black` } onClick={openModal}>{buttonText}</Button> */}
                                </div>
                            </div>
                        </div>                        
                    </div>

                </div>
                <Dialog isOpen={isModalOpen} onClose={closeModal}>
                    <div>
                        <div className="grid grid-cols-3">
                            <div className="border flex items-center justify-center">
                                POINT NAME
                            </div>
                            <div className="border flex items-center justify-center">
                                LAID OUT
                            </div>
                            <div className="border text-center">
                                <div>TOLERANCE</div>
                                <div className="flex justify-around">
                                    <div>HA</div>
                                    <div>VA</div>
                                    <div>DA</div>
                                </div>
                            </div>
                        </div>

                        {
                            reportObject.pointDetails.map((point)=>{
                                return (
                                    <div className="grid grid-cols-3">
                                        <div className="border text-center py-4">
                                            {point.pointName}
                                        </div>
                                        <div className="border text-center py-4">
                                            {point.laidOut ? "YES" : "NO"}
                                        </div>
                                        <div className="border text-center py-4">
                                            
                                            <div className="flex justify-around">
                                                <div>{point.tolernace.HA}</div>
                                                <div>{point.tolernace.VA}</div>
                                                <div>{point.tolernace.DA}</div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </Dialog>
            </div>
        </>
    );
}