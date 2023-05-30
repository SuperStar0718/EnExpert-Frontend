import { Button, Typography, Select } from "antd";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
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

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  let mode = JSON.parse(localStorage.getItem("themeConfig"))?.mode;

  // console.log(`mode`, mode);
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} className="logo" />
      </Link>
      <div className="contents">
        <p onClick={() => history.push("/marketplace")}>
          <img src={mode === "dark" ? marketWhite : market} />
          Live Marketplace
        </p>
        <p onClick={() => history.push("/brands")}>
          <img src={mode === "dark" ? brandsWhite : brands} />
          Brands in Demand
        </p>
        <p onClick={() => history.push("/new-request")}>
          <img src={mode === "dark" ? requestsWhite : requests} />
          Quote Requests
        </p>
        <p>
          <img src={mode === "dark" ? profileWhite : profile} />
          My Profile
        </p>
        <Button
          type="primary"
          className="btn-outlined"
          onClick={() => history.push("/login")}
        >
          Login / Sign up
        </Button>
        <Select defaultValue={"eng"} style={{ width: 120 }}>
          <Select.Option value="eng">ENG</Select.Option>
        </Select>
        {/* <Button
          // icon={<theme />}
          shape="circle"
          onClick={() => dispatch(changeValue())}
        >
          hi
        </Button> */}
        <img
          src={mode === "dark" ? themeWhite : theme}
          onClick={() => dispatch(changeValue())}
        />
      </div>
    </div>
  );
};

export default Navbar;
