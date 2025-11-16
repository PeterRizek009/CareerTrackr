import { Link } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdAdd } from "react-icons/md";
import { useState } from "react";
import { useJobContext } from "../hooks/useJobContext";
import AddNewJob from './addNewJob';
import Modal from "./modal";



const JobsTable = ({ jobs }) => {

    const [isOpen, setIsOpen] = useState(false);


    const openModal = () => {
        console.log(isOpen);
        setIsOpen(true);
    };

    const closeModal = () => {
        console.log(isOpen);
        setIsOpen(false)

    };

    const [selectedJobId, setSelectedJobId] = useState(null);


    const { dispatch } = useJobContext()

    const handleSelectChange = (event, jobId) => {
        setSelectedJobId(jobId);

    };

    const handleDelete = async () => {
        try {
            const response = await fetch(`https://careertrackr-backend.onrender.com/api/${selectedJobId}`, {
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


    const tableHead = [
        "Select", "Position", "Company", "Location", "Platform", "Time & Date", "Company Replay", "Edit"
    ]


    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-screen-xl mx-auto">
            <div className="flex justify-between items-center w-full dark:bg-gray-800 text-gray-900 bg-white dark:text-white ">

                <h1 className="p-3 text-lg font-semibold text-left rtl:text-right sm:mx-4">
                    Jobs Details
                    <p className="mt-1 md:text-sm font-normal text-gray-500 dark:text-gray-400 text-xs">
                        Effortlessly Manage Your Job Applications: From Submission to Success!.
                    </p>
                </h1>

                <div className="btns flex justify-start">
                    <button onClick={handleDelete} className="text-white   bg-gray-700 dark:text-gray-400 md:text-xl shadow-md rounded-md  md:p-3 mx-2 hover:text-white p-2 hover:border-white">
                        <RiDeleteBin5Line />
                    </button>

                    <button onClick={openModal} className="text-white   bg-gray-700 dark:text-gray-400 md:text-xl shadow-md rounded-md  md:p-3 mx-4 hover:text-white p-2 hover:border-white" >
                        <MdAdd />
                    </button>

                    <Modal isOpen={isOpen} closeModal={closeModal}  >
                        <AddNewJob closeModal={closeModal} />
                    </Modal>

                </div>
            </div>


            <div className="table-wrapper overflow-x-auto ">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-300">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {tableHead.map((el) => (
                                <th scope="col" className="p-5" key={el}>
                                    {el}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {jobs && jobs.map((job) => (
                            <tr className="text-black border-b bg-gray-200 border-red-400" key={job._id}>
                                <td className="p-6">
                                    <input
                                        type="checkbox"
                                        value={job._id}
                                        checked={selectedJobId === job._id}
                                        onChange={(event) => handleSelectChange(event, job._id)}
                                    />
                                </td>
                                <th scope="row" className="p-4 font-medium" >
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
                                    {job.gotAnReply}

                                </td>
                                <td className="p-4">
                                    <Link to={`/jobDetails/${job._id}`} className="font-medium p-3 bg-gray-300 hover:shadow-md">
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