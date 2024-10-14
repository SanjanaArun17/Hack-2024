
import { useState, useRef, useEffect } from "react"


type dropDownProps = {
	options : string[]
}

// const options = [
//   {
//     value: "Option 1",
//     label: "Option 1",
//   },
//   {
//     value: "Option 2",
//     label: "Option 2",
//   },
//   {
//     value: "Option 3",
//     label: "Option 3",
//   },
//   {
//     value: "Option 4",
//     label: "Option 4",
//   }
//   , {
//     value: "Option 5",
//     label: "Option 5",
//   }
// ]

export default function DropdownMenu({options} : dropDownProps) {
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
				className="border-2 border-customBlue rounded-lg p-2 w-2/3 focus:outline-none"
				ref={buttonRef}
				onClick={() => setOpen(!open)}
				>
					<span className="inline-block w-11/12" id="selectedOption">{value}</span>
					<span className="text-gray-500">▼</span>
				</button>
			</div>
			<div className="flex justify-center">

				<div id="dropdownMenu"ref={dropDownRef}  className={`absolute z-10 ${open ? "": "hidden" } w-2/3 border border-customBlue rounded-lg mt-1 bg-white shadow-lg`}>
					<div className="max-h-60 overflow-auto">
						{
							options.map((val)=>{
								return (
									<div className="p-2 hover:border hover:border-customBlue cursor-pointer" key={val} onClick={()=> selectOption(val)} >{ val }</div>
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
