
import { useState, useRef, useEffect } from "react"

const frameworks = [
  {
    value: "Option 1",
    label: "Option 1",
  },
  {
    value: "Option 2",
    label: "Option 2",
  },
  {
    value: "Option 3",
    label: "Option 3",
  },
  {
    value: "Option 4",
    label: "Option 4",
  }
  , {
    value: "Option 5",
    label: "Option 5",
  }
]

export default function DropdownMenu() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("Select Option")
  const dropDownRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null);

	const handleCloseDropDown = (event : MouseEvent ) =>{
		if(dropDownRef.current && !dropDownRef.current.contains(event.target as Node) && 
		(buttonRef.current && !buttonRef.current.contains(event.target as Node))
		){
			setOpen(false)
		}
	}

	const selectOption = (option:string)=>{
		setOpen(!open);
		setValue(option)
	}

	useEffect(()=>{
		document.addEventListener("mousedown", handleCloseDropDown);
		
	})


  return (
	<>
			
		<div className="relative inline-block w-full">
			<div className="flex justify-center">
				
				<button id="dropdownButton" 
				className="border border-yellow-200 rounded-lg p-2 w-2/3 text-left flex justify-between items-center focus:outline-none"
				ref={buttonRef}
				onClick={() => setOpen(!open)}
				>
					<span id="selectedOption">{value}</span>
					<span className="text-gray-500">▼</span>
				</button>
			</div>
			<div className="flex justify-center">

				<div id="dropdownMenu"ref={dropDownRef}  className={`absolute z-10 ${open ? "": "hidden" } w-2/3 border border-yellow-200 rounded-lg mt-1 bg-black text-white shadow-lg`}>
					<div className="max-h-60 overflow-auto">
						{
							frameworks.map((val)=>{
								return (
									<div className="p-2 hover:border hover:border-yellow-100 cursor-pointer" key={val.value} onClick={()=> selectOption(val.value)} >{ val.label }</div>
								)
							})
						}
					</div>
				</div>
			</div>
		</div>

	</>


  )
}
