import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import MenuItem from 'antd/lib/menu/MenuItem';

const { Header, Content, Footer } = Layout;

function Homepage() {
  return (
    <div className="Homepage">

      <Layout className="layout">
        <Header>
          <div className="logo">
            <h1 style={{ color: '#fff' }} >SURGE</h1>
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">
              <Link to="/">About</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/chaos">Chaos Engineering</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/technologies">Technologies</Link>
            </Menu.Item>
            <MenuItem key="4">
              <Link to="/team">Team</Link>
            </MenuItem>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div style={{ margin: '30px 0', textAlign: "center" }}>
            <h1>Hello Booz Allen!</h1>
          </div>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          Greetings from the Chaos Team! This app will tell you all about our product we are calling SURGE! To learn more about the different aspects of our project
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>,
      {/* mountNode, */}
        </div>
      );
    }

export default Homepage;
