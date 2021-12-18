
import React from 'react'
import MainLayout from '../../components/MainLayoutAntd';
import { Col, Row, Button } from 'antd';
import { Link } from 'react-router-dom';

function MyProfile() {

    // get user from local storage
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <MainLayout>
            <h1>Profile</h1>
            <div className='text-center'>
                <Link to="/myprofile-edit">
                    <Button type="primary">Edit Profile</Button>
                </Link>
            </div>

            <div className='m-5 font-weight-bold'>

                <Row className='box-shadow-css-profile p-3 m-2 border'>
                    <Col lg={12} sm={12} xs={24}>Name:</Col>
                    <Col lg={12} sm={12} xs={24}>{user.firstName} {user.lastName}</Col>
                </Row>
                <Row className='box-shadow-css-profile p-3 m-2'>
                    <Col lg={12} sm={12} xs={24}>Email:</Col>
                    <Col lg={12} sm={12} xs={24}>{user.email}</Col>
                </Row>
                <Row className='box-shadow-css-profile p-3 m-2'>
                    <Col lg={12} sm={12} xs={24}>Skills:</Col>
                    <Col lg={12} sm={12} xs={24}>{user.skills}</Col>
                </Row>
                <Row className='box-shadow-css-profile p-3 m-2'>
                    <Col lg={12} sm={12} xs={24}>About:</Col>
                    <Col lg={12} sm={12} xs={24}>{user.about}</Col>
                </Row>
            </div>
        </MainLayout >
    )
}

export default MyProfile;
