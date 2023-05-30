import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { Row, Col, Typography, Progress, Dropdown, Menu, Space } from "antd";
import { BsArrowDown, BsArrowUp, BsArrowRight } from "react-icons/all";
import { DownOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { getEnergyCost, getClient, createLog } from "../../redux";

const EnergyCostCard = ({ header, height, unit, noWater }) => {
  const [Filter, setFilter] = useState({
    value: "Today",
    key: "today",
  });

  let dummyCost = 43567224;
  const dispatch = useDispatch();
  const [energyCost, setEnergyCost] = useState(null);
  const [Data, setData] = useState(null);

  const getData = async () => {
    const result = await getEnergyCost({ filter: Filter.key });
    let temp = JSON.parse(JSON.stringify(result));
    temp.channels = temp.channels?.filter((obj) => {
      return obj.type !== "water";
    });
    if (noWater) {
      setEnergyCost(temp);
    } else {
      setEnergyCost(result);
    }
  };

  const getClientData = async () => {
    const data = await dispatch(getClient());
    setData(data);
  };

  useEffect(async () => {
    await getClientData();
  }, []);

  useEffect(() => {
    getData();
    // setInterval(() => {
    //   getData();
    // }, 2000);
  }, [Filter]);

  // useEffect(() => {
  //   const timeoutID = setInterval(() => {
  //     getData();
  //   }, 5000);

  //   return () => {
  //     clearInterval(timeoutID);
  //   };
  // }, []);

  //   priceElectricDelivery: "20"
  // priceGasDelivery: "23.88"
  // priceHeatDelivery: "14"
  // priceWaterDelivery: "15.2"

  console.log("energyCost", energyCost);

  return (
    <div className="electric-cost-outer">
      {header ? (
        header
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // marginBottom: ".5rem",
          }}
        >
          <Typography.Title className="title" level={5}>
            Total Energy Cost
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
                    section: "total energy cost",
                    filter: e.key,
                    description: "Change filter to " + e.key,
                  });
                }}
              >
                <Menu.Item key={"today"} value="Today">
                  Today
                </Menu.Item>
                <Menu.Item key={"week"} value="This Week">
                  This Week
                </Menu.Item>
                <Menu.Item key={"month"} value="This Month">
                  This Month
                </Menu.Item>
                <Menu.Item key={"year"} value="This Year">
                  This Year
                </Menu.Item>
              </Menu>
            }
            trigger={["click"]}
          >
            <div onClick={(e) => e.preventDefault()}>
              <Space className="electric-cost-outer-dropdown">
                {Filter.value}
                <DownOutlined />
              </Space>
            </div>
          </Dropdown>
        </div>
      )}
      <div className="electric-cost">
        <div className="electric-cost-left">
          <Typography.Title className="sub-title" level={4}>
            {energyCost?.totalCost
              ? Number(energyCost?.totalCost)?.toLocaleString("de-DE")
              : "0"}{" "}
            {/* {Number(dummyCost).toLocaleString("de-DE")}  */}
            {unit ? unit : "€"}
          </Typography.Title>
          <div className="percentage-wrapper">
            <span className="percentage" style={{ color: "var(--red)" }}>
              {" "}
              {energyCost?.percentage
                ? energyCost?.percentage > 0
                  ? energyCost?.percentage?.toLocaleString("de-DE")
                  : String(energyCost?.percentage)
                      ?.substr(1)
                      ?.toLocaleString("de-DE")
                : "0"}
              %&nbsp;
              <BsArrowUp style={{ strokeWidth: 2 }} />
            </span>
            &nbsp;
            <span className="text">than last day</span>
          </div>
        </div>
        <div className="electric-cost-right">
          {energyCost?.channels?.map((channel) => (
            <div className="item">
              <Progress
                type="circle"
                percent={(
                  (channel?.price / energyCost?.totalCost) *
                  100
                ).toFixed()}
                width="2.1rem"
                trailColor={"#E6E9F4"}
                strokeWidth={10}
                strokeColor={"#37A1DB"}
                style={{ fontSize: ".5rem" }}
              />

              <p className="sub-title">
                {channel?.price?.toLocaleString("de-DE")} €
              </p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--secondaryText)",
                    textTransform: "capitalize",
                  }}
                >
                  {channel?.type === "power" ? "Electricity" : channel?.type}
                </span>
                &nbsp;
                <BsArrowDown
                  style={{ color: "var(--green)", fontSize: ".7rem" }}
                />
              </div>
            </div>
          ))}

          {/* <div className="item">
            <Progress
              type="circle"
              percent={(
                (energyCost?.heating / energyCost?.totalCost) *
                100
              ).toFixed()}
              strokeColor={"#37A1DB"}
              trailColor={"#E6E9F4"}
              width="2.1rem"
              strokeWidth={10}
              style={{ fontSize: ".5rem" }}
            />

            <p className="sub-title">
              {Number(energyCost?.heating)?.toLocaleString("de-DE")} €
            </p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  fontSize: "0.75rem",

                  color: "var(--secondaryText)",
                }}
              >
                Heating
              </span>
              &nbsp;
              <BsArrowUp style={{ color: "var(--red)", fontSize: ".7rem" }} />
            </div>
          </div>
          {!noWater && (
            <div className="item">
              <Progress
                type="circle"
                percent={(
                  (energyCost?.water / energyCost?.totalCost) *
                  100
                ).toFixed()}
                strokeColor={"#37A1DB"}
                width="2.1rem"
                strokeWidth={10}
                trailColor={"#E6E9F4"}
                style={{ fontSize: ".5rem" }}
              />

              <p className="sub-title">
                {Number(energyCost?.water)?.toLocaleString("de-DE")} €
              </p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    fontSize: "0.75rem",

                    color: "var(--secondaryText)",
                  }}
                >
                  Water
                </span>
                &nbsp;
                <BsArrowRight
                  style={{ color: "var(--yellow)", fontSize: ".7rem" }}
                />
              </div>
            </div>
          )}
          <div className="item">
            <Progress
              type="circle"
              percent={(
                (energyCost?.gas / energyCost?.totalCost) *
                100
              ).toFixed()}
              strokeColor={"#37A1DB"}
              width="2.1rem"
              strokeWidth={10}
              trailColor={"#E6E9F4"}
              style={{ fontSize: ".5rem" }}
            />

            <p className="sub-title">
              {Number(energyCost?.gas)?.toLocaleString("de-DE")} €
            </p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "var(--secondaryText)",
                }}
              >
                Gas
              </span>
              &nbsp;
              <BsArrowRight
                style={{ color: "var(--orange)", fontSize: ".7rem" }}
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default EnergyCostCard;
