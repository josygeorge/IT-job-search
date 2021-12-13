import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'antd';
import moment from 'moment';
import MainLayout from '../components/MainLayoutAntd';

function JobDetails(props) {
    const jobID = props.match.params.id;
    const { jobs } = useSelector(state => state.jobsReducer);
    // get the job
    const job = jobs.find((job) => job._id === jobID);
    return (
        <MainLayout>
            <h4>Job Details</h4>
            {job && (<div className="job-details">
                <h5>{job.jobTitle}</h5>
                <p><strong>Company:</strong> {job.company}</p>
                <p><strong>Job Description:</strong> {job.jobDescription}</p>
                <hr />
                <p><strong>Skills:</strong> {job.skills}</p>
                <p><strong>Experience:</strong> {job.experience} years</p>
                <p><strong>Qualification:</strong> {job.qualification}</p>
                <p><strong>Salary:</strong> &#163;{job.salaryRangeLower} - &#163;{job.salaryRangeUpper}</p>
                <hr />
                <p><strong>Company Profile:</strong> {job.companyDescription}</p>
                <p><strong>Candidates Applied for the position:</strong> {job.candidatesApplied.length}</p>
                <hr />
                <div className="flex-layout justify-content-between">
                    <Button type="primary">Apply Now</Button>
                    <p><em>Posted on:</em> {moment(job.createdAt).format('MMM DD, yyyy')}</p>
                </div>
            </div>)}
        </MainLayout>
    )
}

export default JobDetails;
