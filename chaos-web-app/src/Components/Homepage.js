import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import MenuItem from 'antd/lib/menu/MenuItem';
import fir from '../Components/firebase.js'

const { Header, Content, Footer } = Layout;

function Homepage() {

  // const [stuff, setStuff] = useState();
  // let x, y;
  
  // Grabbing from firebase, see results in browser console (F12)
    var root = fir.database().ref("/");
    root.on("value", snapshot => {
      console.log(snapshot.val());
    });

    // for (var key in x) {
    //   if (x.hasOwnProperty(key)) {
    //     y.push(x[key])
    //   }
    // }


  return (
    <div className="Homepage">

      <Layout className="layout">
        <Header>
          <div className="logo">
            <h1 style={{ color: '#fff' }}>SURGE</h1>
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
              <Link to="/surge">Why SURGE</Link>
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
          Greetings from the Chaos Team! This web app will tell you all about our product that we are calling SURGE! 
          To learn more about the different aspects of our project, click through the tabs above.
          <br></br><br></br>
          <b><i>VISION STATEMENT</i></b>
          <br></br>
          <p>Our client, Ashley needs reliable servers. SURGE will be a Chaos as a Service (CaaS) platform, 
            that will increase the resiliency of distributed systems by exposing server weaknesses. 
            Unlike Gremlin, our product will be well packaged and easy to integrate with existing architecture and use for non-technical users.</p>
          <br></br>
          <b><i>CHAOS ENGINEERING</i></b>
          <p><i>What is it?</i>
          <br></br>
          Chaos Engineering is a discipline of experimenting on a software system in order to expose weaknesses and build
          in a system's ability to withstand unexpected conditions. It was started by Netflix when they were switching to cloud infrastructure in 2011. 
          Other options for chaos include Simian Army (open source, includes chaosmonkey), Gremlin, Pumba, Chaostoolkit, etc.</p>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>,
      {/* mountNode, */}
        </div>
      );
    }

export default Homepage;

