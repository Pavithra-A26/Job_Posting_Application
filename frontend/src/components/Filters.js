import React, { useState } from 'react';
import './Filters.css';
import type from './following.png';

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
      <input
        type="text"
        name="title"
        placeholder="Search by Job Title, Role"
        value={filters.title}
        onChange={handleChange}
      />
      <select name="location" value={filters.location} onChange={handleChange}>
        <option value="">Preferred Location</option>
        <option value="Chennai">Chennai</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Hyderabad">Hyderabad</option>
      </select>
      <select name="type" value={filters.type} onChange={handleChange}>
        <option value="">Job Type</option>
        <option value="FullTime">FullTime</option>
        <option value="PartTime">PartTime</option>
        <option value="Contract">Contract</option>
        <option value="Internship">Internship</option>
      </select>
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
