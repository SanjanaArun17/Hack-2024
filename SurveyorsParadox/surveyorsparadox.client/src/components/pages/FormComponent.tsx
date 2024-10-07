import React, { useState } from 'react';
import './FormComponent.css';
import TaskForm from '../TaskForm';
import NavBar from '../NavBar';

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
        <>
            <NavBar/>
            <TaskForm/>
        </>
    )
};

export default FormComponent;