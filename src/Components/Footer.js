import { Button } from "antd";
import logo from "../Assets/logo.png";
import logoWhite from "../Assets/logo-white.png";
import { Link } from "react-router-dom";

const Footer = () => {
  let mode = JSON.parse(localStorage.getItem("themeConfig"))?.mode;

  return (
    <div className="footer-main">
      <div className="Buttons">
        <Button type="primary" className="btn-outlined c-white">
          Live Marketplace
        </Button>
        <Button
          type="primary"
          className="btn-outlined secondary-border c-white"
        >
          Brands in Demand
        </Button>
      </div>
      <div className="content">
        <img src={mode === "dark" ? logoWhite : logo} />
        <p>© 2022 9Q Hub All Rights Reserved.</p>
        <p>
          Pictures and images on the site are for Illustration purposes only
        </p>
        <p>
          {" "}
          <Link to="/privacy">Privacy & Security</Link> |{" "}
          <Link to="/terms">Terms and Conditons</Link> |{" "}
          <Link to="/contact">Contact Us</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
