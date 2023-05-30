import Layout from "../Layout/MainLayout";
import {
  Typography,
  Row,
  Col,
  Select,
  Tooltip,
  Switch,
  Form,
  Input,
  Collapse,
  Progress,
  Button,
  Space,
  Tabs,
  TimePicker,
  Checkbox,
} from "antd";
import TinyColumn from "../Components/charts/TinyColumn";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import EnergyColumnLine from "../Components/charts/EnergyColumnLine";
import CUSTOMHM from "../Components/charts/ChargingHeatmap";
import ChargingStationCard from "../Components/cards/ChargingStationCard";
import { InfoCircleOutlined } from "@ant-design/icons";
import { getEnergyGraphData } from "../redux";
import StackedColumn from "../Components/charts/StackedColumn";
import { useEffect, useState, useRef } from "react";
import moment from "moment";
import { BsArrowDown, BsArrowUp, RiChargingPileLine } from "react-icons/all";

import { useSelector } from "react-redux";

const LoadPeak = () => {
  const { Panel } = Collapse;

  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };
  const [height, setHeight] = useState(120);
  const [Heatmapheight, setHeatmapHeight] = useState(120);

  const [mainData, setMainData] = useState([
    {
      key: "all",
      values: [],
    },
    {
      key: "monday",
      values: [],
    },
    {
      key: "tuesday",
      values: [],
    },
    {
      key: "wednesday",
      values: [],
    },
    {
      key: "thursday",
      values: [],
    },
    {
      key: "friday",
      values: [],
    },
    {
      key: "saturday",
      values: [],
    },
    {
      key: "sunday",
      values: [],
    },
  ]);

  const [startDate, setStartDate] = useState(
    moment().subtract(1, "month").format("YYYY-MM-DD")
  );
  const [endDate, setEndDate] = useState(moment().format("YYYY-MM-DD"));
  const heightRef = useRef(null);
  const heatMapRef = useRef(null);

  let Data = [
    {
      title: "All",
      key: "all",
    },
    {
      title: "Monday",
      key: "monday",
    },
    {
      title: "Tuesday",
      key: "tuesday",
    },
    {
      title: "Wednesday",
      key: "wednesday",
    },
    {
      title: "Thursday",
      key: "thursday",
    },
    {
      title: "Friday",
      key: "friday",
    },
    {
      title: "Saturday",
      key: "saturday",
    },
    {
      title: "Sunday",
      key: "sunday",
    },
  ];

  let chargingData = [
    {
      title: "Station 1",
      key: "station1",
    },
    {
      title: "Station 2",
      key: "station2",
    },
    {
      title: "Station 3",
      key: "station3",
    },
    {
      title: "Station 4",
      key: "station4",
    },
  ];

  console.log("mainData", mainData);
  useEffect(() => {
    setHeight(heightRef?.current?.offsetHeight);
  }, [heightRef?.current?.offsetHeight]);

  useEffect(() => {
    setHeatmapHeight(heatMapRef?.current?.offsetHeight);
  }, [heatMapRef?.current?.offsetHeight]);

  return (
    <Layout active="emobility">
      <div className="live-main energy-main">
        {/* <Typography.Title level={2}>E-Mobility</Typography.Title> */}

        <Row gutter={[30, 30]}>
          <Col xs={24} md={24} lg={8}>
            <ChargingStationCard setHeight={setHeight} />
          </Col>

          <Col xs={24} md={12} lg={8}>
            <div
              className="live-card white-card"
              style={{
                height,
              }}
            >
              <Typography.Title
                className="title"
                level={5}
                style={{ fontWeight: "400", marginBottom: "20px" }}
              >
                Usage & Cost
                <Select defaultValue={"day"} style={{ width: "max-content" }}>
                  <Select.Option value="day">1 day</Select.Option>
                  <Select.Option value="week">1 week</Select.Option>
                  <Select.Option value="month">1 month</Select.Option>
                  <Select.Option value="year">1 year</Select.Option>
                </Select>
              </Typography.Title>

              <div className="flex-around">
                <div>
                  <Typography.Title
                    level={2}
                    className="value"
                    style={{
                      //   color: "var(--green)",
                      fontWeight: "600",
                      margin: "0",
                    }}
                  >
                    1.272 €
                  </Typography.Title>
                  <div className="percent">
                    <span
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--red)",
                        fontWeight: "bold",
                      }}
                    >
                      2.5% <BsArrowUp style={{ strokeWidth: 2 }} />
                    </span>
                    &nbsp;
                    <span className="secondary">than last day</span>
                  </div>
                </div>
                <div>
                  <Typography.Title
                    level={2}
                    className="value"
                    style={{
                      //   color: "var(--green)",
                      fontWeight: "600",
                      margin: "0",
                    }}
                  >
                    452 kWh
                  </Typography.Title>
                  <div className="percent">
                    <span
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--green)",
                        fontWeight: "bold",
                      }}
                    >
                      1.3% <BsArrowDown style={{ strokeWidth: 2 }} />
                    </span>
                    &nbsp;
                    <span className="secondary">than last day</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col xs={24} md={12} lg={8}>
            <div
              className="live-card white-card"
              style={{
                height,
              }}
            >
              <Typography.Title
                className="title"
                level={5}
                style={{ fontWeight: "400" }}
              >
                Carbon Footprint Reduction
                <Select defaultValue={"day"} style={{ width: "max-content" }}>
                  <Select.Option value="day">1 day</Select.Option>
                  <Select.Option value="week">1 week</Select.Option>
                  <Select.Option value="month">1 month</Select.Option>
                  <Select.Option value="year">1 year</Select.Option>
                </Select>
              </Typography.Title>

              <div className="flex-around">
                <div>
                  <Typography.Title
                    level={2}
                    className="value"
                    style={{
                      color: "var(--primary)",
                      fontWeight: "600",
                      margin: "0",
                    }}
                  >
                    34 kg
                  </Typography.Title>

                  <Typography.Title level={5} style={{ margin: 0 }}>
                    CO2 Saved
                  </Typography.Title>

                  <div className="percent" style={{ margin: 0 }}>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--red)",
                        fontWeight: "bold",
                      }}
                    >
                      2.5% <BsArrowUp style={{ strokeWidth: 2 }} />
                    </span>
                    &nbsp;
                    <span className="secondary">than last day</span>
                  </div>
                </div>
                <div>
                  <Typography.Title
                    level={2}
                    className="value"
                    style={{
                      color: "var(--primary)",
                      fontWeight: "600",
                      margin: "0",
                    }}
                  >
                    257 L
                  </Typography.Title>
                  <Typography.Title level={5} style={{ margin: 0 }}>
                    Fuel Replaced
                  </Typography.Title>
                  <div className="percent" style={{ margin: 0 }}>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--green)",
                        fontWeight: "bold",
                      }}
                    >
                      1.3% <BsArrowDown style={{ strokeWidth: 2 }} />
                    </span>
                    &nbsp;
                    <span className="secondary">than last day</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col xs={24}>
            <div className="white-card">
              <Typography.Title
                className="title main-title"
                level={4}
                style={{ fontWeight: "600", marginBottom: "30px" }}
              >
                Consumption
                <Select defaultValue={"month"} style={{ width: "max-content" }}>
                  <Select.Option value="week">1 week</Select.Option>
                  <Select.Option value="month">1 month</Select.Option>
                  <Select.Option value="year">1 year</Select.Option>
                </Select>
              </Typography.Title>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                    transform: "rotate(-90deg)",
                    width: "max-content",
                  }}
                >
                  <span
                    style={{
                      color: "var(--secondaryText)",
                    }}
                  >
                    kWh
                  </span>
                </p>
                <div
                  style={{
                    width: "95%",
                  }}
                >
                  <StackedColumn />
                </div>
              </div>
            </div>
          </Col>

          <Col xs={24} lg={12} xl={12}>
            <div className="live-card white-card" ref={heatMapRef}>
              <Typography.Title
                className="title"
                level={5}
                style={{ fontWeight: "400" }}
              >
                Smart Charging and Charging Profiles
              </Typography.Title>
              {/* <Typography.Text
                type="secondary"
                style={{
                  fontWeight: "600",
                  marginBottom: "30px",
                  letterSpacing: "0.5px",
                }}
              >
                Define the maximum current per day and time in the schedule
                below
              </Typography.Text> */}

              <div>
                <Form layout="vertical">
                  <Form.Item name={"name"} label="Charging profile name">
                    {/* <Typography.Text
                      type="secondary"
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: "400",
                        marginBottom: "5px",
                        marginTop: "0",
                      }}
                    >
                      Define the name of the charging profile
                    </Typography.Text> */}
                    <div className="flex-between">
                      <Input style={{ width: "60%" }} />
                      <Button type="primary">Save</Button>
                    </div>
                  </Form.Item>

                  <Form.Item name={"current"} label="Maximum Current (A)">
                    <div className="flex-between">
                      <Input style={{ width: "30%" }} />
                      <Button type="primary">Save</Button>
                    </div>
                  </Form.Item>

                  <Form.Item name={"renewable"}>
                    <Checkbox
                      style={{
                        color: "red",
                      }}
                    >
                      Use only Renewable Energy
                    </Checkbox>
                  </Form.Item>
                </Form>
              </div>

              <Tabs defaultActiveKey="1" animated>
                <Tabs.TabPane tab="Days" key="1">
                  <Collapse accordion ghost bordered={false}>
                    {Data.map((data) => (
                      <Panel
                        header={
                          <div
                            className="flex-between"
                            style={{ width: "95%" }}
                          >
                            <span style={{ fontWeight: "bold" }}>
                              {data.title}
                            </span>
                            <Progress
                              percent={100}
                              strokeWidth={10}
                              style={{ width: "70%" }}
                              showInfo={false}
                            />
                          </div>
                        }
                        key={data.key}
                      >
                        <Form
                          layout="vertical"
                          onFinish={onFinish}
                          // onValuesChange={(values, allValues) => {
                          //   console.log("change all values", allValues);

                          //   let temp =
                          //     allValues[data.key] &&
                          //     allValues[data.key].length > 0
                          //       ? [
                          //           // let temp  = mainData[data.key].values = [
                          //           {
                          //             from: allValues.from._d,
                          //             to: allValues.to._d,
                          //             power: allValues.power,
                          //             unit: allValues.unit,
                          //           },
                          //           ...allValues[data.key],
                          //         ]
                          //       : [
                          //           // let temp  = mainData[data.key].values = [
                          //           {
                          //             from: allValues.from._d,
                          //             to: allValues.to._d,
                          //             power: allValues.power,
                          //             unit: allValues.unit,
                          //           },
                          //         ];
                          //   // setMainData([...mainData]);
                          //   console.log("temp", temp);
                          // }}
                          autoComplete="off"
                        >
                          <Row gutter={[20, 20]} align="middle">
                            <Col xs={24} md={12} xl={6}>
                              <Form.Item name="from" label="From">
                                <TimePicker
                                // defaultValue={moment()}
                                // format={"HH:MM:SS"}
                                />
                              </Form.Item>
                            </Col>
                            <Col xs={24} md={12} lg={6}>
                              <Form.Item name="to" label="To">
                                <TimePicker />
                              </Form.Item>
                            </Col>
                            <Col xs={24} md={12} lg={6}>
                              <Form.Item name="power" label="Power">
                                <Input type="number" style={{ height: 32 }} />
                              </Form.Item>
                            </Col>
                            <Col xs={24} md={12} lg={6}>
                              <Form.Item name="unit" label="Power Unit">
                                <Switch
                                  checkedChildren="kW"
                                  unCheckedChildren="%"
                                  defaultChecked={false}
                                />
                              </Form.Item>
                            </Col>

                            <Form.List name={data.key}>
                              {/*  */}
                              {(fields, { add, remove }) => (
                                <>
                                  {fields.map(({ key, name, ...restField }) => (
                                    <>
                                      <Col xs={24} md={12} lg={6}>
                                        <Form.Item
                                          {...restField}
                                          name={[name, "from"]}
                                          label="From"
                                        >
                                          <TimePicker />
                                        </Form.Item>
                                      </Col>
                                      <Col xs={24} md={12} lg={6}>
                                        <Form.Item
                                          {...restField}
                                          name={[name, "to"]}
                                          label="To"
                                        >
                                          <TimePicker />
                                        </Form.Item>
                                      </Col>
                                      <Col xs={24} md={12} lg={6}>
                                        <Form.Item
                                          {...restField}
                                          name={[name, "power"]}
                                          label="Power"
                                        >
                                          <Input
                                            type="number"
                                            style={{ height: 32 }}
                                          />
                                        </Form.Item>
                                      </Col>
                                      <Col xs={24} md={12} lg={3}>
                                        <Form.Item
                                          {...restField}
                                          name={[name, "unit"]}
                                          label="Power Unit"
                                        >
                                          <Switch
                                            checkedChildren="kW"
                                            unCheckedChildren="%"
                                            defaultChecked={false}
                                          />
                                        </Form.Item>
                                      </Col>
                                      <Col xs={24} md={12} lg={3}>
                                        <MinusCircleOutlined
                                          size={20}
                                          onClick={() => remove(name)}
                                        />
                                      </Col>
                                    </>
                                  ))}
                                  <Col xs={24}>
                                    <Form.Item>
                                      <Button
                                        shape="round"
                                        style={{
                                          display: "flex",
                                          float: "right",
                                          alignItems: "center",
                                        }}
                                        onClick={() => add()}
                                        icon={<PlusOutlined />}
                                      >
                                        Add
                                      </Button>
                                    </Form.Item>
                                  </Col>
                                </>
                              )}
                            </Form.List>
                            <Col xs={24}>
                              <Form.Item>
                                <Button block type="primary" htmlType="submit">
                                  Submit
                                </Button>
                              </Form.Item>
                            </Col>
                          </Row>
                        </Form>
                      </Panel>
                    ))}
                  </Collapse>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Charging station" key="2">
                  <Collapse accordion ghost bordered={false}>
                    {chargingData.map((data) => (
                      <Panel
                        header={
                          <div
                            className="flex-between"
                            style={{ width: "95%" }}
                          >
                            <span style={{ fontWeight: "bold" }}>
                              {data.title}
                            </span>
                            <Progress
                              percent={100}
                              strokeWidth={10}
                              style={{ width: "70%" }}
                              showInfo={false}
                            />
                          </div>
                        }
                        key={data.key}
                      >
                        <Form
                          layout="vertical"
                          onFinish={onFinish}
                          autoComplete="off"
                        >
                          <Row gutter={[20, 20]} align="middle">
                            <Col xs={24} md={12} xl={6}>
                              <Form.Item name="from" label="From">
                                <TimePicker />
                              </Form.Item>
                            </Col>
                            <Col xs={24} md={12} lg={6}>
                              <Form.Item name="to" label="To">
                                <TimePicker />
                              </Form.Item>
                            </Col>
                            <Col xs={24} md={12} lg={6}>
                              <Form.Item name="power" label="Power">
                                <Input type="number" style={{ height: 32 }} />
                              </Form.Item>
                            </Col>
                            <Col xs={24} md={12} lg={6}>
                              <Form.Item name="unit" label="Power Unit">
                                <Switch
                                  checkedChildren="kW"
                                  unCheckedChildren="%"
                                  defaultChecked={false}
                                />
                              </Form.Item>
                            </Col>

                            <Form.List name={data.key}>
                              {/*  */}
                              {(fields, { add, remove }) => (
                                <>
                                  {fields.map(({ key, name, ...restField }) => (
                                    <>
                                      <Col xs={24} md={12} lg={6}>
                                        <Form.Item
                                          {...restField}
                                          name={[name, "from"]}
                                          label="From"
                                        >
                                          <TimePicker />
                                        </Form.Item>
                                      </Col>
                                      <Col xs={24} md={12} lg={6}>
                                        <Form.Item
                                          {...restField}
                                          name={[name, "to"]}
                                          label="To"
                                        >
                                          <TimePicker />
                                        </Form.Item>
                                      </Col>
                                      <Col xs={24} md={12} lg={6}>
                                        <Form.Item
                                          {...restField}
                                          name={[name, "power"]}
                                          label="Power"
                                        >
                                          <Input
                                            type="number"
                                            style={{ height: 32 }}
                                          />
                                        </Form.Item>
                                      </Col>
                                      <Col xs={24} md={12} lg={3}>
                                        <Form.Item
                                          {...restField}
                                          name={[name, "unit"]}
                                          label="Power Unit"
                                        >
                                          <Switch
                                            checkedChildren="kW"
                                            unCheckedChildren="%"
                                            defaultChecked={false}
                                          />
                                        </Form.Item>
                                      </Col>
                                      <Col xs={24} md={12} lg={3}>
                                        <MinusCircleOutlined
                                          size={20}
                                          onClick={() => remove(name)}
                                        />
                                      </Col>
                                    </>
                                  ))}
                                  <Col xs={24}>
                                    <Form.Item>
                                      <Button
                                        shape="round"
                                        style={{
                                          display: "flex",
                                          float: "right",
                                          alignItems: "center",
                                        }}
                                        onClick={() => add()}
                                        icon={<PlusOutlined />}
                                      >
                                        Add
                                      </Button>
                                    </Form.Item>
                                  </Col>
                                </>
                              )}
                            </Form.List>
                            <Col xs={24}>
                              <Form.Item>
                                <Button block type="primary" htmlType="submit">
                                  Submit
                                </Button>
                              </Form.Item>
                            </Col>
                          </Row>
                        </Form>
                      </Panel>
                    ))}
                  </Collapse>
                </Tabs.TabPane>
              </Tabs>
            </div>
          </Col>

          <Col xs={24} lg={12} xl={12}>
            <div
              className="live-card heatmap-card"
              style={{
                height: Heatmapheight,
              }}
            >
              <Typography.Title
                className="title"
                level={5}
                style={{ fontWeight: "400", marginBottom: "30px" }}
              >
                Popular Charging Times
              </Typography.Title>
              <CUSTOMHM />
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default LoadPeak;
