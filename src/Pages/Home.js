import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { Row, Col, Typography, Progress, Dropdown, Menu, Space } from "antd";
import {
  FaArrowDown,
  FaArrowRight,
  FaArrowUp,
  BsArrowDown,
  BsArrowUp,
  BsArrowRight,
} from "react-icons/all";
import { DownOutlined } from "@ant-design/icons";
import Layout from "../Layout/MainLayout";
import Stacked from "../Components/charts/Stacked";
import Donut from "../Components/charts/donut";
import ChartjsDonut from "../Components/charts/ChartjsDonut";
import Column from "../Components/charts/Column";
import ElectricCard from "../Components/cards/ElectricCard";
import EnergyCostCard from "../Components/cards/EnergyCostCard";
import TotalElectricConsumption from "../Components/cards/TotalElectricConsumption";
import HeatMap from "../Components/charts/HeatMap";
import CUSTOMHM from "../Components/charts/CUSTOMHM";
import HorizontalBar from "../Components/charts/HorizontalBar";
import { getPowerQualtiy, getPvProduction, createLog } from "../redux";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Home = () => {
  const heatmapRef = useRef(null);

  const restrictions = useSelector((state) => state.userReducer.restrictions);

  const electricRef = useRef(null);
  const [pvHeight, setPvHeight] = useState(150);
  const [electricHeight, setElectricHeight] = useState(0);

  const [pvProduction, setPvProduction] = useState(null);
  const [powerQuality, setPowerQualtity] = useState(null);

  const [heatmapFilter, setHeatmapFilter] = useState({
    value: "Last 24 Hours",
    key: "24h",
  });
  const [pvFilter, setPvFilter] = useState({
    value: "Last Day",
    key: "lastday",
  });

  const { t } = useTranslation();

  const getData = async () => {
    const pvResult = await getPvProduction({ filter: pvFilter.key });
    // const powerResult = await getPowerQualtiy();
    // setPowerQualtity(powerResult);
    setPvProduction(pvResult);
  };

  const getPowerQualtiyData = async () => {
    const powerResult = await getPowerQualtiy();
    setPowerQualtity(powerResult);
  };

  // useEffect(() => {
  // setInterval(() => {
  //   getPowerQualtiyData();
  // }, 2000);
  // }, []);

  useEffect(() => {
    getData();
    getPowerQualtiyData();

    // setInterval(() => {
    //   getData();
    // }, 2000);
  }, [pvFilter]);
  useEffect(() => {
    setPvHeight(heatmapRef?.current?.offsetHeight);
    setTimeout(() => {
      setPvHeight(heatmapRef?.current?.offsetHeight);
    }, 1000);
  }, [heatmapRef?.current?.offsetHeight, heatmapFilter]);

  console.log("electricHeight", electricHeight);

  return (
    <Layout active="dashboard">
      {/* <LoginPopup show /> */}
      <div className="home-main">
        <Row gutter={[30, 30]}>
          <Col sm={24} md={24} lg={12} style={{ width: "100%" }}>
            <ElectricCard setElectricHeight={setElectricHeight} />
          </Col>
          <Col sm={24} md={24} lg={12} style={{ width: "100%" }}>
            <EnergyCostCard height={electricHeight} />
          </Col>
          <Col sm={24} md={24} lg={24} style={{ width: "100%" }}>
            <TotalElectricConsumption />
          </Col>
          <Col sm={24} md={24} lg={16} style={{ width: "100%" }}>
            <div
              className="electric-consumption-outer"
              // style={
              //   {
              //     height: pvHeight+"px",
              //   }
              // }
              ref={heatmapRef}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <Typography.Title
                  className="title"
                  level={5}
                  style={{ fontSize: "16px", fontWeight: "600" }}
                >
                  {t("heatmap")}
                  {/* Electric Consumption Heatmap */}
                </Typography.Title>
                <Dropdown
                  overlay={
                    <Menu
                      onClick={(e) => {
                        setHeatmapFilter({
                          value: e.domEvent.target.innerText,
                          key: e.key,
                        });
                        createLog({
                          page: "home",
                          section: "electric consumption heatmap",
                          filter: e.key,
                          description:
                            "Change filter to " + e.domEvent.target.innerText,
                        });
                      }}
                    >
                      <Menu.Item key={"24h"} value="Last 24 Hours">
                        Last 24 Hours
                      </Menu.Item>
                      <Menu.Item key={"6d"} value="Last 6 Days">
                        Last 6 Days
                      </Menu.Item>
                      <Menu.Item key={"24d"} value="Last 24 Days">
                        Last 24 Days
                      </Menu.Item>
                    </Menu>
                  }
                  trigger={["click"]}
                >
                  <div onClick={(e) => e.preventDefault()}>
                    <Space className="electric-consumption-outer-dropdown">
                      {heatmapFilter.value}
                      <DownOutlined />
                    </Space>
                  </div>
                </Dropdown>
              </div>
              <CUSTOMHM filter={heatmapFilter} />
              {/* <HeatMap /> */}
            </div>
          </Col>

          <Col sm={24} md={24} lg={8} style={{ width: "100%" }}>
            <div
              className="electric-consumption-outer"
              // style={{ height: pvHeight }}
              style={{
                // height: "350px",
                height: pvHeight,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <Typography.Title className="title" level={5}>
                  {restrictions?.pvProduction
                    ? "PV Production"
                    : "Power Quality"}
                </Typography.Title>
                {restrictions?.pvProduction && (
                  <Dropdown
                    overlay={
                      <Menu
                        onClick={(e) => {
                          setPvFilter({
                            value: e.domEvent.target.innerText,
                            key: e.key,
                          });
                          createLog({
                            page: "home",
                            section: "PV production",
                            filter: e.key,
                            description:
                              "Change filter to " + e.domEvent.target.innerText,
                          });
                        }}
                      >
                        <Menu.Item key={"lastday"} value="Last Day">
                          Last Day
                        </Menu.Item>
                        <Menu.Item key={"lastweek"} value="Last Week">
                          Last Week
                        </Menu.Item>
                        <Menu.Item key={"lastmonth"} value="Last Month">
                          Last Month
                        </Menu.Item>
                        <Menu.Item key={"lastyear"} value="Last Year">
                          Last Year
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["click"]}
                  >
                    <div onClick={(e) => e.preventDefault()}>
                      <Space className="electric-consumption-outer-dropdown">
                        {pvFilter.value}
                        <DownOutlined />
                      </Space>
                    </div>
                  </Dropdown>
                )}
              </div>
              <div
                className="column-chart"
                style={{
                  // height: `140px`,
                  // height: `250px`,
                  height: `${pvHeight - 90}px`,
                }}
              >
                {restrictions?.pvProduction ? (
                  <Column Data={pvProduction ? pvProduction : []} label />
                ) : (
                  <HorizontalBar Data={powerQuality ? powerQuality : []} />
                )}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default Home;
