import React from 'react';
import { Row, Col, Form, Input, Button, message } from 'antd';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/actions/usersActions';
import { Link } from 'react-router-dom';

function Register() {
    const [form] = Form.useForm();

    const dispatch = useDispatch();
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const submitHandlerForRegister = values => {
        if (values.password !== values.confirm_password) {
            message.error('Password do not match!')
        }
        else if (!validateEmail(values.email)) {
            message.error('Invalid Email Format!');
        }
        else if (values.password.length < 6) {
            message.error('Password must have minimum 6 characters');
        }
        else {
            //console.log(values);
            dispatch(registerUser(values));
            form.resetFields();
        }
    }
    return (
        <div className='register'>
            <Row justify="center">
                <Col lg={12} sm={16} xs={20} className='box-shadow-css p-5'>
                    <h3>Register</h3>
                    <Form form={form} layout="vertical" onFinish={submitHandlerForRegister}>
                        <Form.Item label="First Name" name="firstName" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Last Name" name="lastName" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Email" name="email" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Password" name="password" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Confirm Password" name="confirm_password" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Button type="primary" htmlType='submit'>Register</Button>
                        <span className='px-3'>Already a User?</span>
                        <Link to={`/login`}>
                            Login now!
                        </Link>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Register;
