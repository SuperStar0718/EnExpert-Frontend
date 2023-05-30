import Layout from "../Layout/MainLayout";
import { Typography, Row, Col, Divider } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import moment from "moment";
import signalIcon from "../Assets/signal24.png";
import EnergyCostCard from "../Components/cards/EnergyCostCard";
import TinyColumn from "../Components/charts/TinyColumn";
import LiquidChart from "../Components/charts/LiquidChart";
import LiquidSquare from "../Components/charts/LiquidSquare";
import ColumnLineDualAxis from "../Components/charts/ColumnLineDualAxis";
import ChartjsSimpleDonut from "../Components/charts/ChartjsSimpleDonut";
import TinyLine from "../Components/charts/TinyLine";
import HeatConsumptionColumn from "../Components/charts/HeatConsumptionColumn";
import HorizontalBar from "../Components/charts/HorizontalBar";
import waves from "../Assets/waves.png";
import station from "../Assets/station.png";
import ElectricConsumptionRoundChart from "../Components/ElectricConsumptionRoundChart";
import {
  BsArrowDown,
  BsArrowUp,
  AiFillThunderbolt,
  GiCarBattery,
} from "react-icons/all";
import {
  getStatsLivePage,
  getHeatConsumption,
  getWaterConsumption,
  getBatteryLevels,
  getPvProductionLivePage,
  getPowerQualtiy,
  getElectricConsumptionGraph,
} from "../redux";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ChargingStationCard from "../Components/cards/ChargingStationCard";

