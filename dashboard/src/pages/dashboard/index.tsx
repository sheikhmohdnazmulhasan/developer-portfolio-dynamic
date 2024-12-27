import React from "react";
import { Layout, Menu, theme } from "antd";
import {
  UserOutlined,
  ProjectOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { Link, Outlet, useLocation } from "react-router-dom";

const { Sider, Content } = Layout;

const DashboardLayout: React.FC = () => {
  const location = useLocation();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuItems = [
    { key: "/about", icon: <UserOutlined />, label: "About" },
    { key: "/projects", icon: <ProjectOutlined />, label: "Projects" },
    { key: "/article", icon: <FileTextOutlined />, label: "Article" },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsed={false}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          paddingTop: 16,
          bottom: 0,
        }}
        theme="light"
      >
        <Menu
          theme="light"
          selectedKeys={[
            location.pathname === "/" ? "/about" : location.pathname,
          ]}
          mode="inline"
          items={menuItems.map((item) => ({
            key: item.key,
            icon: item.icon,
            label: <Link to={item.key}>{item.label}</Link>,
          }))}
        />
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            style={{
              padding: 24,
              minHeight: "100vh",
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
