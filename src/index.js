import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { JobContextProvider } from './context/jobContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <JobContextProvider>
      <App />
    </JobContextProvider>
  </React.StrictMode>
);



