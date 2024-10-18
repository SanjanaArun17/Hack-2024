import * as React from "react"

import { Link } from "react-router-dom"

interface CardProps{
    title:string;
    cardContent:string;
    buttonURL : string,
}

export function Cards({title, cardContent, buttonURL} : CardProps) {
  return (
    <Link to={buttonURL}>
      <div className="h-full border border-black rounded-xl hover:bg-customBlue hover:text-white transition-colors duration-200">
            <div className=" w-96 h-full px-4">
                <div className='h-2/6 text-center p-5'>
                    <div className='font-geist font-bold text-2xl'>{title}</div>
                </div>
                <div className='h-3/6 flex items-center '>
                    <div className='font-guton font-medium text-center text-2xl'>
                    {cardContent}
                    </div>
                </div>
                <div className='h-1/6 flex justify-center text-2xl'>
				<svg xmlns="http://www.w3.org/2000/svg" className="fill-current group-hover:text-white" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg>

                </div>
            </div>
      </div>
    </Link>

  )
}