const LoadPeak = () => {
  const liveConfig = useSelector((state) => state.userReducer.livePageConfig);

  const [height, setHeight] = useState(120);
  const [batteryPercent, setBatteryPercent] = useState(98);
  const [batteryStatus, setBatteryStatus] = useState("Charging");
  const [batteryForward, setBatteryForward] = useState(true);

  let [statsData, setStatsData] = useState(null);
  let [heatData, setHeatData] = useState(null);
  let [waterData, setWaterData] = useState(null);
  let [batteryData, setBatteryData] = useState(null);
  let [pvProduction, setPvProduction] = useState(null);
  const [powerQuality, setPowerQualtity] = useState(null);

  const [electricConsumption, setElectricConsumption] = useState(null);

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

  let chargingstations = [
    "Input : 1 Phase AC | 120V",
    "1 Phase AC | 280V or 240V",
    "3 Phase AC | 450V",
    "3 Phase AC | 450V",
  ];

  useEffect(() => {
    let interval = setInterval(() => {
      if (batteryPercent === 100 && batteryForward) {
        setBatteryStatus("Completed");
        setBatteryForward(false);
      }

      if (batteryPercent === 0) {
        setBatteryPercent((percent) => percent + 1);
        setBatteryStatus("Charging");

        setBatteryForward(true);
      }
      if (batteryForward && batteryPercent < 100) {
        setBatteryPercent((percent) => percent + 1);
        setBatteryStatus("Charging");

        setBatteryForward(true);
      }
      if (!batteryForward && batteryPercent !== 0) {
        setBatteryStatus("Battery in Use");

        setBatteryPercent((percent) => percent - 1);
      }
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [batteryPercent, batteryForward]);

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

      const result = await getElectricConsumptionGraph({ filter: "7d" });
      setElectricConsumption(result);
    })();
  }, []);

  useEffect(() => {
    const timeoutID = setInterval(async () => {
      const pvData = await getPvProductionLivePage();
      setPvProduction(pvData);
      const waterData = await getWaterConsumption();
      setWaterData(waterData);
      const heatData = await getHeatConsumption();
      setHeatData(heatData);
      const data = await getStatsLivePage();
      setStatsData(data);
  
    }, 4000);

    return () => {
      clearInterval(timeoutID);
    };
  }, []);

  return (
    <Layout active="live">
      <div className="live-main energy-main">
        <Row gutter={[30, 30]}>
          {/* <Col xs={0} xl={0} xxl={8}>
            <div className="live-card white-card">
              <Typography.Title
                className="title"
                level={5}
                style={{ fontWeight: "400" }}
              >
                You currently save <img src={signalIcon} />
              </Typography.Title>
              <Typography.Title
                level={2}
                className="value"
                style={{
                  color: "var(--green)",
                  fontWeight: "600",
                  margin: "0",
                }}
              >
                {statsData?.saved?.toLocaleString("de-DE")} €
              </Typography.Title>

              <div className="percent">
                <span
                  style={{
                    fontSize: "14px",
                    color: "var(--red)",
                    fontWeight: "bold",
                  }}
                >
                  {statsData?.savedPercent + "%"}
                  {statsData?.savedPercent < 0 ? (
                    <BsArrowDown style={{ strokeWidth: 2 }} />
                  ) : (
                    <BsArrowUp style={{ strokeWidth: 2 }} />
                  )}
                </span>
                &nbsp;
                <span className="secondary">than last hour</span>
              </div>
            </div>
          </Col> */}

          <Col xs={24} lg={24} xl={8}>
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
          </Col>

          <Col xs={24} md={12} xl={12} xxl={8}>
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
          </Col>

          <Col xs={24} md={12} xl={12} xxl={8}>
            <div className="live-card white-card">
              <Typography.Title
                className="title"
                level={5}
                style={{ fontWeight: "400" }}
              >
                Solar Thermal Production <img src={signalIcon} />
              </Typography.Title>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
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
                    {statsData?.thermalProduction?.toLocaleString("de-DE")} kW
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
                <div
                  style={{
                    width: "95%",
                    marginTop: "20px",
                    height: "100px",
                  }}
                >
                  <TinyLine
                    Data={statsData?.thermalData ? statsData?.thermalData : []}
                  />
                </div>
              </div>
            </div>
          </Col>

          {/* <Col xs={0} xxl={12}></Col> */}

          <Col xs={24} lg={16}>
            <div className="white-card live-big-card charging">
              <Row gutter={[20, 20]}>
                {[1, 2, 3, 4].map((data, ind) => (
                  <Col xs={24} md={12} lg={6}>
                    <div
                      className="white-card station-card"
                      style={{ border: "2px solid var(--green)" }}
                    >
                      <Typography.Title level={5}>
                        DC Fast Charger {data}
                      </Typography.Title>
                      <Typography.Title
                        level={5}
                        style={{ fontSize: "0.85rem", marginBottom: "10px" }}
                      >
                        {chargingstations[ind]}
                      </Typography.Title>

                      <Typography.Text>
                        <CheckOutlined
                          style={{
                            color: "#46C782",
                            marginRight: "10px",
                          }}
                        />
                        Status : Charging (86%)
                      </Typography.Text>
                      <Divider />

                      <Typography.Text>
                        <CheckOutlined
                          style={{
                            color: "#46C782",
                            marginRight: "10px",
                          }}
                        />
                        AMPS : {"<"}125 Amps
                      </Typography.Text>
                      <Divider />
                      <Typography.Text>
                        <CheckOutlined
                          style={{
                            color: "#46C782",
                            marginRight: "10px",
                          }}
                        />
                        Charging Load : {"<"}90 kW
                      </Typography.Text>
                      <Divider />

                      <Typography.Text>
                        <CheckOutlined
                          style={{
                            color: "#46C782",
                            marginRight: "10px",
                          }}
                        />
                        Charging Time : 80% Charge in 30 Min.
                      </Typography.Text>

                      <Divider />

                      <Typography.Text>
                        <CheckOutlined
                          style={{
                            color: "#46C782",
                            marginRight: "10px",
                          }}
                        />
                        Remaining : 25 min
                      </Typography.Text>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>

          <Col xs={24} md={24} lg={12} xl={8}>
            <div className="white-card live-big-card">
              <Typography.Title
                className="title main-title"
                level={4}
                style={{ fontWeight: "600" }}
              >
                Electric Consumption <img src={signalIcon} />
              </Typography.Title>
              <ElectricConsumptionRoundChart
                electricConsumption={electricConsumption?.roundChart}
              />
            </div>
          </Col>

          <Col xs={24} xl={8}>
            <div
              className="live-card white-card"
              style={{ minHeight: "200px", marginBottom: "30px" }}
            >
              <div className="flex-between">
                <Typography.Title
                  className="title"
                  level={5}
                  style={{ fontWeight: "400" }}
                >
                  You currently save{" "}
                  <Typography.Title
                    level={2}
                    className="value"
                    style={{
                      color: "var(--green)",
                      fontWeight: "600",
                      margin: "0",
                    }}
                  >
                    ( {statsData?.saved?.toLocaleString("de-DE")} €)
                  </Typography.Title>
                </Typography.Title>
                <img src={signalIcon} />
              </div>

              <div className="percent">
                <span
                  style={{
                    fontSize: "14px",
                    color: "var(--red)",
                    fontWeight: "bold",
                  }}
                >
                  {statsData?.savedPercent + "%"}
                  {statsData?.savedPercent < 0 ? (
                    <BsArrowDown style={{ strokeWidth: 2 }} />
                  ) : (
                    <BsArrowUp style={{ strokeWidth: 2 }} />
                  )}
                </span>
                &nbsp;
                <span className="secondary">than last hour</span>
              </div>

              <div
                style={{
                  width: "100%",
                  marginTop: "20px",
                  height: "200px",
                }}
              >
                <ColumnLineDualAxis
                  sliced={7}
                  animate
                  leftUnit="€"
                  rightUnit="€"
                  xUnit="last week"
                  alias={["Line (€)", "Bar (€)"]}
                />
              </div>
            </div>
            <div className="white-card" style={{ minHeight: "250px" }}>
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
                      batteryStatus === "Completed"
                        ? "liquid-circle-completed"
                        : "liquid-circle"
                    }
                    xs={24}
                    // md={12}
                    // lg={6}
                  >
                    <div>
                      <LiquidChart
                        percentage={batteryPercent / 100}
                        status={batteryStatus}
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
                          {batteryStatus === "Battery in Use" ? (
                            <GiCarBattery
                              style={{
                                marginRight: "5px",
                              }}
                              // color={
                              //   level.status === "Stopped Charging..."
                              //     ? "red"
                              //     : level.status === "Completed"
                              //     ? ""
                              //     : "green"
                              // }
                            />
                          ) : (
                            <AiFillThunderbolt
                              size={14}
                              style={{
                                marginRight: "5px",
                              }}
                              color={"green"}
                              // color={
                              //   level.status === "Stopped Charging..."
                              //     ? "red"
                              //     : level.status === "Completed"
                              //     ? ""
                              //     : "green"
                              // }
                            />
                          )}{" "}
                          {batteryStatus}
                        </Typography.Text>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>

          <Col xs={24} lg={12} xl={8}>
            <div
              className="white-card live-big-card"
              style={{ padding: "5px" }}
            >
              <div style={{ padding: "20px 1rem", zIndex: "100" }}>
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
                }}
              >
                {liveConfig?.waterConsumption ? (
                  <div>
                    <div class="wrapper">
                      <p
                        style={{
                          textAlign: "center",
                          fontSize: "1.75rem",
                          fontWeight: "600",
                          margin: 0,
                        }}
                      >
                        {waterData?.toLocaleString("de-DE")} Liter/s
                      </p>
                      <div class="wave"></div>
                      <div class="wrapper2">
                        <div class="wave2"></div>
                      </div>
                      <div class="wrapper3">
                        <div class="wave3"></div>
                      </div>
                    </div>
                    {/* <img src={waves} width="100%" height="auto" /> */}
                  </div>
                ) : (
                  // <LiquidSquare
                  //   percentage={waterData ? waterData : 0}
                  //   color={liveConfig?.batteryColor}
                  // />
                  <HorizontalBar Data={powerQuality ? powerQuality : []} />
                )}
              </div>
            </div>
          </Col>

          <Col xs={24} md={24} lg={12} xl={8}>
            <div className="white-card live-big-card">
              <Typography.Title
                className="title main-title"
                level={4}
                style={{ fontWeight: "600", marginBottom: "20px" }}
              >
                Heat Consumption <img src={signalIcon} />
              </Typography.Title>
              <HeatConsumptionColumn
                Data={heatData}
                colors={liveConfig?.heatColors}
              />
            </div>
          </Col>

          {/* <Col xs={24} xl={8}>
            <ChargingStationCard height="300px" setHeight={setHeight} />
          </Col> */}
        </Row>
      </div>
    </Layout>
  );
};

export default LoadPeak;
