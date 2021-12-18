import React, { useState } from 'react';
import { Layout, Menu, Switch } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    HomeOutlined,
    BarChartOutlined,
    UserOutlined,
    PlusCircleOutlined,
    LogoutOutlined
} from '@ant-design/icons';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions/usersActions';


const { Header, Sider, Content } = Layout;

function MainLayout(props) {
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
                    <Menu.Item key="/logout" icon={<LogoutOutlined />}>
                        <Link to='/' onClick={logout}>Logout</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0, position: 'sticky', overflow: 'auto', top: 0, zIndex: 9999 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle,
                    })}
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