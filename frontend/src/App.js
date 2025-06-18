import React, { useState } from 'react';
import './App.css';
import { JobForm } from './pages/JobForm';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Navbar onCreateClick={() => setIsModalOpen(true)} />
      <Home />
      {isModalOpen && <JobForm onClose={() => setIsModalOpen(false)} />}
    </>
  );
}

export default App;
