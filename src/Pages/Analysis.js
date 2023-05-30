import Layout from "../Layout/MainLayout";
import MultiAxisLineChart from "../Components/charts/MultiAxisLineChart";
import { Row, Select, Typography, Col, Button, DatePicker } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import AnalysisDrawer from "../Components/AnalysisDrawer";
import Loader from "../Components/Loader";
import { getAnalysisData, createLog } from "../redux";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

const LoadPeak = () => {
  const [Data, setData] = useState(null);

  const [interval, setIntervals] = useState(24);
  const [startDate, setStartDate] = useState(
    moment().subtract(4, "days").format("YYYY-MM-DD")
  );
  const [endDate, setEndDate] = useState(moment().format("YYYY-MM-DD"));
  const [loading, setLoading] = useState(false);

  const analysisData = useSelector((state) => state.analysis.analysis);

  const { electricity, water, heat, gas } = useSelector(
    (state) => state.analysis
  );

  const colors = useSelector((state) => state.userReducer.colors);

  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (analysisData) setAxisData(analysisData);
  }, [electricity]);

  console.log("electricity : ", electricity);

  const setAxisData = async (Data) => {
    let tempData = JSON.parse(JSON.stringify(Data?.axis));

    const index = tempData?.findIndex((data) => {
      return data.title === "Electricity";
    });
    const data = tempData?.find((data) => {
      return data.title === "Electricity";
    });

    let datasets = [];

    electricity.map((elec) => {
      let filtered = data.dataset.filter((obj) => {
        return obj.seriesname === elec;
      });
      datasets.push(...filtered);
    });

    tempData[index].dataset = datasets;
    setData({
      categories: Data?.categories,
      axis: tempData,
    });
  };

  const getData = async () => {
    setLoading(true);

    const analysis = await dispatch(
      getAnalysisData({
        startDate,
        endDate,
        interval,
        aggregation: "mean",
      })
    );
    if (analysis) {
      setAxisData(analysis);
      createLog({
        page: "analysis",
        section: "multi axis chart",
        filter: interval,
        description: "get data by aggregation hours " + interval,
      });
    }
    setLoading(false);
  };

  return (
    <Layout active="Analysis">
      <Typography.Title level={2}>Analysis</Typography.Title>
      <div className="analysis-filters">
        <Row gutter={[30, 30]} justify="space-between" align="middle">
          <Col xs={0} md={0} lg={12} xl={10} xxl={7}>
            {/* <div className="radio-div">
              <p
                onClick={() => {
                  setChannel("electricity");
                }}
                className={channel === "electricity" && "active"}
              >
                Electricity
              </p>
              <p
                onClick={() => {
                  setChannel("water");
                }}
                className={channel === "water" && "active"}
              >
                Water
              </p>
              <p
                onClick={() => {
                  setChannel("gas");
                }}
                className={channel === "gas" && "active"}
              >
                Gas
              </p>
              <p
                onClick={() => {
                  setChannel("heat");
                }}
                className={channel === "heat" && "active"}
              >
                Heat
              </p>
            </div> */}
          </Col>
          <Col xs={24} md={20} lg={16} xl={14} xxl={10}>
            <div className="right-header">
              <DatePicker.RangePicker
                style={{ width: 300 }}
                onChange={(date, dateString) => {
                  setStartDate(dateString[0]);
                  setEndDate(dateString[1]);
                }}
              />
              <Select
                placeholder="Data Intervals..."
                style={{ width: 200 }}
                onChange={(value) => {
                  setIntervals(value);
                }}
              >
                <Select.Option value={3}>3 hours</Select.Option>
                <Select.Option value={6}>6 hours</Select.Option>
                <Select.Option value={24}>1 Day</Select.Option>
              </Select>
              <Button
                type="primary"
                icon={<SearchOutlined />}
                loading={loading}
                onClick={getData}
                shape="circle"
                style={{
                  // borderRadius: "50%",
                  minWidth: "auto",
                  width: "40px",
                  height: "40px",
                }}
              />
              <AnalysisDrawer />
            </div>
          </Col>
        </Row>
      </div>
      <div className="multi-axis-chart">
        {loading ? (
          <div className="loading" style={{ minHeight: "500px" }}>
            <Loader />
          </div>
        ) : (
          Data && <MultiAxisLineChart data={Data} colors={colors?.join(",")} />
        )}
      </div>
    </Layout>
  );
};

export default LoadPeak;
