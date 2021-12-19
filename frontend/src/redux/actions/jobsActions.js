import { message } from 'antd';
import Axios from 'axios';

export const getAllJobs = () => async dispatch => {
    dispatch({ type: 'LOADING', payload: true })
    try {
        const { data } = await Axios.get('/api/jobs/all-jobs');
        dispatch({
            type: 'GET_ALL_JOBS',
            payload: data
        })
        dispatch({ type: 'LOADING', payload: false })
    } catch (error) {
        console.log(error);
        dispatch({ type: 'LOADING', payload: false })
    }
}

export const postNewJob = (values) => async dispatch => {
    // push user ID to the post new job request object - the jobs collection requires the info - 'who posted the job'.
    values.postedByUser = JSON.parse(localStorage.getItem('user'))._id;

    dispatch({ type: 'LOADING', payload: true })
    try {
        const response = await Axios.post('/api/jobs/post-new-job', values);
        dispatch({ type: 'LOADING', payload: false });
        if (response) {
            message.success('Job Posted Successfully!')
            setTimeout(() => {
                window.location.href = '/';
            }, 1000)
        }
    } catch (error) {
        dispatch({ type: 'LOADING', payload: false });
        message.error(error)
    }
}

export const filterSearchJobs = (filterSearchKey) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true })
    try {
        const { data } = await Axios.get('/api/jobs/all-jobs');
        const jobs = data;
        // Search on Job title
        const filteredJobs = jobs.filter(job => job.jobTitle.toLowerCase().includes(filterSearchKey.toLowerCase().trim()));

        //SEARCH ANYTHING LOGIC below ---> * need to work more
        /* const filteredJobs = jobs.filter(obj =>
            Object.keys(obj)
                .some(key => {
                    if (obj[key] !== null) {
                        const tempKey = obj[key].toString().toLowerCase();
                        const tempSearch = filterSearchKey.toLowerCase();
                        return tempKey.includes(tempSearch);
                    }
                })
        ); */
        // if no job is filtered out, show message
        if (filteredJobs.length < 1) {
            message.info({
                key: 'no-jobs',
                content: 'NO JOBS AVAILABLE',
                duration: 0,
                style: {
                    marginTop: '20vh',
                },
            })
        } else {
            message.destroy('no-jobs');
        }
        dispatch({
            type: 'GET_ALL_JOBS',
            payload: filteredJobs
        })
        dispatch({ type: 'LOADING', payload: false })
    } catch (error) {
        console.log(error);
        dispatch({ type: 'LOADING', payload: false })
    }
}