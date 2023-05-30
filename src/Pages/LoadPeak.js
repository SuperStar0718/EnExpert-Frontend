import Layout from "../Layout/MainLayout";
import {
  Typography,
  Row,
  Col,
  Progress,
  Table,
  Checkbox,
  Slider,
  Button,
  Select,
} from "antd";
import LoadPeakArea from "../Components/charts/LoadPeakArea";
import Loader from "../Components/Loader";
import moment from "moment";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getElectricConsumption,
  getMaxLoad,
  getCurrentMonthLoad,
  getMonthlyLoad,
  getClient,
  updateLoadActions,
  createLog,
} from "../redux";
import Column from "../Components/charts/Column";
import ColumnLineDualAxis from "../Components/charts/ColumnLineDualAxis";
import { BsArrowDown, BsArrowUp, AiFillThunderbolt } from "react-icons/all";

const LoadPeak = () => {
  const contributersRef = useRef(null);

  const dispatch = useDispatch();

  const [cardHeight, setCardheight] = useState(150);

  const [electricConsumption, setElectricConsumption] = useState(null);
  const [loadData, setLoadData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [currentLoad, setCurrentLoad] = useState(null);
  const [monthlyLoad, setMonthlyLoad] = useState(null);

  const [actionLoading, setActionLoading] = useState(false);

  const [loadPeakActions, setLoadPeakActions] = useState([]);

  const colors = useSelector((state) => state.userReducer.colors);

  const onChange = (data, value, type) => {
    const index = loadPeakActions?.findIndex((obj) => {
      return obj.code === data.code;
    });
    if (index === -1) {
      setLoadPeakActions([
        ...loadPeakActions,
        type === "checkbox"
          ? {
              ...loadPeakActions[index],
              name: data.name,
              code: data.code,
              isChecked: value,
              percentage: 0,
            }
          : {
              ...loadPeakActions[index],
              name: data.name,
              code: data.code,
              percentage: value,
              isChecked: false,
            },
      ]);
    } else {
      loadPeakActions[index] =
        type === "checkbox"
          ? {
              ...loadPeakActions[index],
              name: data.name,
              code: data.code,
              isChecked: value,
            }
          : {
              ...loadPeakActions[index],
              name: data.name,
              code: data.code,
              percentage: value,
            };
      setLoadPeakActions([...loadPeakActions]);
    }
  };

  const updateAcions = async () => {
    setActionLoading(true);
    await updateLoadActions(loadPeakActions);
    const data = await dispatch(getClient());
    setUserData(data);
    setActionLoading(false);
  };

  // console.log("colors", colors);
  const getData = async () => {
    const load = await getMaxLoad();
    const currentMonthLoad = await getCurrentMonthLoad();
    setLoadData(load);

    const data = await dispatch(getClient());
    setUserData(data);
    setLoadPeakActions(data.controlNodes?.length > 0 ? data.controlNodes : []);

    const nonthlyLoad = await getMonthlyLoad();
    setMonthlyLoad(nonthlyLoad);

    setCurrentLoad(currentMonthLoad);

    const result = await getElectricConsumption();
    setElectricConsumption(result);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("currentLoad", currentLoad);

  useEffect(() => {
    setCardheight(contributersRef?.current?.offsetHeight);
    setTimeout(() => {
      setCardheight(contributersRef?.current?.offsetHeight);
    }, 1000);
  }, [contributersRef?.current?.offsetHeight]);

  return (
    <Layout active="load-peak">
      <div className="load-peak-main">
        {/* <Typography.Title level={2}>Load Peak</Typography.Title> */}
        <Row gutter={[30, 30]}>
          <Col xs={24} lg={12}>
            <div
              className="peak-card white-card"
              style={{
                height: cardHeight,
              }}
            >
              <div>
                <Typography.Title
                  className="title"
                  level={4}
                  style={{ fontWeight: "600" }}
                >
                  Load Peak ({moment().tz("Europe/Rome").format("MMMM YYYY")})
                </Typography.Title>

                <div className="flex-between">
                  <div>
                    <Typography.Title
                      level={4}
                      style={{ fontWeight: "600", margin: "0" }}
                    >
                      ACTUAL
                    </Typography.Title>

                    <Typography.Title
                      level={2}
                      style={{ fontWeight: "600", margin: "0" }}
                    >
                      {loadData?.maxLoad?.toLocaleString("de-DE")} kW
                      {/* <span style={{ fontSize: "1.2rem" }}>
                    (Max {Number(21185).toLocaleString("de-DE")} kW)
                  </span> */}
                    </Typography.Title>
                    <div className="percent" style={{ marginBottom: "5px" }}>
                      <span
                        style={{
                          fontSize: "14px",
                          color: "var(--red)",
                          fontWeight: "bold",
                        }}
                      >
                        2,5 % <BsArrowDown style={{ strokeWidth: 2 }} />
                        {/* <BsArrowUp style={{ strokeWidth: 2 }} /> */}
                      </span>
                      &nbsp;
                      <span className="secondary">than last maximum</span>
                    </div>
                    <Typography.Text
                      type="secondary"
                      style={{ fontWeight: "600", margin: "0" }}
                    >
                      {moment().tz("Europe/Rome").format("DD-MMM-YYYY - LT - ")}
                      {moment()
                        .tz("Europe/Rome")
                        .add(15, "minute")
                        .format("LT")}
                    </Typography.Text>
                  </div>

                  <div>
                    <Typography.Title
                      level={4}
                      style={{ fontWeight: "600", margin: "0" }}
                    >
                      MAX
                    </Typography.Title>

                    <Typography.Title
                      level={2}
                      style={{ fontWeight: "600", margin: "0" }}
                    >
                      {Number(21185)?.toLocaleString("de-DE")} kW
                      {/* <span style={{ fontSize: "1.2rem" }}>
                    (Max {Number(21185).toLocaleString("de-DE")} kW)
                  </span> */}
                    </Typography.Title>

                    <div className="percent">
                      <span
                        style={{
                          fontSize: "14px",
                          color: "var(--green)",
                          fontWeight: "bold",
                        }}
                      >
                        {/* 2,5 % <BsArrowDown style={{ strokeWidth: 2 }} /> */}
                        3,5 %<BsArrowUp style={{ strokeWidth: 2 }} />
                      </span>
                      &nbsp;
                      <span className="secondary">than last month</span>
                    </div>
                    <Typography.Text
                      type="secondary"
                      style={{ fontWeight: "600", margin: "0" }}
                    >
                      {moment().tz("Europe/Rome").format("DD-MMM-YYYY - LT - ")}
                      {moment()
                        .tz("Europe/Rome")
                        .add(15, "minute")
                        .format("LT")}
                    </Typography.Text>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div ref={contributersRef} className="peak-card white-card">
              <Typography.Title
                className="title"
                level={5}
                style={{ fontWeight: "600" }}
              >
                Contributors of Max Load Peak
              </Typography.Title>

              <div className="electric-consumption-right contributors">
                <div className="percentage-wrapper-left">
                  {userData?.controlNodes
                    // ?.slice(0, userData?.controlNodes?.length - 1)
                    ?.map((data) => (
                      <p>{data.name}</p>
                    ))}
                </div>
                <div className="percentage-wrapper-right">
                  {loadData?.contributors?.map((data, index) => (
                    <Progress
                      strokeLinecap="square"
                      strokeColor={colors?.[index]}
                      percent={data?.percentage?.toFixed()}
                      strokeWidth={6}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Col>

          <Col xs={24} md={12} lg={8}>
            <div className="white-card load-peak-bar">
              <Typography.Title
                className="title"
                level={5}
                style={{ fontWeight: "600", marginBottom: "20px" }}
              >
                Monthly Load Peak
              </Typography.Title>
              <ColumnLineDualAxis
                sliced={12}
                leftUnit="kW"
                rightUnit="€"
                xUnit="Months"
                alias={["Load (kW)", "Total Amount (€)"]}
              />
              {/* <Column
                Data={monthlyLoad ? monthlyLoad : []}
                Alias={"Load"}
                unit={"kW"}
              /> */}
            </div>
          </Col>

          <Col xs={24} md={12} lg={16}>
            <div className="white-card peak-area">
              <div className="flex-between" style={{ marginBottom: "30px" }}>
                <Typography.Title
                  className="title"
                  level={5}
                  style={{ fontWeight: "600", marginBottom: "0px" }}
                >
                  Total Grid Consumption
                </Typography.Title>
                <div>
                  <Select
                    style={{ width: 150, marginRight: "10px" }}
                    defaultValue="-7d"
                    onChange={async (value) => {
                      setCurrentLoad(null);
                      const currentMonthLoad = await getCurrentMonthLoad({
                        timescale: value,
                      });
                      setCurrentLoad(currentMonthLoad);
                      createLog({
                        page: "load peak",
                        section: "line chart timescale",
                        filter: value,
                        description: "get load peak for the last " + value,
                      });
                    }}
                  >
                    <Select.Option value={"-7d"}>last week</Select.Option>
                    <Select.Option value={"-30d"}>last month</Select.Option>
                    <Select.Option value={"-365d"}>last year</Select.Option>
                  </Select>

                  <Select
                    style={{ width: 150 }}
                    defaultValue="15m"
                    onChange={async (value) => {
                      setCurrentLoad(null);
                      const currentMonthLoad = await getCurrentMonthLoad({
                        filter: value,
                      });
                      setCurrentLoad(currentMonthLoad);
                      createLog({
                        page: "load peak",
                        section: "line chart interval",
                        filter: value,
                        description: "get load peak for interval " + value,
                      });
                    }}
                  >
                    <Select.Option value={"5m"}>5 minutes</Select.Option>
                    <Select.Option value={"15m"}>15 minutes</Select.Option>
                    <Select.Option value={"30m"}>30 minutes</Select.Option>
                  </Select>
                </div>
              </div>
              {currentLoad ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
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
                      kW
                    </span>
                  </p>
                  <div
                    style={{
                      width: "95%",
                      height: "95%",
                    }}
                  >
                    <LoadPeakArea Data={currentLoad ? currentLoad : []} />
                  </div>
                </div>
              ) : (
                <div className="loading" style={{ minHeight: 200 }}>
                  <Loader />
                </div>
              )}
            </div>
          </Col>

          <Col xs={24} md={12} lg={24}>
            <div className="white-card">
              <Typography.Title
                className="title"
                level={5}
                style={{ fontWeight: "600", marginBottom: "20px" }}
              >
                Load Peak Actions
              </Typography.Title>
              <Table
                size="small"
                columns={[
                  {
                    title: "",
                    dataIndex: "channel",
                  },
                  {
                    title: "Control Node",
                    dataIndex: "code",
                  },
                  {
                    title: "Channel Name",
                    dataIndex: "name",
                  },
                  {
                    title: "Percentage Range",
                    dataIndex: "range",
                  },
                ]}
                dataSource={userData?.controlNodes?.map((data, ind) => ({
                  channel: (
                    <Checkbox
                      defaultChecked={data.isChecked}
                      onChange={(value) => {
                        onChange(data, value.target.checked, "checkbox");
                      }}
                    />
                  ),
                  key: ind,
                  code: data.code,
                  name: data.name,
                  range: (
                    <Slider
                      defaultValue={data.percentage}
                      onChange={(value) => {
                        onChange(data, value, "percentage");
                      }}
                    />
                  ),
                }))}
                pagination={false}
              />
              <div className="flex">
                <Button
                  type="primary"
                  loading={actionLoading}
                  onClick={updateAcions}
                >
                  Update Actions
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default LoadPeak;
