import { Link } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdAdd } from "react-icons/md";
import { useState } from "react";
import { useJobContext } from "../hooks/useJobContext";



const JobsTable = ({ jobs }) => {

    const [selectedJobId, setSelectedJobId] = useState(null);

    const { dispatch } = useJobContext()

    const handleSelectChange = (event, jobId) => {
        setSelectedJobId(jobId);

    };

    const handleDelete = async () => {
        try {
            const response = await fetch(`/api/${selectedJobId}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Failed to delete job');
            }

            // Since there's no payload property, directly parse the response body
            const deletedJob = await response.json();

            dispatch({ type: 'DELETE_JOB', payload: deletedJob });
            setSelectedJobId(null); // Reset selected job ID after deletion

        } catch (error) {
            console.error('Error deleting job:', error);
            // Handle error here
        }
    };



    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="flex justify-between items-center w-full dark:bg-gray-800 text-gray-900 bg-white dark:text-white ">

                <h1 className="p-3 text-lg font-semibold text-left rtl:text-right sm:mx-4">
                    Jobs Details
                    <p className="mt-1 md:text-sm font-normal text-gray-500 dark:text-gray-400 text-xs">Effortlessly Manage Your Job Applications: From Submission to Success!.</p>
                </h1>

                <div className="btns flex justify-start">
                    <button onClick={handleDelete} className="text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400 md:text-xl shadow-md rounded-md  md:p-3 mx-2 hover:text-white p-2 hover:border-white">
                        <RiDeleteBin5Line />
                    </button>

                    <Link to='/addnewjob' className="text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400 md:text-xl shadow-md rounded-md  md:p-3 mx-4 hover:text-white p-2 hover:border-white" >
                        <MdAdd />
                    </Link>

                </div>
            </div>

            <div className="table-wrapper overflow-x-auto ">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-300">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-5">
                                Select
                            </th>
                            <th scope="col" className="p-5">
                                Position
                            </th>
                            <th scope="col" className="p-4">
                                Company
                            </th>
                            <th scope="col" className="p-4">
                                Location
                            </th>
                            <th scope="col" className="p-4">
                                Platform 
                            </th>

                            <th scope="col" className="p-4">
                                Date & Time
                            </th>

                            <th scope="col" className="p-4">
                                Company Replay
                            </th>
                            <th scope="col" className="p-4 text-center">
                                Edit
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs && jobs.map((job) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={job._id}>
                                <td className="p-6">
                                    <input
                                        type="checkbox"
                                        value={job._id}
                                        checked={selectedJobId === job._id}
                                        onChange={(event) => handleSelectChange(event, job._id)}
                                    />
                                </td>
                                <th scope="row" className="p-4 font-medium text-gray-400 whitespace-nowrap dark:text-white" >
                                    {job.positionName}
                                </th>
                                <td className="p-4">
                                    {job.companyName}
                                </td>
                                <td className="p-4 capitalize">
                                    {job.location}
                                </td>
                                <td className="p-4 capitalize">
                                    {job.platform}
                                </td>
                                <td className="p-4 flex-col">
                                    <div>
                                        {(job.createdAt).slice(0, 10)}
                                    </div>
                                    <div>
                                        {(job.createdAt).slice(11, 16)}
                                    </div>
                                </td>

                                <td className="p-4">
                                    {job.gotAnReplay ? "Got replay" : "No replay"}

                                </td>
                                <td className="p-4 text-center">
                                    <Link to='' className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                        Edit
                                    </Link>
                                </td>
                            </tr>
                        ))}



                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default JobsTable;