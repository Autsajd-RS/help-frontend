import { Layout as AntdLayout, Menu } from 'antd';
import { Outlet, useNavigate } from 'react-router';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { FunctionComponent } from 'react';
import { AppStyledComponent } from 'types/UtilTypes';
import styled from 'styled-components';
import { PlusOutlined } from '@ant-design/icons';
import logo from 'assets/logo.png';

const { Header, Content, Footer } = AntdLayout;

const Layout: FunctionComponent<AppStyledComponent> = ({ className }) => {
  const navigate = useNavigate();
  const HEADER_ITEMS: ItemType[] = [
    {
      key: 'admin-home',
      label: 'Početna stranica',
      onClick: () => navigate('/admin')
    },
    {
      key: 'admin-create-user',
      label: 'Kreiraj korisnika',
      onClick: () => navigate('/admin/create-user')
    }
  ];

  return (
    <AntdLayout className={`${className} layout`}>
      <Header>
        <div className="logo">
          <img src={logo} />
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={HEADER_ITEMS} />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </AntdLayout>
  );
};

export default styled(Layout)`
  & .ant-menu-item {
    background-color: #329d9c;
    color: #fff;
  }

  & .site-layout-content {
    min-height: 280px;
    padding: 24px;
    background: #fff;
  }
  & .ant-layout-header {
    display: flex;
  }

  & .logo {
    color: #7be495;
    font-size: 40px;
    img {
      vertical-align: auto;
    }
  }
`;
