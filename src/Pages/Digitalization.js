import Layout from "../Layout/MainLayout";
import Senky from "../Components/Senky";
import SenkyChart from "../Components/charts/SenkyChart";
import Loader from "../Components/Loader";
import Histogram from "../Components/charts/Histogram";
import SecondLevelHistogram from "../Components/charts/SecondLevelHistogram";
import PolarChart from "../Components/charts/PolarChart";
import HeatmapPolar from "../Components/charts/HeatmapPolar";
import { Row, Typography, Col, Divider, Select } from "antd";
import { useEffect, useState } from "react";
import {
  getClient,
  getDigitalization,
  getHistogramData,
  createLog,
} from "../redux";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import missingTimes from "../Util/timeranges.json";

const LoadPeak = () => {
  const colors = useSelector((state) => state.userReducer.colors);

  const dispatch = useDispatch();

  const [data, setData] = useState(null);
  // const [user, setUser] = useState(null);
  const [histogram, setHistogram] = useState([]);
  const [secondData, setSecondData] = useState([]);
  const [heatmapPolar, setHeatmapPolar] = useState([]);
  const [currentCode, setCurrentCode] = useState(null);
  const [filter, setFilter] = useState("week");

  useEffect(() => {
    (async () => {
      let digitalData = await getDigitalization();
      setData(digitalData);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let client = await dispatch(getClient());
      let data = [];
      client?.measNodes?.map(async (node) => {
        let histogramData = await getHistogramData({
          filter,
          code: node.code,
          name: node.name,
        });
        data.push(histogramData.data);
        if (data.length === client?.measNodes?.length) {
          setHistogram(data);
          getHeatmapPolar(data);
        }
      });
    })();
  }, [filter]);

  const getHeatmapPolar = async (Data) => {
    let result = [];

    Data?.map((data) => {
      let tempResult = [];

      let maximum = Math.max.apply(
        Math,
        data.values.map((o) => o.value)
      );
      maximum = (Math.round(maximum / 1000) * 1000).toFixed();

      let interval = maximum / 10;
      let i = 0;
      while (i <= maximum) {
        let filtered = data?.values?.filter((obj) => {
          return obj.value >= i && obj.value <= i + interval;
        });
        filtered?.map((data) => {
          data.series = `${i / 1000} kW - ${(i + interval) / 1000} kW`;
        });

        let missingValues = [];
        missingTimes.map((data) => {
          missingValues.push({
            time: data.time,
            value: data.value,
            series: `${i / 1000} kW - ${(i + interval) / 1000} kW`,
          });
        });
        tempResult.push(...filtered, ...missingValues);
        // setHeatmapPolar([...heatmapPolar, ]);
        i += interval;
      }
      result.push(tempResult);
    });
    setHeatmapPolar(result);
  };

  console.log("heatmapPolar", heatmapPolar);

  return (
    <Layout active="digitalization">
      <Typography.Title level={2}>Digitalization</Typography.Title>

      <div
        className="flex-between digitalization-header"
        style={{ marginBottom: "20px" }}
      >
        <Typography.Title level={3}>Senky Diagram</Typography.Title>
        <Select
          defaultValue={"week"}
          onChange={(value) => {
            createLog({
              page: "digitalization",
              section: "senky chart",
              filter: value,
              description: "get senky cahrt diagram for the timescale " + value,
            });
          }}
          style={{ width: 200 }}
        >
          <Select.Option value="week">Last Week</Select.Option>
          <Select.Option value="month">Last Month</Select.Option>
          <Select.Option value="year">Last Year</Select.Option>
        </Select>
      </div>
      <SenkyChart Data={data ? data : []} />

      <div className="flex-between digitalization-header">
        <Typography.Title level={3}>Power Histograms</Typography.Title>
        <Select
          defaultValue={"week"}
          onChange={(value) => {
            setFilter(value);
            setHistogram([]);
            createLog({
              page: "digitalization",
              section: "power histogram",
              filter: value,
              description: "get power histograms for the time period " + value,
            });
            // getHistogramByFIlter(value, node.code, node.name, ind);
          }}
          style={{ width: 200 }}
        >
          <Select.Option value="week">Last Week</Select.Option>
          <Select.Option value="month">Last Month</Select.Option>
          <Select.Option value="year">Last Year</Select.Option>
        </Select>
      </div>
      <Divider />

      <Row gutter={[40, 20]} align="bottom">
        {histogram?.length === 0 ? (
          <div className="loading">
            <Loader />
          </div>
        ) : (
          histogram?.map((node, ind) => (
            <>
              <Col xs={24} md={12}>
                <div className="histogram">
                  <div>
                    <Typography.Title level={4}>
                      {node.name} Consumption Clustering
                    </Typography.Title>
                  </div>
                  <div
                    style={{
                      position: "relative",
                    }}
                  >
                    <p
                      style={{
                        writingMode: "vertical-lr",
                        position: "absolute",
                        top: "50%",
                        left: 0,
                        opacity: 0.6,
                        fontSize: "12px",
                        margin: "-50px 0 0 0",
                      }}
                    >
                      Hours
                    </p>
                    <div
                      style={{
                        marginLeft: "30px",
                      }}
                    >
                      <Histogram
                        Data={node.values}
                        color={colors[ind]}
                        code={node.code}
                        setCurrentCode={setCurrentCode}
                        setSecondData={(data) => {
                          setSecondData(data);
                        }}
                        // heatmapPolar={heatmapPolar}
                        // setHeatmapPolar={(data) => {
                        //   setHeatmapPolar(data);
                        // }}
                      />
                    </div>
                  </div>
                  <p
                    style={{
                      textAlign: "center",
                      opacity: 0.6,
                      margin: "10px 0 0 0",
                      fontSize: "12px",
                    }}
                  >
                    Values Range (kW)
                  </p>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div className="histogram">
                  <div>
                    <Typography.Title level={4}>
                      {node.name} Consumption Cluster Timely Distribution
                    </Typography.Title>
                  </div>
                  {/* <div
                      style={{
                        position: "relative",
                      }}
                    >
                      <p
                        style={{
                          writingMode: "vertical-lr",
                          position: "absolute",
                          top: "50%",
                          left: 0,
                          opacity: 0.6,
                          fontSize: "12px",
                          margin: "-50px 0 0 0",
                        }}
                      >
                        Hours
                      </p> */}
                  <div
                    style={{
                      marginLeft: "30px",
                    }}
                  >
                    <HeatmapPolar
                      Data={heatmapPolar ? heatmapPolar[ind] : []}
                      colors={colors}
                    />
                  </div>
                  {/* </div> */}
                  <p
                    style={{
                      textAlign: "center",
                      opacity: 0.6,
                      margin: "10px 0 0 0",
                      fontSize: "12px",
                      visibility: "hidden",
                    }}
                  >
                    .
                  </p>
                </div>
              </Col>
              {secondData?.length > 0 && (
                <>
                  <Col xs={24} md={12}>
                    {currentCode === node.code && (
                      <div className="histogram">
                        <div
                          style={{
                            marginLeft: "30px",
                          }}
                        >
                          <PolarChart
                            Data={secondData ? secondData : []}
                            colors={colors}
                          />
                        </div>
                        <p
                          style={{
                            textAlign: "center",
                            opacity: 0.6,
                            margin: "10px 0 0 0",
                            fontSize: "12px",
                            visibility: "hidden",
                          }}
                        >
                          .
                        </p>
                      </div>
                    )}
                  </Col>
                  <Col xs={0} md={12} />
                </>
              )}
            </>
          ))
        )}
      </Row>
    </Layout>
  );
};

export default LoadPeak;
