import { useState } from "react";

const options = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4"
]

export default function RadioBtns(){

    const [selectedOption, setSelectedOption] = useState<string>("")
    const [activeButton, setActiveButton] = useState<number | null>(null)

    const handleChange = (event :React.ChangeEvent<HTMLInputElement>, index : number) =>{
        setSelectedOption(event.target.value)
        if (activeButton === index) {
            setActiveButton(-1);
        } else {
            setActiveButton(index);
        }

       
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
                            className={`m-2 w-36 md:py-2 lg:px-10 md:px-6 py-1 px-3 border border-yellow-200 rounded-2xl transition-colors duration-300 ease-in-out ${index == activeButton ? "bg-yellow-300 text-black border-white" : ""}`}
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