import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

function technologies() {
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
            defaultSelectedKeys={['3']}
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
          <h1>Technologies</h1>
        </div>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          Here is the list of all the technologies we will be using for our project!<br></br> <br></br>
          <b><i>DOCKER</i></b>
            <p>Docker allows the team to run our application in a container. A container is a type of lightweight VM where all packages and dependencies
                can be installed. It is a tool that allows the team to completely package software. We are currently utilizing it to make a container 
                that has all the tools needed to run Kubernetes on it, along with chaos libraries in it, such as Chaostoolkit and Pumba. 
            </p>
          <b><i>CLOUD 9</i></b>
          <p>Cloud 9 was chosen for the IDE in order to help circumvent some permissions issues. It allows for a more seamless integration into AWS environment.
              It provides an environment that is collaborative. It supposrts a variety of languages and some chaos tools relevant to the project.
          </p>
          <b><i>REACT</i></b>
          <p>React is a web application development framework that is written in JavaScript. In creating the dummy application in React, the team is able to 
              easily deploy our app to AWS and apply our chaos engineering tests to this app. The team also connected our application to the Google Firebase platform to easily connect 
              to an online database.
          </p>
          <b><i>FIREBASE</i></b>
          <p>Firbase is an online service by Google that allows developers to develop and deploy web and mobile applications without having to worry about managing 
              the infrastructure of the app. The team connected the app to the database of Firebase, opposed to AWS due to the familiarity of Firebase.
          </p>
          <b><i>KUBERNETES</i></b>
          <p>Kubernetes manages container software, such as Docker and comes with a large amount of documentation. 
            It is already resilient and is a helpful technology to incorporate due to the ease in scalablity and ability to export to 
            other kinds of architecture. 
          </p>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>,
      {/* mountNode, */}
        </div>
      );
    }

export default technologies;