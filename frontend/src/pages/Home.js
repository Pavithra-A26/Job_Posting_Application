import React, { useEffect, useState } from 'react';
import Filters from '../components/Filters';
import JobCard from '../components/JobCard';
import axios from 'axios';
import '../components/JobCard.css';
import './home.css';

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    title: '',
    location: '',
    type: '',
    salary: 800000,
  });

  const fetchJobs = async () => {
    try {
      const params = {};
      if (filters.title) params.title = filters.title;
      if (filters.location) params.location = filters.location;
      if (filters.type) params.type = filters.type;
      if (filters.salary) params.maxSalary = filters.salary;

      const response = await axios.get('https://job-posting-application-d9og.onrender.com/jobs', { params });
      setJobs(response.data);
    } catch (err) {
      console.log('Error fetching jobs:', err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [filters]);

  const handleFilterChange = (updatedFilters) => {
    setFilters(updatedFilters);
  };

  return (
    <div className='home-page'>
      <Filters onFilterChange={handleFilterChange} />
      <div className="job-grid">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Home;

