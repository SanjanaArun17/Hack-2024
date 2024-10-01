import DropdownMenu from "./DropdownMenu";
import DatePicker  from "./DatePicker";

export default function TaskForm(){
    return(
        <>

            <div className="m-12">
                <div className="grid grid-cols-9">
                    <div className="col-span-2 border text-center p-10">
                        <div>Job</div>
                    </div>
                    <div className="col-span-7 border text-center p-10">
                        <div><DropdownMenu/></div>
                    </div>
                </div>

                <div className="grid grid-cols-9">
                    <div className="col-span-2 border text-center p-10">
                        <div>LOCATION</div>
                    </div>
                    <div className="col-span-7 border text-center p-10 ">
                        <div><DropdownMenu/></div>
                    </div>
                </div>

                <div className="grid grid-cols-9">
                    <div className="col-span-2 border text-center p-10">
                        <div>ASSIGNEE</div>
                    </div>
                    <div className="col-span-7 border text-center p-10 ">
                        <div>NAME</div>
                    </div>
                </div>

                <div className="grid grid-cols-9">
                    <div className="col-span-2 border text-center p-10">
                        <div>TASK</div>
                    </div>
                    <div className="col-span-7 border text-center p-10 ">
                        <div>LIST OF RADIO BUTTONS</div>
                    </div>
                </div>

                <div className="grid grid-cols-9">
                    <div className="col-span-2 border text-center p-10">
                        <div>DATE</div>
                    </div>
                    <div className="col-span-7 border text-center p-10 ">
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
 
            </div>
        
        
        </>
    );
}