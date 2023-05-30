import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { Row, Col, Typography, Progress, Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Stacked from "../charts/Stacked";
import ElectricConsumptionRoundChart from "../ElectricConsumptionRoundChart";
import {
  getElectricConsumptionGraph,
  createLog,
  getRoundChartData,
} from "../../redux";
import { useSelector } from "react-redux";

const TotalElectricConsumption = () => {
  // let colors = ["#37A1DB", "#46C782", "#DBD621", "#E58448"];
  const colors = useSelector((state) => state.userReducer.colors);

  const [electricConsumption, setElectricConsumption] = useState(null);
  const [roundConsumption, setRoundConsumption] = useState(null);
  const [Filter, setFilter] = useState({
    value: "Last 12 Months",
    key: "12m",
  });
  const getData = async () => {
    const result = await getElectricConsumptionGraph({ filter: Filter.key });
    setElectricConsumption(result);
    const roundResult = await getRoundChartData({ filter: Filter.key });
    setRoundConsumption(roundResult);
  };

  useEffect(() => {
    getData();

    // setInterval(() => {
    //   getData();
    // }, 2000);
  }, [Filter]);

  return (
    <div className="stacked-pie-outer">
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
          style={{ fontSize: "18px", fontWeight: 600 }}
        >
          Total Electric Consumption
        </Typography.Title>
        <Dropdown
          overlay={
            <Menu
              onClick={(e) => {
                setFilter({
                  value: e.domEvent.target.innerText,
                  key: e.key,
                });
                createLog({
                  page: "home",
                  section: "total electric consumption",
                  filter: e.key,
                  description:
                    "Change filter to " + e.domEvent.target.innerText,
                });
              }}
            >
              <Menu.Item key={"12m"} value="Last 12 Months">
                Last 12 Months
              </Menu.Item>
              <Menu.Item key={"30d"} value="Last 30 Days">
                Last 30 Days
              </Menu.Item>
              <Menu.Item key={"7d"} value="Last 7 Days">
                Last 7 Days
              </Menu.Item>
            </Menu>
          }
          trigger={["click"]}
        >
          <div onClick={(e) => e.preventDefault()}>
            <Space className="stacked-pie-outer-dropdown">
              {Filter.value}
              <DownOutlined />
            </Space>
          </div>
        </Dropdown>
      </div>

      <Row gutter={[0, 30]}>
        <Col
          sm={24}
          md={24}
          lg={12}
          xl={16}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
            }}
          >
            <Stacked
              Data={electricConsumption ? electricConsumption?.stackChart : []}
            />
          </div>
        </Col>
        <Col
          sm={24}
          md={24}
          lg={12}
          xl={8}
          style={{
            width: "100%",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            // height: 340,
          }}
        >
          <ElectricConsumptionRoundChart
            electricConsumption={roundConsumption}
          />
        </Col>
      </Row>
    </div>
  );
};

export default TotalElectricConsumption;
