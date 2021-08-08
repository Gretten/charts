import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Layout, Menu } from 'antd';
import { Redirect } from 'react-router-dom';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { isUserLoggedIn } from '../../app/userSlice';

import './MainPage.css';
import ChartContainer from '../Charts/ChartContainer/ChartContainer';

const { Sider, Content } = Layout;

const MainPage = () => {
  const response = [
    {
      name: 'Аэрофлот',
      code: 'ARF',
      value: [
        {
          price: 2400,
        },
        {
          price: 1398,
        },
        {
          price: 9800,
        },
        {
          price: 3908,
        },
        {
          price: 4800,
        },
        {
          price: 3800,
        },
        {
          price: 4300,
        },
        {
          price: 1300,
        },
      ],
    },
    {
      name: 'Роснефть',
      code: 'RSN',
      value: [
        {
          price: 2400,
        },
        {
          price: 1398,
        },
        {
          price: 9800,
        },
        {
          price: 3908,
        },
        {
          price: 4800,
        },
        {
          price: 3800,
        },
        {
          price: 4300,
        },
        {
          price: 1300,
        },
      ],
    },
  ];

  const [collapsed] = useState(false);
  const isLoggedIn = useSelector(isUserLoggedIn);
  return (
    isLoggedIn
      ? (
        <Layout className="main-layout">
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                Акции
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                Валюты
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                Металлы
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              <ChartContainer chartsData={response} />
            </Content>
          </Layout>
        </Layout>
      )
      : <Redirect to="/" />
  );
};

export default MainPage;