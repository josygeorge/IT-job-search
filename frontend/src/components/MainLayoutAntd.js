import React from 'react'
import { Layout, Menu, Switch } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

import 'antd/dist/antd.css';

const { Header, Sider, Content } = Layout;

class MainLayout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
            theme: 'light',
            current: '1',
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
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

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
                    />
                    <br />
                    <br />
                    <Menu
                        theme={this.state.theme}
                        onClick={this.handleClick}
                        defaultOpenKeys={['sub1']}
                        selectedKeys={[this.state.current]}
                        mode="inline">
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            nav 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            nav 2
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            nav 3
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