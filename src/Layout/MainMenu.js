import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import {
  AiOutlineHome,
  HiOutlineStatusOnline,
  AiOutlineBarChart,
  AiOutlineFire,
  BiLineChart,
  FiSettings,
  BiWorld,
  RiChargingPileLine,
} from "react-icons/all";
import { Menu, Typography, Select } from "antd";
import energy from "../Assets/vectors/energy.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

const MainMenu = ({ active }) => {
  const { Option } = Select;
  const [openKeys, setOpenKeys] = useState(["notification", "settings"]);
  const { SubMenu } = Menu;
  const access = useSelector((state) => state.userReducer.restrictions);

  const history = useHistory();
  useEffect(() => {
    // if (!collapsed) {
    // setOpenKeys([active]);
    // }
  }, [active]);
  const onOpenChange = (items) => {
    console.log(items);
    if (items.includes("notification")) {
      const index = items.indexOf("notification");
      setOpenKeys((prev) => prev.splice(index, 1));
    } else if (items.includes("settings")) {
      const index = items.indexOf("settings");
      setOpenKeys((prev) => prev.splice(index, 1));
    }
  };
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <div>
      <Menu
        mode="inline"
        defaultSelectedKeys={active}
        style={{
          height: "100vh",
          background: "var(--lightBackground)",
          padding: "10px 10px 10px 0",
        }}
      >
        <Menu.Item
          key="dashboard"
          icon={<AiOutlineHome className="icon-size-22" />}
          onClick={() => history.push("/")}
        >
          Dashboard
        </Menu.Item>
        {access?.live && (
          <Menu.Item
            key="live"
            icon={<HiOutlineStatusOnline className="icon-size-22" />}
            onClick={() => history.push("/live")}
          >
            Live
          </Menu.Item>
        )}
        {access?.analysis && (
          <Menu.Item
            key="Analysis"
            icon={<AiOutlineBarChart className="icon-size-22" />}
            onClick={() => history.push("/analysis")}
          >
            Analysis
          </Menu.Item>
        )}
        {access?.energyProduction && (
          <Menu.Item
            key="energy-production"
            // icon={<AiOutlineFire className="icon-size-22" />}
            icon={<img src={energy} width="22px" height={"22px"} />}
          >
            <Link to={"/energy-production"}>Energy Production</Link>
          </Menu.Item>
        )}
        {access?.loadPeak && (
          <Menu.Item
            key="load-peak"
            icon={<BiLineChart className="icon-size-22" />}
          >
            <Link to={"/load-peak"}>Load Peak</Link>
          </Menu.Item>
        )}
        {access?.digitalization && (
          <Menu.Item
            key="digitalization"
            icon={<BiWorld className="icon-size-22" />}
          >
            <Link to={"/digitalization"}>Digitalization</Link>
          </Menu.Item>
        )}

        <Menu.Item
          key="emobility"
          icon={<RiChargingPileLine className="icon-size-22" />}
        >
          <Link to={"/emobility"}>E-Mobility</Link>
        </Menu.Item>

        <Menu.Item
          key="settings"
          icon={<FiSettings className="icon-size-22" />}
        >
          <Link to={"/settings"}>Settings</Link>
        </Menu.Item>
        {/* <Menu.Item
          key="profile"
          icon={<UserOutlined className="icon-size-22" />}
        >
          <Link to={"/profile"}>My Profile</Link> 
        </Menu.Item>*/}
        <Menu.Item
          key="logout"
          icon={<LogoutOutlined className="icon-size-22" />}
        >
          <Link
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            Logout
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default MainMenu;
