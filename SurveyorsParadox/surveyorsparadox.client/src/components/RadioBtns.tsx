import { useState } from "react";
import {setTask} from "../features/formSlice"
import { useDispatch } from "react-redux";

const options = [
    "LAYOUT POINTS",
    "SURFACE INSPECTION",
    "SCAN",
    "INSPECT FLOOR"
]

export default function RadioBtns(){

    const [selectedOption, setSelectedOption] = useState<string>("")
    const [activeButton, setActiveButton] = useState<number | null>(null)
    
    const dispatch = useDispatch()
    
    const handleChange = (event :React.ChangeEvent<HTMLInputElement>, index : number) =>{
        setSelectedOption(event.target.value)
        if (activeButton === index) {
            setActiveButton(-1);
        } else {
            setActiveButton(index);
        }

        dispatch(setTask(selectedOption))
    }
    

    return(
        <>
        
            <div className="sm:flex sm:justify-around">
                
                {
                    options.map((option :string, index: number) =>{
                        return(
                            <button 
                            key={index}
                            value={selectedOption}
                            className={`m-2 font-medium w-36 text-sm xl:w-48 md:py-2 md:px-6 py-1 px-3 border border-customBlue rounded-3xl transition-colors duration-300 ease-in-out ${index == activeButton ? "bg-customBlue text-white border-white" : ""}`}
                            onClick={(e : React.ChangeEvent<HTMLInputElement>) => handleChange(e, index)}
                            >{option}
                            </button>
                        )
                    })
                }
            </div>

        </>
    );
}