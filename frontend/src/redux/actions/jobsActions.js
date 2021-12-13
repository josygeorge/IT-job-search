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