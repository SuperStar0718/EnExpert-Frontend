import { Layout, Switch } from "antd";

import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import { toggleTheme } from "../redux";
import MenuDrawer from "./MenuDrawer";

const { Content } = Layout;

const MobileLayout = ({ active, children }) => {
  const dispatch = useDispatch();

  return (
    <Layout className="m-layout">
      <div className="mobile-header">
        <MenuDrawer active={active} />
        {/* <Switch
          className="themeSwitch"
          defaultChecked={theme === "light" ? false : true}
          checkedChildren={
            <MdDarkMode style={{ fontSize: "20px", marginRight: "5px" }} />
          }
          unCheckedChildren={
            <MdOutlineDarkMode
              style={{ fontSize: "20px", marginLeft: "5px" }}
            />
          }
          onChange={() => dispatch(toggleTheme())}
        /> */}
      </div>
      <Content className="m-children">{children}</Content>
    </Layout>
  );
};

export default MobileLayout;
