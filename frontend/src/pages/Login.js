import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/actions/usersActions';
import { Link } from 'react-router-dom';

function Login() {
    const dispatch = useDispatch();

    const submitHandlerForLogin = values => {
        dispatch(loginUser(values));
    }

    return (
        <div className='login'>
            <Row justify="center">
                <Col lg={12} sm={16} xs={20} className='box-shadow-css p-5'>
                    <h3>Login</h3>
                    <Form layout="vertical" onFinish={submitHandlerForLogin}>
                        <Form.Item label="Email" name="email" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Password" name="password" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Button type="primary" htmlType='submit'>Login</Button>
                        <span className='px-3'>New User?</span>
                        <Link to={`/register`}>
                            Register now!
                        </Link>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Login;
