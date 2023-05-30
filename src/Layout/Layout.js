import React, { useState } from "react";

import {
  Layout,
  Menu,
  Dropdown,
  Button,
  Input,
  Select,
  Badge,
  Avatar,
  Switch,
} from "antd";
import {
  AiOutlineMenu,
  FaAngleLeft,
  FaAngleDown,
  FiSearch,
} from "react-icons/all";
import { BellOutlined, SearchOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import MainMenu from "./MainMenu";
import { changeValue } from "../redux";
import logo from "../Assets/logo2.png";

const VerticalLayout = ({ children, active }) => {
  const { Header, Sider, Content, Footer } = Layout;
  const history = useHistory();
  const dispatch = useDispatch();
  const [sidebarOpen, setSideBarOpen] = useState(
    window.innerWidth > 800 ? true : false
  );

  return (
    <div className="v-layout">
      <Layout hasSider>
        <Sider
          width={250}
          style={{
            maxHeight: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            height: "auto",
            borderRight: "1px solid var(--secondary)",
            zIndex: 7,
            // marginLeft: sidebarOpen ? "0" : "-250px",
          }}
        >
          <div className="logo">
            <img src={logo} width="50%" />
          </div>
          <div className="side-bar-search">
            <Input placeholder="Search..." prefix={<FiSearch />} />
          </div>
          <MainMenu active={active} />
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 250 }}>
          <Header
            style={{ position: "fixed" }}
            className="layout-header"
          >
            {/* <div className="header-row" style={{ zIndex: 100 }}> */}
            {/* <div className="menu-icon-wrapper">
                {sidebarOpen ? (
                  <FaAngleLeft
                    onClick={() => setSideBarOpen(false)}
                    style={{ color: "var(--primary)" }}
                  />
                ) : (
                  <AiOutlineMenu
                    onClick={() => setSideBarOpen(true)}
                    style={{ color: "var(--primary)" }}
                  />
                )}
              </div> */}
            <div className="search-bar">
              <Input
                placeholder="Search..."
                style={{ height: "42px" }}
                prefix={<FiSearch />}
              />
            </div>
            <div className="header-right">
              <Badge count={4}>
                <Avatar
                  icon={<BellOutlined />}
                  style={{ color: "var(--text)", background: "transparent" }}
                />
              </Badge>
              <div style={{ display: "flex", alignItems: "center" }}>
                {/* <span>Admin</span> */}
                {/* <Badge dot>
                    <Avatar src="https://joeschmoe.io/api/v1/random" />
                  </Badge> */}
                <span
                  className="name"
                  onClick={() => {
                    history.push("/settings");
                  }}
                >
                  {localStorage.getItem("name")
                    ? localStorage.getItem("name")
                    : ""}
                </span>
                {/* <FaAngleDown style={{ color: "var(--secondaryText)" }} /> */}
              </div>
              {/* <Switch
                  checkedChildren={<MdLightMode />}
                  unCheckedChildren={<MdOutlineLightMode />}
                  defaultChecked={mode === "dark" ? true : false}
                  onChange={(value) => dispatch(changeValue())}
                /> */}
              {/* <Button
                  icon={<LogoutOutlined />}
                  shape="circle"
                  onClick={() => {
                    history.push("/login");
                  }}
                ></Button> */}

              {/* <div className="profile">
                  <div>
                    <p>John Doe</p>
                    <p>Admin</p>
                  </div>
                </div>*/}
            </div>
            {/* </div> */}
          </Header>
          <Content
            className="children"
            style={{
              padding: "0 40px",
              margin: "100px 0 0px 0",
              // padding: 24,
              minHeight: "90vh",
            }}
          >
            {children}
          </Content>
          {/* <Footer style={{ textAlign: "center", background: "transparent" }}>
            <p>© 2022 9Q Hub All Rights Reserved.</p>
            <p>Privacy & Security | Terms and Conditons</p>
          </Footer> */}
        </Layout>
      </Layout>
    </div>
  );
};

export default VerticalLayout;
