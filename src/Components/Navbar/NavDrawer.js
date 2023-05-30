import React, { useState } from "react";
import { Drawer, Button, Select } from "antd";
import { useHistory } from "react-router-dom";

import menuIcon from "../../Assets/vectors/menu.png";
import menuIconWhite from "../../Assets/vectors/menu-white.png";
import logo from "../../Assets/logo.png";

import market from "../../Assets/vectors/market.png";
import brands from "../../Assets/vectors/brands.png";
import profile from "../../Assets/vectors/profile.png";
import theme from "../../Assets/vectors/theme.png";
import requests from "../../Assets/vectors/requests.png";

import marketWhite from "../../Assets/vectors/market-white.png";
import brandsWhite from "../../Assets/vectors/brands-white.png";
import requestsWhite from "../../Assets/vectors/requests-white.png";
import profileWhite from "../../Assets/vectors/profile-white.png";
import themeWhite from "../../Assets/vectors/theme-white.png";

import { changeValue } from "../../redux";
import { useDispatch } from "react-redux";

const NavDrawer = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  let mode = JSON.parse(localStorage.getItem("themeConfig"))?.mode;

  const Routing = (link) => {
    history.push(`/${link}`);
    onClose();
  };

  return (
    <>
      <img
        src={mode === "dark" ? menuIconWhite : menuIcon}
        onClick={showDrawer}
      />
      <Drawer
        placement="left"
        // className="navbar"
        onClose={onClose}
        visible={visible}
      >
        <img onClick={() => Routing("")} src={logo} />
        <div className="contents content-mobile">
          <p onClick={() => Routing("marketplace")}>
            <img src={mode === "dark" ? marketWhite : market} />
            Live Marketplace
          </p>
          <p onClick={() => Routing("brands")}>
            <img src={mode === "dark" ? brandsWhite : brands} />
            Brands in Demand
          </p>
          <p onClick={() => Routing("new-request")}>
            <img src={mode === "dark" ? requestsWhite : requests} />
            Quote Requests
          </p>
          <p>
            <img src={mode === "dark" ? profileWhite : profile} />
            My Profile
          </p>
          <p onClick={() => dispatch(changeValue())}>
            <img src={mode === "dark" ? themeWhite : theme} />
            Light/dark mood
          </p>
          <Button type="primary" className="btn-outlined">
            Login / Sign up
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default NavDrawer;
