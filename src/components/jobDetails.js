import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useJobContext } from "../hooks/useJobContext";


const JobDetails = ({ jobs }) => {

    const { id } = useParams();


    const [gotAnReply, setGotAnReply] = useState()
    const [jobData, setJobData] = useState(null);
    const { dispatch } = useJobContext()




    useEffect(() => {
        const selectedJob = jobs.find((el) => el._id === id);
        if (selectedJob) {
            setJobData(selectedJob);
            setGotAnReply(selectedJob.gotAnReply);
        }
    }, [jobs, id]);



    const handleSubmit = async (e) => {
        e.preventDefault();
        // Implement logic to update the job data using API




        try {
            const response = await fetch(`/api/${id}`, {
                method: 'PATCH',
                body: JSON.stringify({ ...jobData, gotAnReply }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to update Job');
            }

            const newJobData = await response.json();
            dispatch({ type: 'UPDATE_JOB', payload: newJobData });


            // Reset form fields after successful submission
        } catch (error) {
            console.error('Error adding job:', error);
            alert('Failed to add job');
        }

    };





    if (!jobData) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="max-w-sm mx-auto mt-8">
                <div className="mb-5">
                    <label htmlFor="positionName" className="block mb-2 text-sm font-medium text-gray-700 ">Position name</label>
                    <p type="text" name="Position" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" >
                        {jobData.positionName}
                    </p>
                </div>
                <div className="mb-5">
                    <label htmlFor="companyName" className="block mb-2 text-sm font-medium text-gray-700 ">Company</label>
                    <p type="text" id="companyName" name="Company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" >
                        {jobData.companyName}
                    </p>
                </div>

                <div className="mb-5">
                    <label htmlFor="Location" className="block mb-2 text-sm font-medium text-gray-700 ">Location</label>
                    <p type="text" id="companyName" name="Company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" >
                        {jobData.location}
                    </p>
                </div>

                <div className="mb-5">
                    <label htmlFor="Location" className="block mb-2 text-sm font-medium text-gray-700 ">Platform</label>
                    <p type="text" id="companyName" name="Company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" >
                        {jobData.platform}
                    </p>
                </div>

            </div >
            <div className="mb-5">
                <form className="max-w-sm mx-auto mt-8" onSubmit={handleSubmit}>
                    <label htmlFor="optionSelect" className="block mb-2 text-sm font-medium text-gray-700 ">Company Replay</label>
                    <select
                        id="optionSelect"
                        name="Option"
                        value={gotAnReply}
                        onChange={(e) => setGotAnReply(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"

                    >
                        <option value="">Choose thge suitable reply</option>
                        <option value={'Nothing yet'}>Nothing yet</option>
                        <option value={'Rejection Email'}>Rejection Email</option>
                        <option value={'Positive Email'}>Positive Email</option>
                        <option value={'Call form HR'}>got a Call</option>
                        <option value={'Interview date'}>Interview date</option>
                    </select>



                    <button type="submit" className="text-white mx-3 mt-5 bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                        Save
                    </button>
                </form >
            </div >

        </>

    )

}

export default JobDetails;