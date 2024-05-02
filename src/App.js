import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import Navbar from './components/navbar';
import './App.css';
import AddNewJob from './components/addNewJob';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/addnewjob' element={<AddNewJob />} />
          </Routes>

        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
