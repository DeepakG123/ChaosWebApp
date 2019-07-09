import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

function chaos() {
  return (
    <div className="chaos">

      <Layout className="layout">
        <Header>
        <div className="logo">
            <h1 style={{ color: '#fff' }} >SURGE</h1>
        </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">
              <Link to="/">home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/chaos">chaos</Link>
            </Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
        <div style={{ margin: '30px 0', textAlign: "center" }}>
          <h1>Testing 123!!</h1>
        </div>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          Hello WORLD!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>,
      {/* mountNode, */}
        </div>
      );
    }

export default chaos;
