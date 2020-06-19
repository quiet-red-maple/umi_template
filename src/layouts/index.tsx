import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, ConfigProvider, Select } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  FileOutlined,
} from '@ant-design/icons';
import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { history } from 'umi';
import themeList from '@/config/theme';
import './layout.less';
import '@/config/antdTheme.less';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Option } = Select;

interface Props {
  children: any;
}

const Layouts = (props: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [locale, setLocale] = useState(zhCN);

  const changeLanguage = (value: string) => {
    switch (value) {
      case 'enUS':
        setLocale(enUS);
        break;
      case 'zhCN':
        setLocale(zhCN);
        break;
      default:
        setLocale(enUS);
        break;
    }
  };

  const changeTheme = (value: 'light' | 'dark') => {
    console.log(themeList[value])
    for (let color in themeList[value]) {
      console.log(color, themeList[value])
      document.body.style.setProperty(color, themeList[value][color]);
    }
  }

  const getUrl = (e: any) => {
    if (e.key === '1') {
      history.push('/');
    } else {
      history.push(`/${e.key}`);
    }
  };

  return (
    <ConfigProvider locale={locale} csp={{ nonce: 'YourNonceCode' }}>
      <Layout>
        <Header className="header">
          <div className="left">
            <div className="logo" />
            <span className="header_title">供应链金融平台</span>
          </div>

          <div className="right">
            <Select
              defaultValue="zhCN"
              style={{ width: 90 }}
              onChange={changeLanguage}
              bordered={false}
              size="small"
            >
              <Option value="enUS">English</Option>
              <Option value="zhCN">中文</Option>
            </Select>

            <Select
              defaultValue="light"
              style={{ width: 80 }}
              onChange={changeTheme}
              bordered={false}
              size="small"
            >
              <Option value="light">耀目白</Option>
              <Option value="dark">暗星黑</Option>
            </Select>
          </div>
        </Header>
        <Layout>
          <Sider
            width={200}
            collapsible
            collapsed={collapsed}
            onCollapse={setCollapsed}
            className="site-layout-background"
          >
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
    </ConfigProvider>
  );
};

export default Layouts;
