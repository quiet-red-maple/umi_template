import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  FileOutlined
} from '@ant-design/icons';
import { history } from 'umi';
import './layout.less';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

interface Props {
  children: any;
}

const Layouts = (props: Props) => {
  const [collapsed, setCollapsed] = useState(false);

  const getUrl = (e: any) => {
    if (e.key === '1') {
      history.push('/');
    } else {
      history.push(`/${e.key}`);
    }
  };

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <span className="header_title">
        供应链金融平台

        </span>
      </Header>
      <Layout>
        <Sider width={200} collapsible collapsed={collapsed} onCollapse={setCollapsed} className="site-layout-background">
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={['2']}
            onClick={getUrl}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Layouts;
