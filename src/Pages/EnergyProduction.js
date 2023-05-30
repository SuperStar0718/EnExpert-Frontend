import Layout from "../Layout/MainLayout";
import { Typography, Row, Col, Select, Tooltip } from "antd";
import TinyColumn from "../Components/charts/TinyColumn";
import EnergyColumnLine from "../Components/charts/EnergyColumnLine";
import ColumnLineDualAxis from "../Components/charts/ColumnLineDualAxis";
import { InfoCircleOutlined } from "@ant-design/icons";
import { getEnergyGraphData } from "../redux";
import { useEffect, useState } from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import DemoTinyLine from "../Components/charts/TinyArea";
import GaugePLot from "../Components/charts/GaugePLot";

const LoadPeak = () => {
  let [statsData, setStatsData] = useState(null);
  const [interval, setIntervals] = useState(24);
  const [startDate, setStartDate] = useState(
    moment().subtract(1, "month").format("YYYY-MM-DD")
  );
  const [endDate, setEndDate] = useState(moment().format("YYYY-MM-DD"));

  useEffect(async () => {
    const data = await getEnergyGraphData({
      startDate,
      endDate,
      interval,
    });
    setStatsData(data);
  }, []);

  let text = "This box represents the total conusmed energy by the client";
  return (
    <Layout active="energy-production">
      <div className="live-main energy-main">
        {/* <Typography.Title level={2}>Energy Production</Typography.Title> */}

        <Row gutter={[30, 30]}>
          <Col xs={24} md={12} lg={8}>
            <div className="live-card white-card">
              <Typography.Title
                className="title"
                level={5}
                style={{ fontWeight: "400", marginBottom: "20px" }}
              >
                <span>
                  Self Consumed Energy
                  <Tooltip title={text} color={"#37A1DB"}>
                    <InfoCircleOutlined style={{ marginLeft: "5px" }} />
                  </Tooltip>
                </span>
                <Select defaultValue={"week"} style={{ width: "max-content" }}>
                  <Select.Option value="week">1 week</Select.Option>
                  <Select.Option value="month">1 month</Select.Option>
                  <Select.Option value="year">1 year</Select.Option>
                </Select>
              </Typography.Title>

              <div className="chart-wrapper">
                <GaugePLot />
              </div>
            </div>
          </Col>

          <Col xs={24} md={12} lg={8}>
            <div className="live-card white-card">
              <Typography.Title
                className="title"
                level={5}
                style={{ fontWeight: "400", marginBottom: "20px" }}
              >
                <span>
                  Autonomy Grade
                  <Tooltip title={text} color={"#37A1DB"}>
                    <InfoCircleOutlined style={{ marginLeft: "5px" }} />
                  </Tooltip>
                </span>
                <Select defaultValue={"week"} style={{ width: "max-content" }}>
                  <Select.Option value="week">1 week</Select.Option>
                  <Select.Option value="month">1 month</Select.Option>
                  <Select.Option value="year">1 year</Select.Option>
                </Select>
              </Typography.Title>
              <div
                className="flex-between"
                style={{ justifyContent: "center" }}
              >
                <Typography.Title
                  level={2}
                  className="value"
                  style={{
                    color: "var(--green)",
                    fontWeight: "600",
                    margin: "0",
                    textAlign: "center",
                  }}
                >
                  Now: 13%
                </Typography.Title>

                <div
                  className="chart-wrapper"
                  style={{
                    width: "100%",
                  }}
                >
                  <DemoTinyLine />
                </div>
              </div>
            </div>
          </Col>

          <Col xs={24} md={12} lg={8}>
            <div className="live-card white-card">
              <Typography.Title
                className="title"
                level={5}
                style={{ fontWeight: "400", marginBottom: "20px" }}
              >
                <span>
                  CO2 Savings
                  <Tooltip title={text} color={"#37A1DB"}>
                    <InfoCircleOutlined style={{ marginLeft: "5px" }} />
                  </Tooltip>
                </span>
                <Select defaultValue={"week"} style={{ width: "100px" }}>
                  <Select.Option value="week">1 week</Select.Option>
                  <Select.Option value="month">1 month</Select.Option>
                  <Select.Option value="year">1 year</Select.Option>
                </Select>
              </Typography.Title>
              <div
                className="flex-between"
                style={{ justifyContent: "center" }}
              >
                <Typography.Title
                  level={2}
                  className="value"
                  style={{
                    color: "var(--green)",
                    fontWeight: "600",
                    margin: "0",
                  }}
                >
                  13,3 tons
                </Typography.Title>
                <div
                  style={{
                    width: "100%",
                  }}
                  className="chart-wrapper"
                >
                  <TinyColumn alias={"Tons"} unit={"tons"} />
                </div>
              </div>
            </div>
          </Col>

          <Col xs={24}>
            <div className="white-card live-big-card">
              <Typography.Title
                className="title main-title"
                level={4}
                style={{ fontWeight: "600", marginBottom: "30px" }}
              >
                <span>
                  Energy Production Graph
                  <Tooltip title={text} placement="right" color={"#37A1DB"}>
                    <InfoCircleOutlined style={{ marginLeft: "5px" }} />
                  </Tooltip>
                </span>

                <Select defaultValue={"month"} style={{ width: "max-content" }}>
                  <Select.Option value="week">1 week</Select.Option>
                  <Select.Option value="month">1 month</Select.Option>
                  <Select.Option value="year">1 year</Select.Option>
                </Select>
              </Typography.Title>
              <div
                style={{
                  width: "100%",
                }}
              >
                <ColumnLineDualAxis
                  leftUnit="kWh"
                  rightUnit="kWh"
                  xUnit="Days"
                  alias = {["Energy Production","Total"]}
                />
              </div>
            </div>
          </Col>

          <Col xs={24} lg={12}>
            <div className="white-card tiny-column-card">
              <Typography.Title
                className="title"
                level={5}
                style={{ fontWeight: "400", marginBottom: "30px" }}
              >
                <span>
                  Earnings
                  <Tooltip title={text} color={"#37A1DB"}>
                    <InfoCircleOutlined style={{ marginLeft: "5px" }} />
                  </Tooltip>
                </span>
                <Select defaultValue={"week"} style={{ width: "max-content" }}>
                  <Select.Option value="week">1 week</Select.Option>
                  <Select.Option value="month">1 month</Select.Option>
                  <Select.Option value="year">1 year</Select.Option>
                </Select>
              </Typography.Title>
              <div
                className="flex-between"
                style={{ alignItems: "flex-start", margin: "20px" }}
              >
                <Typography.Text
                  // type="secondary"
                  style={{ fontWeight: "600" }}
                >
                  Month to date : 301,34 €
                </Typography.Text>
                <Typography.Text
                  // type="secondary"
                  style={{ fontWeight: "600" }}
                >
                  Year to date : 5.432,23 €
                </Typography.Text>
              </div>
              <div className="tinycolumn">
                <TinyColumn alias={"Earnings (€)"} unit={"€"} />
              </div>
            </div>
          </Col>

          <Col xs={24} lg={12}>
            <div className="white-card tiny-column-card">
              <Typography.Title
                className="title"
                level={5}
                style={{ fontWeight: "400", marginBottom: "30px" }}
              >
                <span>
                  Savings (Self Consumption)
                  <Tooltip title={text} color={"#37A1DB"}>
                    <InfoCircleOutlined style={{ marginLeft: "5px" }} />
                  </Tooltip>
                </span>

                <Select defaultValue={"week"} style={{ width: "max-content" }}>
                  <Select.Option value="week">1 week</Select.Option>
                  <Select.Option value="month">1 month</Select.Option>
                  <Select.Option value="year">1 year</Select.Option>
                </Select>
              </Typography.Title>

              <div
                className="flex-between"
                style={{ alignItems: "flex-start", margin: "20px" }}
              >
                <Typography.Text
                  // type="secondary"
                  style={{ fontWeight: "600" }}
                >
                  Month to date : 301,34 €
                </Typography.Text>
                <Typography.Text
                  // type="secondary"
                  style={{ fontWeight: "600" }}
                >
                  Year to date : 5.432,23 €
                </Typography.Text>
              </div>
              <div className="tinycolumn">
                <TinyColumn alias={"Savings (€)"} unit={"€"} />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default LoadPeak;
