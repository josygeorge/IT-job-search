import mongoose from 'mongoose';

// Modelling the jobs schema
const jobSchema = new mongoose.Schema({
    jobTitle: { type: String, required: true },
    jobDescription: { type: String, required: true },
    jobInfo: { type: String, required: true },
    company: { type: String, required: true },
    companyDescription: { type: String, required: true },
    skills: { type: String, required: true },
    qualification: { type: String, required: true },
    experience: { type: String, required: true },
    salaryRangeLower: { type: Number, required: true },
    salaryRangeUpper: { type: Number, required: true },
    companyEmail: { type: String, required: true },
    companyPhone: { type: String, required: true },
    candidatesApplied: { type: Array, default: [], required: true },
    postedByUser: { type: String, required: true }
}, {
    timestamps: true
});

const Jobs = new mongoose.model('Jobs', jobSchema);
// module.exports = Jobs;
export default Jobs;