import { useEffect } from 'react'
import JobsTable from '../components/jobsTable'
import { useJobContext } from '../hooks/useJobContext'

const Home = () => {

    const { jobs, dispatch } = useJobContext()

   

    useEffect(() => {
        const fetchJobs = async () => {
            const response = await fetch('/api');
            const JobData = await response.json();
            if (response.ok) {

                dispatch({ type: 'SET_JOBS', payload: JobData })

            }
        }
        fetchJobs()
    }, [])



    return (
        <div className="home min-h-[100vh] mx-auto  w-[100%]  md:p-[40px] p-3  mt-4">
            <JobsTable jobs={jobs} />
        </div>
    )
}


export default Home;