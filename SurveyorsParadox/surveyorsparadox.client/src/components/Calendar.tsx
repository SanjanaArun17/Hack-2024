import React, { useState } from 'react';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Calendar: React.FC = () => {

    const [currentDate, setCurrentDate] = useState(new Date());
    const today = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();


    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    };
    
    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    };

    
    const renderCells = () => {
        const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        const startDay = startDate.getDay();
        const totalDays = endDate.getDate();


        const cells = [];
        for (let i = 0; i < startDay; i++) {
            cells.push(<div className="cell" key={`empty-${i}`}></div>);
        }
        for (let i = 1; i <= totalDays; i++) {
            const isToday = i == new Date().getDate()  && currentDate.getMonth() == new Date().getMonth() && currentYear== new Date().getFullYear() 
            cells.push(
                <div className={`cell flex items-start px-2 pt-1 justify-end border border-gray-300 ${isToday ? "bg-slate-400 text-black" : ""}`} key={i}>
                    {i}
                </div>
            );
        }

        return (<div className="grid grid-cols-7 h-full">{cells}</div>);
    };

    return (

        <>
            
            <div className="h-dvh mx-10 my-2 border border-slate-100 rounded-lg">
                
                <div className="h-full w-full grid grid-flow-row grid-rows-5 ">
                    
                    <div className='row-span-1 h-full'>
                        <div className="text-center p-4 bg-blue-700 text-black flex justify-between items-center">
                            <button onClick={handlePrevMonth} className="bg-white text-black px-2 py-1 rounded">{"<"}</button>
                            <h2 className="text-2xl text-white font-semibold">{currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h2>
                            <button onClick={handleNextMonth} className="bg-white text-black px-2 py-1 rounded">{">"}</button>
                        </div>

                        <div className="grid grid-cols-7 text-center text-black bg-gray-200 ">
                            {daysOfWeek.map((day) => (
                                    <div className="font-bold p-2 py-4" key={day}>{day}</div>
                            ))}
                        </div>

                    </div>
                    <div className='row-span-4 flex flex-col h-full'>
                        {renderCells()}
                        
                    </div>
                </div>
            </div>
        
        </>
    );
};

export default Calendar;
