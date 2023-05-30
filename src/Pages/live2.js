import Layout from "../Layout/MainLayout";
import { Typography, Row, Col } from "antd";
import moment from "moment";
import signalIcon from "../Assets/signal24.png";
import EnergyCostCard from "../Components/cards/EnergyCostCard";
import TinyColumn from "../Components/charts/TinyColumn";
import LiquidChart from "../Components/charts/LiquidChart";
import LiquidSquare from "../Components/charts/LiquidSquare";
import ChartjsSimpleDonut from "../Components/charts/ChartjsSimpleDonut";
import HeatConsumptionColumn from "../Components/charts/HeatConsumptionColumn";
import HorizontalBar from "../Components/charts/HorizontalBar";
import waves from "../Assets/waves.png";
import ElectricConsumptionRoundChart from "../Components/ElectricConsumptionRoundChart";
import { BsArrowDown, BsArrowUp, AiFillThunderbolt } from "react-icons/all";
import { CheckOutlined } from "@ant-design/icons";

import {
  getStatsLivePage,
  getHeatConsumption,
  getWaterConsumption,
  getBatteryLevels,
  getPvProductionLivePage,
  getPowerQualtiy,
} from "../redux";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ChargingStationCard from "../Components/cards/ChargingStationCard";
import station from "../Assets/station.png";

