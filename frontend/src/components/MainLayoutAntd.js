import React from 'react'
import { Layout, Menu, Switch } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

import { Link } from 'react-router-dom';


const { Header, Sider, Content } = Layout;

class MainLayout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
            theme: 'light',
        };
    }


    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    // Menu- Change Theme Mode
    changeTheme = value => {
        this.setState({
            theme: value ? 'light' : 'dark',
        });
    }


    render() {
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo">IT Jobs Search</div>
                    <Switch
                        checked={this.state.theme === 'light'}
                        onChange={this.changeTheme}
                        checkedChildren="Light"
                        unCheckedChildren="Dark"
                        style={{ marginLeft: '5px' }}
                    />
                    <br />
                    <br />
                    <Menu
                        theme={this.state.theme}
                        defaultOpenKeys={['sub1']}
                        defaultSelectedKeys={[window.location.pathname]}
                        mode="inline">
                        <Menu.Item key="/" icon={<UserOutlined />}>
                            <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="/myprofile" icon={<UploadOutlined />}>
                            <Link to="/myprofile">My Profile</Link>
                        </Menu.Item>
                        <Menu.Item key="/applied" icon={<VideoCameraOutlined />}>
                            <Link to="/applied">Jobs Applied</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
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
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
export default MainLayout