import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

function surge() {
  return (
    <div className="surge">

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
              <Link to="/">About</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/surge">Why SURGE</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/technologies">Technologies</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/team">Team</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
        <div style={{ margin: '30px 0', textAlign: "center" }}>
          <h1>Why Use SURGE?</h1>
        </div>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <p>This app was created by the Booz Allen Hamilton Chaos Team as a part of the 2019 Summer Games. The task assigned is as follows below!</p>
          <br></br>
          <b><i>SURGE</i></b>
          <br></br>
          <p>All systems experience downtime, sometimes planned, sometimes very unexpected. Systems are often complex and lack comprehensive testing,
            lending themselves to eventual outages. The emerging field of Chaos Engineering serves up the unexpected in order to create more resilient systems. 
            Rigorous, yet chaotic experimentation, based in automated, random, and intentional faults, help to identify areas to address, usually the areas
            that have a high potential for failure. This challenge embraces the "what happens if" of Chaos Engineering, but focuses on the "as a Service"
            model. The team will look for ways to offer CaaS capabilities and services to help other companies chart a path to improved readiness. In short,
            the project will challenge the team to design, develop, and demonstrate a CaaS prototype. 
          </p>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>,
      {/* mountNode, */}
        </div>
      );
    }

export default surge;
