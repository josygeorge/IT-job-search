import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
                                    <p>Package: <b>{job.salaryRangeLower}-{job.salaryRangeUpper}</b>, </p>
                                    <p style={{ marginLeft: '22px' }}>Experience: <b>{job.experience}</b> years</p>
                                </div>
                                <hr />
                                <div className="flex-layout justify-content-between">
                                    <Button type="primary">More</Button>
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

export default HomePage