const LoadPeak = () => {
  const liveConfig = useSelector((state) => state.userReducer.livePageConfig);

  const [height, setHeight] = useState(120);

  let [statsData, setStatsData] = useState(null);
  let [heatData, setHeatData] = useState(null);
  let [waterData, setWaterData] = useState(null);
  let [batteryData, setBatteryData] = useState(null);
  let [pvProduction, setPvProduction] = useState(null);
  const [powerQuality, setPowerQualtity] = useState(null);

  let batteryLevel = [
    {
      title: "Battery 1",
      percentage: 0.5,
      status: "Charging...",
    },
    // {
    //   title: "Battery 2",
    //   percentage: 0.25,
    //   status: "Stopped Charging...",
    // },
    // {
    //   title: "Battery 3",
    //   percentage: 0.5,
    //   status: "Charging...",
    // },
    // {
    //   title: "Battery 4",
    //   percentage: 1,
    //   status: "Completed",
    // },
  ];

  useEffect(() => {
    (async () => {
      const data = await getStatsLivePage();
      setStatsData(data);
      const heatData = await getHeatConsumption();
      setHeatData(heatData);
      const waterData = await getWaterConsumption();
      setWaterData(waterData);
      const batteryData = await getBatteryLevels();
      setBatteryData(batteryData);
      const pvData = await getPvProductionLivePage();
      setPvProduction(pvData);
      const powerResult = await getPowerQualtiy();
      setPowerQualtity(powerResult);
    })();
  }, []);

  return (
    <Layout active="live">
      <div className="live-main live-main2">
        <div className="grid-section">
          {/* pv production */}
          <div
            className="white-card"
            style={{ height: "300px", justifyContent: "flex-start" }}
          >
            <Typography.Title
              className="title"
              level={5}
              style={{ fontWeight: "400" }}
            >
              PV Production <img src={signalIcon} />
            </Typography.Title>

            <div
              style={{
                position: "relative",
                width: "450px",
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  height: "11rem",
                  width: "11rem",
                  display: "flex",
                  margin: "0 auto",
                }}
              >
                <ChartjsSimpleDonut />
              </div>

              <p
                style={{
                  position: "absolute",
                  top: "55px",
                  right: "10px",
                  textAlign: "center",
                  color: "#7E84A3",
                  fontSize: "0.75rem",
                }}
              >
                {pvProduction?.selfConsumption}%
                <br />
                Self consumption
              </p>

              <p
                style={{
                  position: "absolute",
                  top: "25%",
                  left: "15%",
                  textAlign: "center",
                  color: "#7E84A3",
                  fontSize: "0.75rem",
                }}
              >
                {pvProduction?.gridFeed}%
                <br />
                Grid-feed
              </p>

              <p
                style={{
                  position: "absolute",
                  top: "105%",
                  left: "40%",
                  textAlign: "center",
                  color: "#7E84A3",
                  fontSize: "0.75rem",
                }}
              >
                {pvProduction?.batteryCharging}%
                <br />
                Battery Charging
              </p>

              <p
                style={{
                  position: "absolute",
                  top: "35%",
                  left: "40%",
                  textAlign: "center",
                  minWidth: "100px",
                }}
              >
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "1.56rem",
                  }}
                >
                  {Number(pvProduction?.totalProduction)?.toLocaleString(
                    "de-DE"
                  )}
                </span>
                <br />
                <span
                  style={{
                    color: "var(--secondaryText)",
                    fontSize: "0.87rem",
                  }}
                >
                  kW
                </span>
              </p>
            </div>
          </div>

          {/* co2 consumption */}

          <EnergyCostCard
            height={"150px"}
            unit={"kg"}
            noWater
            header={
              <Typography.Title
                className="title"
                level={5}
                style={{ fontWeight: "400" }}
              >
                <span>
                  CO<sub>2</sub> Consumption
                </span>{" "}
                <img src={signalIcon} />
              </Typography.Title>
            }
          />

          {/* solar thermal */}

          <div className="live-card white-card">
            <Typography.Title
              className="title"
              level={5}
              style={{ fontWeight: "400" }}
            >
              Solar Thermal Production <img src={signalIcon} />
            </Typography.Title>

            <div
              className="solar-thermal"
              style={
                {
                  // display: "flex",
                  // justifyContent: "space-between",
                  // flexWrap: "wrap",
                }
              }
            >
              <div>
                <Typography.Title
                  level={2}
                  className="value"
                  style={{
                    fontWeight: "600",
                    margin: "0",
                  }}
                >
                  {statsData?.thermalProduction?.toLocaleString("de-DE")} kw
                </Typography.Title>

                <div className="percent">
                  <span
                    style={{
                      fontSize: "14px",
                      color: "var(--green)",
                      fontWeight: "bold",
                    }}
                  >
                    {statsData?.thermalPercent + "%"}
                    {statsData?.thermalPercent < 0 ? (
                      <BsArrowDown style={{ strokeWidth: 2 }} />
                    ) : (
                      <BsArrowUp style={{ strokeWidth: 2 }} />
                    )}
                  </span>
                  &nbsp;
                  <span className="secondary">than last hour</span>
                </div>
              </div>
              <div style={{ width: "100%", height: "90%" }}>
                <TinyColumn
                  tooltip={false}
                  // Data={statsData?.thermalData ? statsData?.thermalData : []}
                />
              </div>
            </div>
          </div>

          {/* electric consumption */}
          <div className="white-card live-big-card">
            <Typography.Title
              className="title main-title"
              level={4}
              style={{ fontWeight: "600" }}
            >
              Electric Consumption <img src={signalIcon} />
            </Typography.Title>
            <ElectricConsumptionRoundChart />
          </div>

          {/* charging station */}

          <div className="white-card live-big-card charging">
            <img src={station} width="100%" />
            <Row gutter={[20, 20]} style={{ marginTop: "-200px" }}>
              {[1, 2, 3, 4].map((data) => (
                <Col xs={24} md={12} lg={6}>
                  <div
                    className="white-card"
                    style={{ border: "2px solid var(--green)" }}
                  >
                    <Typography.Title level={5}>
                      DC Fast Charger {data}
                    </Typography.Title>
                    <Typography.Text>
                      <CheckOutlined
                        style={{
                          color: "#46C782",
                          marginRight: "10px",
                        }}
                      />
                      Status : Charging
                    </Typography.Text>
                    <Typography.Text>
                      <CheckOutlined
                        style={{
                          color: "#46C782",
                          marginRight: "10px",
                        }}
                      />
                      Remaining : 25 min (86% charged)
                    </Typography.Text>
                  </div>
                </Col>
              ))}
            </Row>
          </div>

          {/* heat consumption */}

          <div className="white-card">
            <Typography.Title
              className="title main-title"
              level={4}
              style={{ fontWeight: "600", marginBottom: "20px" }}
            >
              Heat Consumption <img src={signalIcon} />
            </Typography.Title>
            <HeatConsumptionColumn
              Data={heatData ? heatData : []}
              colors={liveConfig?.heatColors}
            />
          </div>

          {/* water consumption */}

          <div className="white-card" style={{ padding: "5px" }}>
            <div style={{ padding: "20px 1rem" }}>
              <Typography.Title
                className="title main-title"
                level={4}
                style={{ fontWeight: "600" }}
              >
                {liveConfig?.waterConsumption
                  ? "Water Consumption"
                  : "Power Quality"}{" "}
                <img src={signalIcon} />
              </Typography.Title>
            </div>
            <div
              style={{
                width: "100%",
                // height: "100%",
              }}
            >
              {liveConfig?.waterConsumption ? (
                <>
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "1.75rem",
                      fontWeight: "600",
                      margin: 0,
                    }}
                  >
                    1.000 l
                  </p>
                  <img src={waves} width="100%" height="auto" />
                </>
              ) : (
                // <LiquidSquare
                //   percentage={waterData ? waterData : 0}
                //   color={liveConfig?.batteryColor}
                // />
                <HorizontalBar Data={powerQuality ? powerQuality : []} />
              )}
            </div>
          </div>

          {/* battery level */}

          <div className="white-card">
            <Typography.Title
              className="title"
              level={5}
              style={{ fontWeight: "400" }}
            >
              Battery Level <img src={signalIcon} />
            </Typography.Title>
            <Row gutter={[30, 30]} justify="center">
              {batteryData?.slice(0, 1)?.map((level) => (
                <Col
                  className={
                    level.status === "Completed"
                      ? "liquid-circle-completed"
                      : "liquid-circle"
                  }
                  xs={24}
                >
                  <div>
                    <LiquidChart
                      percentage={level.percentage}
                      status={level.status}
                      color={liveConfig?.batteryColor}
                    />
                    <div className="level-section">
                      <Typography.Title
                        className=""
                        level={5}
                        style={{
                          color: "#131523",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        {level.title}
                      </Typography.Title>
                      <Typography.Text
                        type="secondary"
                        style={{
                          fontSize: "13px",
                          fontWeight: "600",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <AiFillThunderbolt
                          size={14}
                          style={{
                            marginRight: "5px",
                          }}
                          color={
                            level.status === "Stopped Charging..."
                              ? "red"
                              : level.status === "Completed"
                              ? ""
                              : "green"
                          }
                        />{" "}
                        {level.status}
                      </Typography.Text>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoadPeak;
