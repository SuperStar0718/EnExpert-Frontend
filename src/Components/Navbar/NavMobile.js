import menuIcon from "../../Assets/vectors/menu.png";
import menuIconWhite from "../../Assets/vectors/menu-white.png";
import logo from "../../Assets/logo.png";
import { Select } from "antd";
import NavDrawer from "./NavDrawer";

const NavMobile = () => {
  let mode = JSON.parse(localStorage.getItem("themeConfig"))?.mode;

  return (
    <div className="navbar-mobile">
      <NavDrawer />
      {/* <img src={mode === "dark" ? menuIconWhite : menuIcon} /> */}
      <img src={logo} />
      <Select defaultValue={"eng"} style={{ width: 120 }}>
        <Select.Option value="eng">ENG</Select.Option>
      </Select>
    </div>
  );
};

export default NavMobile;
