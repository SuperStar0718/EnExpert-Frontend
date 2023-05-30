import React, { useContext, useState } from "react";

import {
  Layout,
  Menu,
  Dropdown,
  Button,
  Input,
  Select,
  Badge,
  Avatar,
  Drawer,
  Switch,
} from "antd";
import {
  AiOutlineMenu,
  FaAngleLeft,
  FaAngleDown,
  FiSearch,
} from "react-icons/all";
import { BellOutlined, SearchOutlined } from "@ant-design/icons";
import { MenuOutlined } from "@ant-design/icons";
import { BiArrowBack } from "react-icons/bi";

import MainMenu from "./MainMenu";
import logo from "../Assets/logo2.png";

import { toggleTheme } from "../redux";
import { useDispatch, useSelector } from "react-redux";

const MenuStyle = {
  cursor: "pointer",
  background: "transparent",
  color: "var(--SecondaryColor)",
  border: "none",
  outline: "none",
  fontSize: "20px",
  height: "auto",
};

const MenuDrawer = ({ active }) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="m-header">
        <div className="header-row">
          <Button onClick={showDrawer} style={MenuStyle}>
            <MenuOutlined />
          </Button>
          {/* <div className="search-bar">
                <Input
                  placeholder="Search..."
                  style={{ height: "42px" }}
                  prefix={<FiSearch />}
                />
              </div> */}
          <div className="header-right">
            <Badge count={4}>
              <Avatar
                icon={<BellOutlined />}
                style={{ color: "var(--text)", background: "transparent" }}
              />
            </Badge>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className="name">
                {" "}
                {localStorage.getItem("name")
                  ? localStorage.getItem("name")
                  : ""}
              </span>
              <FaAngleDown style={{ color: "var(--secondaryText)" }} />
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
        </div>
      </div>
      <Drawer
        className="mobile-menu-drawer"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
        // width={"30%"}
      >
        <div>
          <div className="m-drawer">
            <BiArrowBack
              onClick={() => setVisible(false)}
              className="backArrow"
            />
            <div className="logo">
              <img src={logo} alt="logo" width="50%" />
            </div>
          </div>
          <MainMenu active={active} setVisible={setVisible} visible={visible} />
        </div>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
