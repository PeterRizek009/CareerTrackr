import { useState } from "react";
import { useJobContext } from "../hooks/useJobContext";


const AddNewJob = ({ closeModal }) => {

    const { dispatch } = useJobContext()



    const [positionName, setPositionName] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [location, setLocation] = useState('')
    const [platform, setPlatform] = useState('')
    const [gotAnReply, setGotAnReply] = useState(false)




    // handleSubmit 
    const handleSubmit = async (e) => {
        e.preventDefault();
        


        const job = { positionName, companyName, location, platform, gotAnReply }



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
                setGotAnReply('');
                dispatch({ type: 'ADD_NEW_JOB', payload: newJobData });
                closeModal()
               
            }
            // Reset form fields after successful submission
        } catch (error) {
            console.error('Error adding job:', error);
            alert('Failed to add job');
        }

    };


    return (

        <form className="max-w-lg mx-auto mt-8" onSubmit={handleSubmit}>

            <div className="mb-5">
                <label htmlFor="positionName" className="label">Position name</label>
                <input type="text" id="positionName" name="Position" value={positionName} onChange={(e) => setPositionName(e.target.value)} className="input" required />
            </div>
            <div className="mb-5">
                <label htmlFor="companyName" className="label">Company</label>
                <input type="text" id="companyName" name="Company" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="input" required />
            </div>

            <div className="mb-5">
                <label htmlFor="Location" className="label">Location</label>
                <input type="text" id="Location" name="Location" value={location} onChange={(e) => setLocation(e.target.value)} className="input" required />
            </div>

            <div className="mb-5">
                <label htmlFor="Location" className="label">Platform</label>
                <input type="text" id="Location" name="Location" value={platform} onChange={(e) => setPlatform(e.target.value)} className="input" required />
            </div>

            <div className="mb-5">
                <label htmlFor="optionSelect" className="label">Company Replay</label>
                <select
                    id="optionSelect"
                    name="Option"
                    value={gotAnReply}
                    onChange={(e) => setGotAnReply(e.target.value)}
                    className="input"
                    required
                >
                    <option value="">Choose thge suitable reply</option>
                    <option value={'Nothing yet'}>Nothing yet</option>
                    <option value={'Rejection Email'}>Rejection Email</option>
                    <option value={'Positive Email'}>Positive Email</option>
                    <option value={'Call form HR'}>got a Call</option>
                    <option value={'Interview date'}>Interview date</option>
                </select>
            </div>


            <button type="submit" className="button-primary mt-4">
                Add New Job
            </button>



        </form>


    );
}

export default AddNewJob;