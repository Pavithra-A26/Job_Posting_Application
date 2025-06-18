import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import './form.css';

export const JobForm = ({ onClose }) => {

    const [formData, setFormData] = useState({
        title: '',
        company: '',
        location: '',
        type: '',
        salaryRange: '',
        deadline: '',
        description: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:5000/jobs', formData);
        console.log('Job posted successfully:', response.data);
        alert('Job posted successfully!');
        setFormData({
        title: '',
        company: '',
        location: '',
        type: '',
        salaryRange: '',
        deadline: '',
        description: '',
      });
      } catch (error) {
        console.error('Error posting job:', error);
        alert('Failed to post job');
      }
    };

   

  return (
    <>
    <div className="modal-overlay">
      <div className="modal-content">
        
       <div className="form-container">
        <button className="close-button" onClick={onClose}>×</button>
      <h2>Create Job Opening</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Job Title</label>
            <input
              type="text"
              name="title"
              placeholder="Full Stack Developer"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              name="company"
              placeholder="Amazon, Microsoft"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              name="location"
              placeholder="Choose Preferred Location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Job Type</label>
            <select name="type" value={formData.type} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="FullTime">FullTime</option>
              <option value="PartTime">PartTime</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Salary Range</label>
            <input
              type="text"
              name="salaryRange"
              placeholder="₹0 - ₹12,00,000"
              value={formData.salaryRange}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Application Deadline</label>
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group full-width">
          <label>Job Description</label>
          <textarea
            name="description"
            placeholder="Please share a description to let the candidate know more about the job role"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>

        <div className="form-actions">
          <button type="button" className="draft-btn">Save Draft</button>
          <button type="submit" className="publish-btn">Publish »</button>
        </div>
      </form>
    </div>
    </div>
    </div>
    </>
  )
}
