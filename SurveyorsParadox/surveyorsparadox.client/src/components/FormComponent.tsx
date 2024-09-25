import React, { useState } from 'react';
import './FormComponent.css';

interface SurveyTask {
    jobsite: string;
    floor: string;
    assignee: string;
    date: Date;
    task: string;
    description: string;
}

const FormComponent: React.FC = () => {
    const [task, setTask] = useState<SurveyTask>({
        jobsite: "",
        floor: "",
        assignee: "",
        date: new Date(),
        task: "",
        description: "",
    });

    const handleJobSiteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };

    const handleSendRequest = (e: React.FormEvent) => {
        e.preventDefault();
        // Code to send to endpoints
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSendRequest}>
                <div>
                    <label htmlFor="jobSiteListItems">Job site :</label>
                    <select name="jobSiteListItems" value={task.jobsite} onChange={handleJobSiteChange}>
                        <option value="option1">Trimble India Office</option>
                        <option value="option2">None</option>
                    </select>
                </div>

                <button type="submit">Send Request</button>
            </form>
        </div>
    )
};

export default FormComponent;