import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import ChartjsDonut from "./charts/ChartjsDonut";
import { getElectricConsumptionGraph } from "../redux";
import { useSelector } from "react-redux";

const ElectricConsumptionRoundChart = ({ electricConsumption }) => {
  const colors = useSelector((state) => state.userReducer.colors);

  console.log("electricConsumption", electricConsumption);
  // const [electricConsumption, setElectricConsumption] = useState(null);
  // const [Filter, setFilter] = useState({
  //   value: "Last 12 Months",
  //   key: "12m",
  // });
  // const getData = async () => {
  //   const result = await getElectricConsumptionGraph({ filter: Filter.key });
  //   setElectricConsumption(result);
  // };

  // useEffect(() => {
  //   getData();

  //   // setInterval(() => {
  //   //   getData();
  //   // }, 2000);
  // }, [Filter]);

  return (
    <>
      <div
        style={{
          position: "relative",
        }}
      >
        <div
          style={{
            height: "250px",
            width: "250px",
            display: "flex",
            margin: "0 auto",
          }}
        >
          <ChartjsDonut
            Data={
              electricConsumption
                ? electricConsumption
                : {
                    labels: [],
                    data: [],
                  }
            }
          />
        </div>
        {/* <ChartjsDonut /> */}

        <p
          style={{
            position: "absolute",
            top: "40%",
            left: "34%",
            width: "170px",
            // marginLeft: "-45px",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontWeight: "600",
              fontSize: "25px",
            }}
          >
            {electricConsumption?.total?.toLocaleString("de-DE")}
          </span>
          <br />
          <span style={{ color: "var(--secondaryText)" }}>kWh</span>
        </p>
      </div>
      <Row
        gutter={[0, 5]}
        justify="end"
        style={{
          marginTop: "1rem",
          width: "100%",
          display: "flex",
          margin: "1rem auto 0 auto",
        }}
      >
        {
          // [
          //   {
          //     color: "#37A1DB",
          //     name: "Spa",
          //     percent: "52%",
          //   },
          //   {
          //     color: "#46C782",
          //     name: "E-Mobility",
          //     percent: "21%",
          //   },
          //   {
          //     color: "#DBD621",
          //     name: "Restaurant",
          //     percent: "18%",
          //   },
          //   {
          //     color: "#E58448",
          //     name: "Laundry",
          //     percent: "9%",
          //   },
          // ]
          electricConsumption?.labels?.map((label, index) => (
            <Col xs={24} sm={24} md={10}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "80%",
                  // justifyContent: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ width: "auto" }}>
                    <p
                      style={{
                        background: colors?.[index],
                        width: "10px",
                        height: "10px",
                        borderRadius: "2px",
                        marginBottom: 0,
                        marginRight: "10px",
                      }}
                    ></p>
                  </div>
                  &nbsp;
                  <p
                    style={{
                      marginBottom: 0,
                      marginRight: 10,
                      fontSize: 12,
                      width: "65%",
                    }}
                  >
                    {label}
                  </p>
                </div>
                <p
                  style={{
                    marginBottom: 0,
                    fontSize: 12,
                    fontWeight: "bold",
                    width: "20%",
                  }}
                >
                  {(
                    (electricConsumption?.data[index] /
                      electricConsumption?.total) *
                    100
                  ).toFixed()}
                  %
                </p>
              </div>
            </Col>
          ))
        }
      </Row>
    </>
  );
};

export default ElectricConsumptionRoundChart;
