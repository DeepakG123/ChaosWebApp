import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import chaos from "./chaos";
import { Link } from 'react-router-dom';

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
            defaultSelectedKeys={['']}
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
            <h1>About SURGE</h1>
          </div>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras adipiscing enim eu turpis egestas pretium aenean pharetra magna. Vivamus arcu felis bibendum ut. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. A cras semper auctor neque vitae tempus quam pellentesque nec. Erat velit scelerisque in dictum non. Nisl condimentum id venenatis a. Sit amet dictum sit amet justo donec enim diam. Arcu risus quis varius quam quisque id. Tincidunt id aliquet risus feugiat in. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Eros in cursus turpis massa tincidunt dui ut. Pretium nibh ipsum consequat nisl. Elit sed vulputate mi sit amet mauris commodo. Id volutpat lacus laoreet non curabitur. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Aliquam faucibus purus in massa tempor. Elementum integer enim neque volutpat ac tincidunt vitae. Velit laoreet id donec ultrices tincidunt arcu non sodales neque.

Habitant morbi tristique senectus et netus et malesuada fames. Et odio pellentesque diam volutpat. Amet nisl purus in mollis nunc. Pharetra massa massa ultricies mi quis. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Libero id faucibus nisl tincidunt eget nullam non nisi. Diam phasellus vestibulum lorem sed risus. Viverra nibh cras pulvinar mattis nunc sed. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Dui ut ornare lectus sit amet est placerat in. Nullam ac tortor vitae purus faucibus. Augue lacus viverra vitae congue. Iaculis eu non diam phasellus vestibulum lorem sed risus. Tincidunt augue interdum velit euismod in. Quis auctor elit sed vulputate mi. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat.

Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus. Tristique senectus et netus et malesuada fames ac turpis. Dui id ornare arcu odio ut sem nulla. Dignissim diam quis enim lobortis scelerisque fermentum. Id donec ultrices tincidunt arcu non sodales neque. In ornare quam viverra orci sagittis eu volutpat. Vestibulum morbi blandit cursus risus at ultrices. In tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Pellentesque habitant morbi tristique senectus et netus et. Arcu dui vivamus arcu felis bibendum ut. Volutpat ac tincidunt vitae semper quis. Volutpat commodo sed egestas egestas. Maecenas pharetra convallis posuere morbi. Magna eget est lorem ipsum dolor sit amet. Quis lectus nulla at volutpat diam ut.

At quis risus sed vulputate. Accumsan sit amet nulla facilisi morbi tempus iaculis. Interdum consectetur libero id faucibus nisl. Vitae auctor eu augue ut lectus arcu bibendum at. Tempus imperdiet nulla malesuada pellentesque elit eget. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. Ac tortor dignissim convallis aenean et tortor at risus. Sed velit dignissim sodales ut eu sem integer vitae justo. Neque laoreet suspendisse interdum consectetur libero id. Faucibus nisl tincidunt eget nullam non nisi est. Fermentum leo vel orci porta non. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Laoreet sit amet cursus sit amet dictum sit amet justo. Massa tincidunt dui ut ornare lectus. Auctor neque vitae tempus quam pellentesque nec. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi.
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>,
      {/* mountNode, */}
        </div>
      );
    }

export default Homepage;
