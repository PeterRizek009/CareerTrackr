import JobsTable from '../components/jobsTable'


const Home = ({ jobs }) => {


    return (
        <div className="home min-h-[100vh] mx-auto  w-[100%]  md:p-[40px] p-3  mt-4">
            <JobsTable jobs={jobs} />
        </div>
    )
}


export default Home;