import React from 'react';
import './JobCard.css';
import location from './assest/building.png';
import exp from './assest/user-add.png';
import salary from './assest/layers.png';

const JobCard = ({ job }) => (
  <div className="job-card">
    <div className="badge">24h Ago</div>
    {/* <img src={job.logo} alt="company" className="company-logo" /> */}
    <h2>{job.company}</h2>
    <h3>{job.title}</h3>
    <p className="details"><img src={exp}/> {job.experience}Exp • <img src={location}/> {job.location} • <img src={salary}/> ₹{job.salaryRange} LPA</p>
    <p className="description">{job.description}</p>
    <button className="apply-btn">Apply Now</button>
  </div>
);

export default JobCard;
