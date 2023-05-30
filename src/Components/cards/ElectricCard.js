import React, { useEffect, useState, useRef } from "react";
import { Typography, Progress } from "antd";
import { useSelector } from "react-redux";
import { BsArrowDown, BsArrowUp } from "react-icons/all";
import { getElectricConsumption } from "../../redux";

const ElectricCard = ({ setElectricHeight }) => {
  const electricRef = useRef(null);

  const [electricConsumption, setElectricConsumption] = useState(null);

  const colors = useSelector((state) => state.userReducer.colors);

  // console.log("colors", colors);
  const getData = async () => {
    const result = await getElectricConsumption();
    setElectricConsumption(result);
  };

  useEffect(() => {
    setElectricHeight(electricRef?.current?.offsetHeight);
    setTimeout(() => {
      setElectricHeight(electricRef?.current?.offsetHeight);
    }, 1000);
  }, [electricRef?.current?.offsetHeight]);

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    const timeoutID = setInterval(() => {
      getData();
    }, 2000);

    return () => {
      clearInterval(timeoutID);
    };
  }, []);

  return (
    <div className="electric-consumption-outer" ref={electricRef}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // marginBottom: ".5rem",
        }}
      >
        <Typography.Title
          className="title"
          level={5}
          style={{ fontWeight: "600" }}
        >
          Live Electric Consumption
        </Typography.Title>
      </div>
      <div className="electric-consumption">
        <div className="electric-consumption-left">
          <Typography.Title className="sub-title" level={4}>
            {electricConsumption?.TotalConsumption
              ? Number(
                  electricConsumption?.TotalConsumption?.toFixed(2)
                ).toLocaleString("de-DE")
              : "0"}{" "}
            kW
          </Typography.Title>
          <div className="percentage-wrapper">
            <span className="percentage" style={{ color: "var(--green)" }}>
              {" "}
              {electricConsumption?.Last_Hour_Comparison
                ? electricConsumption?.Last_Hour_Comparison > 0
                  ? electricConsumption?.Last_Hour_Comparison?.toLocaleString(
                      "de-DE"
                    )
                  : String(
                      electricConsumption?.Last_Hour_Comparison?.toLocaleString(
                        "de-DE"
                      )
                    )?.substr(1)
                : "0"}
              %&nbsp;
              {electricConsumption?.Last_Hour_Comparison > 0 ? (
                <BsArrowUp style={{ strokeWidth: 2 }} />
              ) : (
                <BsArrowDown style={{ strokeWidth: 2 }} />
              )}
            </span>
            &nbsp;
            <span className="text">than last hour</span>
          </div>
        </div>
        <div className="electric-consumption-right">
          <div className="percentage-wrapper-left">
            {electricConsumption?.dataChannels?.map((data) => (
              <p>{data.name}</p>
            ))}
          </div>
          {/* <div className="percentage-wrapper-middle"></div> */}
          <div className="percentage-wrapper-right">
            {electricConsumption?.dataChannels?.map((data, index) => (
              <Progress
                strokeLinecap="square"
                strokeColor={colors?.[index]}
                percent={data?.percentage?.toFixed()}
                strokeWidth={6}
              />
            ))}
            {/* <Progress
              percent={electricConsumption?.Emobility_percentage?.toFixed()}
              strokeLinecap="square"
              strokeWidth={6}
            />
            <Progress
              percent={electricConsumption?.Restaurant_percentage?.toFixed()}
              strokeLinecap="square"
              strokeWidth={6}
            />
            <Progress
              percent={electricConsumption?.Laundry_percentage?.toFixed()}
              strokeLinecap="square"
              strokeWidth={6}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricCard;
