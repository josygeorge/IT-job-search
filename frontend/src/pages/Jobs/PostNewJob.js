import React, { useState } from 'react'
import MainLayout from '../../components/MainLayoutAntd';
import { Col, Form, Input, Row, Tabs, Button, InputNumber } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postNewJob } from '../../redux/actions/jobsActions';

const { TabPane } = Tabs;

function PostNewJob() {
    const dispatch = useDispatch()

    const [jobInfo, setJobInfo] = useState();
    const [activeTabKey, setActiveTabKey] = useState("1");

    const jobInfoSaveHandler = values => {
        setJobInfo(values);
        setActiveTabKey("2");
    }
    const postAllJobAndCompanyInfoHandler = values => {

        const finalPostObj = { ...jobInfo, ...values };
        console.log(finalPostObj)
        dispatch(postNewJob(finalPostObj));
    }
    return (
        <MainLayout>
            <h1>Post a new job</h1>
            <div className='text-right mr-5'>
                <Link to="/">
                    Go to Home Page &#62;&#62;
                </Link>
            </div>
            <Tabs defaultActiveKey="1" className='postnewjob' activeKey={activeTabKey}>
                <TabPane tab="Job Info" key="1">
                    <Form className='m-3' layout="vertical" onFinish={jobInfoSaveHandler}>
                        <Row gutter={20}>
                            <Col lg={12} sm={24} xs={24}>
                                <Form.Item label="Title" name="jobTitle" rules={[{ required: true }]}>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col lg={12} sm={24} xs={24}>
                                <Form.Item label="Experience" name="experience" rules={[{ required: true }]}>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col lg={12} sm={24} xs={24}>
                                <Form.Item label="Skills" name="skills" rules={[{ required: true }]}>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col lg={12} sm={24} xs={24}>
                                <Form.Item label="Qualification" name="qualification" rules={[{ required: true }]}>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col lg={12} sm={12} xs={24}>
                                <Form.Item label="Min. Salary (in &#163;)" name="salaryRangeLower" rules={[{ required: true }]}>
                                    <InputNumber placeholder='eg: 40000' addonBefore="&#163;" />
                                </Form.Item>
                            </Col>
                            <Col lg={12} sm={12} xs={24}>
                                <Form.Item label="Max. Salary (in &#163;)" name="salaryRangeUpper" rules={[{ required: true }]}>
                                    <InputNumber placeholder='eg: 70000' addonBefore="&#163;" />
                                </Form.Item>
                            </Col>
                            <Col lg={24} sm={24} xs={24}>
                                <Form.Item label="Job Info - Summary" name="jobInfo" rules={[{ required: true }]}>
                                    <Input.TextArea />
                                </Form.Item>
                            </Col>
                            <Col lg={24} sm={24} xs={24}>
                                <Form.Item label="Job Description" name="jobDescription" rules={[{ required: true }]}>
                                    <Input.TextArea rows={4} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Button type="primary" htmlType='submit'>Next</Button>
                    </Form>
                </TabPane>
                <TabPane tab="Company Info" key="2">
                    <Form className='m-3' layout="vertical" onFinish={postAllJobAndCompanyInfoHandler}>
                        <Row gutter={20}>
                            <Col lg={12} sm={24} xs={24}>
                                <Form.Item label="Company Name" name="company" rules={[{ required: true }]}>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col lg={12} sm={24} xs={24}>
                                <Form.Item label="Company Email" name="companyEmail" rules={[{ required: true }]}>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col lg={12} sm={24} xs={24}>
                                <Form.Item label="Phone" name="phone" rules={[{ required: true }]}>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col lg={24} sm={24} xs={24}>
                                <Form.Item label="Company Description" name="companyDescription" rules={[{ required: true }]}>
                                    <Input.TextArea rows={5} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Button className='mr-3' onClick={() => setActiveTabKey("1")}>
                            &#60;&#60;Previous
                        </Button>
                        <Button type="primary" htmlType='submit'>Save &#38; Post Job</Button>
                    </Form>
                </TabPane>
            </Tabs>
        </MainLayout>
    )
}

export default PostNewJob;
