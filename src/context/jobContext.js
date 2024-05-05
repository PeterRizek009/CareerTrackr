import { createContext, useReducer } from 'react';

export const JobContext = createContext();

export const jobReducer = (state, action) => {
    switch (action.type) {
        case 'SET_JOBS':
            return {
                ...state,
                jobs: action.payload
            };
        case 'ADD_NEW_JOB':
            return {
                ...state,
                jobs: [action.payload, ...state.jobs]
            };
        case 'DELETE_JOB':
            return {
                ...state,
                jobs: state.jobs.filter((job) => job._id !== action.payload._id)
            };
        case 'UPDATE_JOB':
            const updatedJobIndex = state.jobs.findIndex(job => job._id === action.payload._id);
            if (updatedJobIndex === -1) {
                // Job not found, return state as is
                return state;
            }
            const updatedJobs = [...state.jobs];
            updatedJobs[updatedJobIndex] = action.payload;
            return {
                ...state,
                jobs: updatedJobs
            };
        default:
            return state;
    }
};

export const JobContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(jobReducer, {
        jobs: []
    });

    return (
        <JobContext.Provider value={{ ...state, dispatch }}>
            {children}
        </JobContext.Provider>
    );
};
