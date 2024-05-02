import { useState } from "react";
import { useJobContext } from "../hooks/useJobContext";


const AddNewJob = () => {

    const { dispatch } = useJobContext()




    const [positionName, setPositionName] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [location, setLocation] = useState('')
    const [platform, setPlatform] = useState('')
    const [gotAnReplay, setGotAnReplay] = useState(false)



    // handleSubmit 
    const handleSubmit = async (e) => {
        e.preventDefault();


        const job = { positionName, companyName, location,platform, gotAnReplay }
        try {
            const response = await fetch('/api', {
                method: 'POST',
                body: JSON.stringify(job),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to add job');
            }

            const newJobData = await response.json();
            if (response.ok) {
                setPositionName('');
                setCompanyName('');
                setLocation('');
                setPlatform('');
                setGotAnReplay('');
                dispatch({ type: 'ADD_NEW_JOB', payload: newJobData });
            }

            // Reset form fields after successful submission

        } catch (error) {
            console.error('Error adding job:', error);
            alert('Failed to add job');
        }
    };

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setJob(prevJob => ({
    //         ...prevJob,
    //         [name]: value
    //     }));
    // };



    return (

        <form className="max-w-sm mx-auto mt-8" onSubmit={handleSubmit}>
            <div className="mb-5">
                <label htmlFor="positionName" className="block mb-2 text-sm font-medium text-gray-700 ">Position name</label>
                <input type="text" id="positionName" name="Position" value={positionName} onChange={(e) => setPositionName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
            </div>
            <div className="mb-5">
                <label htmlFor="companyName" className="block mb-2 text-sm font-medium text-gray-700 ">Company</label>
                <input type="text" id="companyName" name="Company" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
            </div>

            <div className="mb-5">
                <label htmlFor="Location" className="block mb-2 text-sm font-medium text-gray-700 ">Location</label>
                <input type="text" id="Location" name="Location" value={location} onChange={(e) => setLocation(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
            </div>

            <div className="mb-5">
                <label htmlFor="Location" className="block mb-2 text-sm font-medium text-gray-700 ">Platform</label>
                <input type="text" id="Location" name="Location" value={platform} onChange={(e) => setPlatform(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
            </div>

            <div className="mb-5">
                <label htmlFor="optionSelect" className="block mb-2 text-sm font-medium text-gray-700 ">Company Replay</label>
                <select
                    id="optionSelect"
                    name="Option"
                    value={gotAnReplay}
                    onChange={(e) => setGotAnReplay(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                >
                    <option value="">Did you get a replay</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
            </div>


            <button type="submit" className="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
                Add New Job
            </button>
        </form>


    );
}

export default AddNewJob;