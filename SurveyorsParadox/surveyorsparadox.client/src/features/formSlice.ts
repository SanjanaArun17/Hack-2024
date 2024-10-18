import {createSlice} from "@reduxjs/toolkit"

export interface taskDetails{
    jobSite : string;
    location : string
    assignee : string;
    task : string;
    points : [];
    date : string
    description : string;
}

const initialState : taskDetails = {
    jobSite : "",
    location : "",
    assignee : "",
    task : "",
    points : [],
    date : Date(),
    description : ""
}

const formSlice = createSlice({
    name: "formDetails",
    initialState,
    reducers : {
        setJobSite : (state, action) => {
            state.jobSite = action.payload;
        },
        setLocation : (state, action) => {
            state.location = action.payload
        },
        setAssignee : (state, action) => {
            state.assignee = action.payload
        },
        setTask : (state, action) => {
            state.task = action.payload
        },
        setPointsField : (state, action) => {
            state.points = action.payload
        },
        setDate : (state, action) => {
            state.date = action.payload
        },
        setDescriptionValue : (state, action) => {
            state.description = action.payload
        },

    }
})

export const {setJobSite, setLocation, setAssignee, setTask, setDate, setPointsField, setDescriptionValue} = formSlice.actions

export default formSlice.reducer
