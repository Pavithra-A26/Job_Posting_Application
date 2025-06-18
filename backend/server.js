const express = require ('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

PORT = process.env.PORT || 5000;


const MONGOURL = process.env.MONGO_URL;
mongoose.connect(MONGOURL).then(()=>{
    console.log("db connected...")
})
.catch((error) => console.log("error in db connection...." + error));

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  type: String,
  salaryRange: String,
  description: String,
//   requirements: String,
//   responsibilities: String,
  deadline: Date,
});

const Job = mongoose.model('Job', jobSchema);

// create jobs

app.post('/jobs', async(req,res) => {
    try{
        const job = new Job(req.body);
        await job.save();
        res.status(201).json(job);
    }catch(error){
        res.status(500).json({error:error.message});
    }
});


//get job by filter

app.get('/jobs',async(req,res) => {
    const {title,location,type,minSalary,maxSalary} = req.query;
    let filter = {};
    if(title) filter.title = new RegExp(title, 'i');
    if(location) filter.location = new RegExp(location ,'i');
    if(type) filter.type =type;

    try{
        const jobs = await Job.find(filter);
        res.json(jobs);
    }catch(error){
        res.status(500).json({error: error.message});
    }
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})


