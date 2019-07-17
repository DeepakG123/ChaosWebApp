import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

function team() {
  return (
    <div className="technologies">

      <Layout className="layout">
        <Header>
        <div className="logo">
            <h1 style={{ color: '#fff' }} >SURGE</h1>
        </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['4']}
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
          <h1>Team</h1>
        </div>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          The Chaos team consistsof five hardworking interns and two fabulous challenge leaders! <br></br> <br></br>
          <b><i>TEAM</i></b>
          <p>
              <br></br>
              <i><u>INTERNS</u></i>
              <br></br>
              Priyanka Bitra<br></br>
              Joseph Kim<br></br>
              Ahmad Abushaban<br></br>
              Adal Santana<br></br>
              Deepak Goel<br></br><br></br>
              <i><u>CHALLENGE LEADERS</u></i>
              <br></br>
              Ashley Mondres, Lead Associate<br></br>
              Kirsten Guillaume, Senior Associate<br></br>
          </p>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>,
      {/* mountNode, */}
        </div>
      );
    }

export default team;