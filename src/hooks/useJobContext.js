import { JobContext } from '../context/jobContext'
import { useContext } from 'react'


export const useJobContext = () => {
    const context = useContext(JobContext)

    if (!context) {
        console.log('error');
     }
    return context;
}

