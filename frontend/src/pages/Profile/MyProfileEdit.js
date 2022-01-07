
import React, { useState } from 'react'
import MainLayout from '../../components/MainLayoutAntd';
import { Col, Form, Input, Row, Tabs, Button, Tooltip } from 'antd';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/actions/usersActions';

const { TabPane } = Tabs;

function MyProfileEdit() {

    const [personalInfo, setPersonalInfo] = useState();
    const [activeTabKey, setActiveTabKey] = useState("1");
    const dispatch = useDispatch();

    const setPersonalInfoHandler = values => {
        setPersonalInfo(values);
        setActiveTabKey("2");
    }
    const profileFullUpdateHandler = values => {
        const finalProfileObj = { ...personalInfo, ...values };

        dispatch(updateUser(finalProfileObj));
    }
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <MainLayout theme='dark'>
            <h1>Edit Profile</h1>
            <div className='text-right mr-5'>
                <Link to="/myprofile">
                    Back to Profile
                </Link>
            </div>

            <Tabs defaultActiveKey="1" className='profile' activeKey={activeTabKey}>
                <TabPane tab="Personal Info" key="1">
                    <Form layout="vertical" onFinish={setPersonalInfoHandler} initialValues={user}>
                        <Row gutter={20} className='mr-2'>
                            <Col lg={12} sm={24} xs={24}>
                                <Form.Item label="First Name" name="firstName" rules={[{ required: true }]}>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col lg={12} sm={24} xs={24}>
                                <Form.Item label="Last Name" name="lastName" rules={[{ required: true }]}>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col lg={12} sm={24} xs={24}>
                                <Form.Item label="Phone" name="phone" rules={[{ required: true }]}>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col lg={12} sm={24} xs={24}>
                                <Form.Item label="Address" name="address" rules={[{ required: true }]}>
                                    <Input.TextArea rows={2} />
                                </Form.Item>
                            </Col>
                            <Col lg={12} sm={24} xs={24}>
                                <Form.Item label="About" name="about" rules={[{ required: true }]}>
                                    <Input.TextArea rows={4} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Button type="primary" htmlType='submit'>Next</Button>
                    </Form>
                </TabPane>
                <TabPane className='tab-2' tab="Skills,Experience and Education" key="2">
                    <Form layout="vertical" initialValues={user} onFinish={profileFullUpdateHandler}>
                        <Row className='m-2' gutter={[33, 22]}>
                            <Col lg={24} sm={24} xs={24} className='tab-2-col box-shadow-css-profile'>
                                <h5 style={{ textAlign: 'center', textTransform: 'uppercase' }}>Skills</h5>
                                <Form.List name="skills">
                                    {(skills, { add, remove }) => (
                                        <div>
                                            {skills.map((field, index) => (
                                                <div className='flex-layout' key={index}>
                                                    <Form.Item
                                                        {...field}
                                                        label={`Skills[${index + 1}]`
                                                        }
                                                        rules={[{ required: true, message: 'Field is required' }]}>
                                                        <Input.TextArea rows={3} />
                                                    </Form.Item>
                                                    <Tooltip title="Add" className='px-2'>
                                                        <PlusCircleOutlined onClick={() => add()} style={{ fontSize: '20px', color: '#08c' }} />
                                                    </Tooltip>

                                                    {index !== 0 && (
                                                        <Tooltip title="Remove">
                                                            <MinusCircleOutlined onClick={() => remove(index)} style={{ fontSize: '18px', color: '#ff4040' }} />
                                                        </Tooltip>
                                                    )}
                                                </div>

                                            ))}
                                        </div>
                                    )}

                                </Form.List>
                            </Col>
                            <Col lg={24} sm={24} xs={24} className='tab-2-col box-shadow-css-profile'>
                                <h5 style={{ textAlign: 'center', textTransform: 'uppercase' }}>Education</h5>
                                <Form.List name="education">
                                    {(education, { add, remove }) => (
                                        <div>
                                            {education.map((field, index) => (
                                                <div className='flex-layout' key={index}>
                                                    <Form.Item
                                                        {...field}
                                                        label={`Education[${index + 1}]`
                                                        }
                                                        rules={[{ required: true, message: 'Field is required' }]}>
                                                        <Input.TextArea rows={3} />
                                                    </Form.Item>
                                                    <Tooltip title="Add" className='px-2'>
                                                        <PlusCircleOutlined onClick={() => add()} style={{ fontSize: '20px', color: '#08c' }} />
                                                    </Tooltip>

                                                    {index !== 0 && (
                                                        <Tooltip title="Remove">
                                                            <MinusCircleOutlined onClick={() => remove(index)} style={{ fontSize: '18px', color: '#ff4040' }} />
                                                        </Tooltip>
                                                    )}
                                                </div>

                                            ))}
                                        </div>
                                    )}

                                </Form.List>
                            </Col>
                            <Col lg={24} sm={24} xs={24} className='tab-2-col box-shadow-css-profile'>
                                <h5 style={{ textAlign: 'center', textTransform: 'uppercase' }}>Experience</h5>
                                <Form.List name="experience">
                                    {(experience, { add, remove }) => (
                                        <div>
                                            {experience.map((field, index) => (
                                                <div className='flex-layout' key={index}>
                                                    <Form.Item
                                                        {...field}
                                                        label={`Experience[${index + 1}]`
                                                        }
                                                        rules={[{ required: true, message: 'Field is required' }]}>
                                                        <Input.TextArea rows={3} />
                                                    </Form.Item>
                                                    <Tooltip title="Add" className='px-2'>
                                                        <PlusCircleOutlined onClick={() => add()} style={{ fontSize: '20px', color: '#08c' }} />
                                                    </Tooltip>

                                                    {index !== 0 && (
                                                        <Tooltip title="Remove">
                                                            <MinusCircleOutlined onClick={() => remove(index)} style={{ fontSize: '18px', color: '#ff4040' }} />
                                                        </Tooltip>
                                                    )}
                                                </div>

                                            ))}
                                        </div>
                                    )}

                                </Form.List>
                            </Col>
                            <Col lg={24} sm={24} xs={24} className='tab-2-col box-shadow-css-profile'>
                                <h5 style={{ textAlign: 'center', textTransform: 'uppercase' }}>Project</h5>
                                <Form.List name="project">
                                    {(project, { add, remove }) => (
                                        <div>
                                            {project.map((field, index) => (
                                                <div className='flex-layout' key={index}>
                                                    <Form.Item
                                                        {...field}
                                                        label={`Project[${index + 1}]`
                                                        }
                                                        rules={[{ required: true, message: 'Field is required' }]}>
                                                        <Input.TextArea rows={3} />
                                                    </Form.Item>
                                                    <Tooltip title="Add" className='px-2'>
                                                        <PlusCircleOutlined onClick={() => add()} style={{ fontSize: '20px', color: '#08c' }} />
                                                    </Tooltip>

                                                    {index !== 0 && (
                                                        <Tooltip title="Remove">
                                                            <MinusCircleOutlined onClick={() => remove(index)} style={{ fontSize: '18px', color: '#ff4040' }} />
                                                        </Tooltip>
                                                    )}
                                                </div>

                                            ))}
                                        </div>
                                    )}

                                </Form.List>
                            </Col>
                        </Row>
                        <Button className='m-3' onClick={() => setActiveTabKey("1")}>
                            &#60;&#60;Previous
                        </Button>
                        <Button type="primary" htmlType='submit'>Save &#38; Update</Button>
                    </Form>
                </TabPane>
            </Tabs>
        </MainLayout >
    )
}

export default MyProfileEdit;
