import React from 'react'
import MainLayout from '../components/MainLayoutAntd';
import { useSelector, useDispatch } from 'react-redux'

function AllJobs() {
    const data = useSelector(state => state);
    console.log(data);
    return (
        <MainLayout>
            <h1>All Jobs</h1>
        </MainLayout>
    )
}

export default AllJobs
