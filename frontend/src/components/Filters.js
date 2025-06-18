import React, { useState } from 'react';
import './Filters.css';
import type from './assest/user-add.png';
import search from './assest/search.png'
import location from './assest/marker.png'

const Filters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    title: '',
    location: '',
    type: '',
    salary: 800000,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters); // send data to parent
  };

  return (
    <div className="filters">
      <div className='input-icon'>
        <img src={search}/>
        <input
        src={search}
        type="text"
        name="title"
        placeholder="Search by Job Title, Role"
        value={filters.title}
        onChange={handleChange}
      />
      </div>
      
      <div className='input-icon'>
        <img src={location}/>
        <select name="location" value={filters.location} onChange={handleChange}>
        <option value="">Preferred Location</option>
        <option value="Chennai">Chennai</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Hyderabad">Hyderabad</option>
      </select>
      </div>
      <div className='input-icon'>
        <img src={type}/>
        <select name="type" value={filters.type} onChange={handleChange}>
        <option value="">Job Type</option>
        <option value="FullTime">FullTime</option>
        <option value="PartTime">PartTime</option>
        <option value="Contract">Contract</option>
        <option value="Internship">Internship</option>
      </select>
      </div>
      <div className="slider-container">
        <span>Salary Per Month: ₹{filters.salary}</span>
        <input
          type="range"
          name="salary"
          min="50000"
          max="800000"
          step="10000"
          value={filters.salary}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Filters;
