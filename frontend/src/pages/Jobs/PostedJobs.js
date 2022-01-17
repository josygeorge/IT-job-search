import React from 'react';
import { useSelector } from 'react-redux';
import MainLayout from '../../components/MainLayoutAntd';
import { Table } from 'antd';
import moment from 'moment';

import { EditOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

function PostedJobs() {
    const allJobs = useSelector(state => state.jobsReducer).jobs;
    // get user from local storage
    const user = JSON.parse(localStorage.getItem('user'));
    const userName = user.firstName + ' ' + user.lastName;
    const userID = user._id;
    // user based filter
    const postedJobsByUser = allJobs.filter(job => job.postedByUser === userID)

    //history
    const history = useHistory();

    //Table design
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
        },
        {
            title: 'Company',
            dataIndex: 'company',
        },
        {
            title: 'Date',
            dataIndex: 'postedDate',
        },
        {
            title: 'Total Applied',
            dataIndex: 'candidatesApplied',
        },
        {
            title: 'Action',
            render: (text, data) => {
                return <div>
                    <EditOutlined onClick={() => history.push(`/editjob/${data.action._id}`)} />
                </div>
            },
        },
    ];
    const dataSource = [];
    let i = 0;
    for (let job of postedJobsByUser) {
        i++;
        let dataIndexObj = {
            id: i,
            title: job.jobTitle,
            company: job.company,
            postedDate: moment(job.createdAt).format('MMM DD, YYYY'),
            candidatesApplied: job.candidatesApplied.length,
            action: job
        }
        dataSource.push(dataIndexObj);
    }

    return (
        <MainLayout>
            <h2> Jobs posted by {userName}</h2>
            <Table columns={columns} dataSource={dataSource} rowKey='id' />
        </MainLayout>
    )
}

export default PostedJobs;
