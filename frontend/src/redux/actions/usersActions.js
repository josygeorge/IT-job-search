import axios from "axios";
import { message } from 'antd';

export const registerUser = (values) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true });
    try {
        await axios.post('/api/users/register', values);
        message.success('User registration successful!');
        setTimeout(() => {
            window.location.href = "/login";
        }, 500);
        dispatch({ type: 'LOADING', payload: false });
    } catch ({ response }) {
        dispatch({ type: 'LOADING', payload: false });
        console.log(response);
        message.error(response.data.message)

    }
}
export const loginUser = (values) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true });
    try {
        const user = await axios.post('/api/users/login', values);
        localStorage.setItem('user', JSON.stringify(user.data))
        setTimeout(() => {
            window.location.href = "/"; // redirect to home page
        }, 500);
        dispatch({ type: 'LOADING', payload: false });
    } catch (error) {
        dispatch({ type: 'LOADING', payload: false });
        message.error('Invalid login credentials!');
    }
}

export const logoutUser = () => async dispatch => {
    dispatch({ type: 'LOADING', payload: true });
    try {

        localStorage.removeItem('user')
        const { data } = await axios.get('/api/users/logout')
        // notification
        message.info(data.message);
        //window.location.reload();
        dispatch({ type: 'LOADING', payload: false });
    } catch (error) {
        dispatch({ type: 'LOADING', payload: false });
        message.error(error);
    }
}

export const updateUser = (values) => async dispatch => {
    // geting user ID from localStorage and assigning to profile obj 'values'
    values._id = JSON.parse(localStorage.getItem('user'))._id;

    dispatch({ type: 'LOADING', payload: true });
    try {
        await axios.post('/api/users/update', values)
            .then(res => {
                window.location.href = "/myprofile"; // redirect
                message.success('User Updated')
                localStorage.setItem('user', JSON.stringify(res.data));
            });
        dispatch({ type: 'LOADING', payload: false });
    } catch (error) {
        dispatch({ type: 'LOADING', payload: false });
        message.error(`Error occured in Updating User! ${error}`);
    }
}
