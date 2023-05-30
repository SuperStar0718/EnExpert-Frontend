import { useEffect } from "react";
import Routes from "./Routes";
// import "antd/dist/antd.dark.less";
import "antd/dist/antd.less";
import { switchTheme } from "./defaultTheme";
import "./Styles/styles.css";
import { useDispatch, useSelector } from "react-redux";
import "moment-timezone";
import { notification } from "antd";
import moment from "moment";
import { getClient } from "./redux";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  // const value = useSelector((state) => state.themeReducer.updateValues);
  useEffect(() => {
    if (!navigator.onLine) {
      notification.error({
        message: "No or Slow Internet Connection",
        duration: 5,
      });
    }
  }, [navigator.onLine]);

  console.log(moment().startOf("day").toISOString());
  console.log(moment().endOf("day").toISOString());

  const getData = async () => {
    const data = await dispatch(getClient());
    i18n.changeLanguage(data.language);
    console.log("language changed from home");
  };

  useEffect(() => {
    if (localStorage.hasOwnProperty("token")) getData();
  }, []);

  useEffect(() => {
    const themeConfig = JSON.parse(localStorage.getItem("themeConfig"));
    if (themeConfig) {
      switchTheme(themeConfig.mode);
    } else {
      switchTheme();
    }
  }, []);

  return <Routes />;
}

export default App;
