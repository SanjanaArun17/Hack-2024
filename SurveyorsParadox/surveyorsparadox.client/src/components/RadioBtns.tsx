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
        
            <div className="flex justify-around">
                
                {
                    options.map((option :string, index: number) =>{
                        return(
                            <button 
                            key={index}
                            value={selectedOption}
                            className={`py-2 px-10 border border-yellow-200 rounded-2xl ${index == activeButton ? "bg-yellow-300 text-black border-white" : ""}`}
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