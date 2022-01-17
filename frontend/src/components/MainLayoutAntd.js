import React, { useState } from 'react';
import { Layout, Menu, Switch, Popconfirm } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    HomeOutlined,
    BarChartOutlined,
    UserOutlined,
    PlusCircleOutlined,
    CheckCircleOutlined,
    LogoutOutlined
} from '@ant-design/icons';

import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions/usersActions';
import FilterSearch from './FilterSearch';


const { Header, Sider, Content } = Layout;

function MainLayout(props) {
    let history = useHistory();
    const { theme } = useSelector(state => state.themeModeReducer);
    const dispatch = useDispatch();

    const [collapsed, setCollapsed] = useState(true);

    const toggle = () => {
        setCollapsed(!collapsed);
    };
    // Menu- Change Theme Mode
    const changeTheme = value => {
        dispatch({
            type: 'THEME_MODE',
            payload: value ? 'light' : 'dark'
        })
    }
    const logout = async () => {
        dispatch(logoutUser());
    }
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo">IT Jobs Search</div>
                <Switch
                    checked={theme === 'light'}
                    onChange={changeTheme}
                    checkedChildren="Light"
                    unCheckedChildren="Dark"
                    style={{ marginLeft: '5px' }}
                />
                <br />
                <br />
                <Menu
                    theme={theme}
                    defaultOpenKeys={['sub1']}
                    defaultSelectedKeys={[window.location.pathname]}
                    mode="inline">
                    <Menu.Item key="/" icon={<HomeOutlined />}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="/myprofile" icon={<UserOutlined />}>
                        <Link to="/myprofile">My Profile</Link>
                    </Menu.Item>
                    <Menu.Item key="/applied" icon={<BarChartOutlined />}>
                        <Link to="/applied">Jobs Applied</Link>
                    </Menu.Item>
                    <Menu.Item key="/postnewjob" icon={<PlusCircleOutlined />}>
                        <Link to="/postnewjob">Post New Job</Link>
                    </Menu.Item>
                    <Menu.Item key="/postedjobs" icon={<CheckCircleOutlined />}>
                        <Link to="/postedjobs">Posted Jobs</Link>
                    </Menu.Item>
                    <Menu.Item key="/logout" icon={<LogoutOutlined />}>
                        <Popconfirm
                            title="Are you sure to logout?"
                            onConfirm={logout}
                            onCancel={() => history.push("/")}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Link to='/'>Logout</Link>
                        </Popconfirm>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0, position: 'sticky', overflow: 'auto', top: 0, zIndex: 9999 }}>

                    <div className='flex-layout justify-content-between'>
                        <div>
                            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: toggle,
                            })}
                        </div>
                        <div style={{ display: props.searchShow ? 'inline' : 'none' }}>
                            <FilterSearch />
                        </div>
                        <div className='mr-2 px-2 pt-2 user-info'>
                            <h5>
                                <UserOutlined />
                                <span> {user.firstName} {user.lastName}</span>
                            </h5>
                        </div>
                    </div>
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    );
}

export default MainLayout;