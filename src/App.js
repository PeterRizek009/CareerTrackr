import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar';
import './App.css';
import AddNewJob from './components/addNewJob';
import JobDetails from './components/jobDetails';
import { useJobContext } from './hooks/useJobContext';
import { useEffect } from 'react';
import Landing from './pages/landingpage';
import Home from './pages/home';
import Footer from './components/Footer';
import GoogleLoginPage from './pages/googleLoginPage';



function App() {


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
  }, [dispatch])



return (
  <div className="App">
    <BrowserRouter>
      <Navbar />
      <div className='pages'>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path="/login" element={<GoogleLoginPage />} />
          <Route path='/home' element={<Home jobs={jobs} />} />
          <Route path='/addnewjob' element={<AddNewJob />} />
          <Route path='/jobDetails/:id' element={<JobDetails jobs={jobs} />} />
        </Routes>

      </div>
      <Footer />
    </BrowserRouter>

  </div>
);
}

export default App;
