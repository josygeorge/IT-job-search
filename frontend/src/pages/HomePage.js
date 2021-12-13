import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { Row, Col, Button } from 'antd';
import moment from 'moment';

import { getAllJobs } from '../redux/actions/jobsActions';
import MainLayout from '../components/MainLayoutAntd';

function HomePage() {
    const { jobs } = useSelector(state => state.jobsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllJobs())
    }, [])
    return (
        <MainLayout>
            <Row gutter={[14, 14]}>
                {
                    jobs.map((job) => {
                        return <Col lg={12} sm={24} key={job._id}>
                            <div className='jobs box-shadow-css'>
                                <h5>{job.jobTitle}</h5>
                                <p>{job.company}</p><hr />
                                <p>{job.jobInfo}</p>
                                <div className="flex-layout">
                                    <p>Package: <strong> &#163;{job.salaryRangeLower} - &#163;{job.salaryRangeUpper}</strong>, </p>
                                    <p style={{ marginLeft: '22px' }}>Experience: <strong>{job.experience}</strong> years</p>
                                </div>
                                <hr />
                                <div className="flex-layout justify-content-between">
                                    <Link to={`/jobdetails/${job._id}`}><Button type="primary">More</Button></Link>
                                    <p><em>Posted on:</em> {moment(job.createdAt).format('MMM DD, yyyy')}</p>
                                </div>
                            </div>
                        </Col>
                    })
                }
            </Row>
        </MainLayout>
    )
}

export default HomePage;
