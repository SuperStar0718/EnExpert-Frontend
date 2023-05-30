import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Area } from "@ant-design/plots";
import { useSelector } from "react-redux";

const Stacked = ({ Data }) => {
  const colors = useSelector((state) => state.userReducer.colors);

  const [combination, setCombination] = useState([]);
  let channels = [
    "Spa",
    "E-Mobility",
    "Restaurant",
    "Laundry",
    "Rooms",
    "Pool",
  ];

  useEffect(() => {
    let combination = [];
    colors?.map((color, ind) => {
      combination.push({
        place: channels[ind],
        color,
      });
    });
    setCombination(combination);
  }, [colors]);

  const [data, setData] = useState([
    // { place: "Spa",color:"#F4664A" , date: "Sep", value: 0 },
    { place: "Spa", date: "Sep", value: 25 },
    { place: "Spa", date: "Oct", value: 30 },
    { place: "Spa", date: "Nov", value: 15 },
    { place: "Spa", date: "Dec", value: 20 },
    { place: "Spa", date: "Jan", value: 25 },
    { place: "Spa", date: "Feb", value: 15 },
    { place: "Spa", date: "Mar", value: 20 },
    { place: "Spa", date: "Apr", value: 25 },
    { place: "Spa", date: "May", value: 15 },
    { place: "Spa", date: "Jun", value: 25 },
    { place: "Spa", date: "Jul", value: 15 },
    { place: "Spa", date: "Aug", value: 20 },
    { place: "E-Mobility", date: "Sep", value: 25 },
    { place: "E-Mobility", date: "Oct", value: 35 },
    { place: "E-Mobility", date: "Nov", value: 15 },
    { place: "E-Mobility", date: "Dec", value: 20 },
    { place: "E-Mobility", date: "Jan", value: 25 },
    { place: "E-Mobility", date: "Feb", value: 15 },
    { place: "E-Mobility", date: "Mar", value: 20 },
    { place: "E-Mobility", date: "Apr", value: 25 },
    { place: "E-Mobility", date: "May", value: 15 },
    { place: "E-Mobility", date: "Jun", value: 25 },
    { place: "E-Mobility", date: "Jul", value: 15 },
    { place: "E-Mobility", date: "Aug", value: 20 },
    { place: "Restaurant", date: "Sep", value: 25 },
    { place: "Restaurant", date: "Oct", value: 30 },
    { place: "Restaurant", date: "Nov", value: 15 },
    { place: "Restaurant", date: "Dec", value: 20 },
    { place: "Restaurant", date: "Jan", value: 25 },
    { place: "Restaurant", date: "Feb", value: 15 },
    { place: "Restaurant", date: "Mar", value: 20 },
    { place: "Restaurant", date: "Apr", value: 25 },
    { place: "Restaurant", date: "May", value: 15 },
    { place: "Restaurant", date: "Jun", value: 25 },
    { place: "Restaurant", date: "Jul", value: 15 },
    { place: "Restaurant", date: "Aug", value: 20 },
    { place: "Laundry", date: "Sep", value: 25 },
    { place: "Laundry", date: "Oct", value: 15 },
    { place: "Laundry", date: "Nov", value: 15 },
    { place: "Laundry", date: "Dec", value: 20 },
    { place: "Laundry", date: "Jan", value: 25 },
    { place: "Laundry", date: "Feb", value: 15 },
    { place: "Laundry", date: "Mar", value: 20 },
    { place: "Laundry", date: "Apr", value: 25 },
    { place: "Laundry", date: "May", value: 15 },
    { place: "Laundry", date: "Jun", value: 25 },
    { place: "Laundry", date: "Jul", value: 15 },
    { place: "Laundry", date: "Aug", value: 20 },
  ]);

  //   useEffect(() => {
  //     asyncFetch();
  //   }, []);

  //   const asyncFetch = () => {
  //     fetch(
  //       "https://gw.alipayobjects.com/os/bmw-prod/b21e7336-0b3e-486c-9070-612ede49284e.json"
  //     )
  //       .then((response) => response.json())
  //       .then((json) => setData(json))
  //       .catch((error) => {
  //         console.log("fetch data failed", error);
  //       });
  //   };

  const hexToRgb = (hex) =>
    hex
      .replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (m, r, g, b) => "#" + r + r + g + g + b + b
      )
      .substring(1)
      .match(/.{2}/g)
      .map((x) => parseInt(x, 16));

  // const combination = {
  //   Spa: "#37A1DB",
  //   "E-Mobility": "#46C782",
  //   Restaurant: "#DBD621",
  //   Laundry: "#E58448",
  // };

  const config = {
    data: Data,
    height: 340,
    autoFit: true,
    xField: "date",
    yField: "value",
    seriesField: "place",
    color: colors,
    legend: false,
    tooltip: {
      customContent: (title, data) => {
        return (
          <div
            style={{
              padding: "10px",
              minWidth: "160px",
              minHeight: "auto",
            }}
          >
            <h4
              style={{
                fontWeight: "900",
                fontSize: "13px",
                marginBottom: "15px",
              }}
            >
              {title}
            </h4>
            {data?.map((obj) => (
              <div
                style={{
                  display: "flex",
                  // justifyContent: "space-between",
                  alignItems: "center",
                  height: "17px",
                  margin: "3px 0",
                }}
              >
                <p
                  style={{
                    background: obj.color,
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    marginBottom: 0,
                    marginRight: 10,
                  }}
                ></p>
                <p
                  style={{
                    marginBottom: 0,
                    minWidth: "60px",
                    marginRight: "40px",
                    fontWeight: "400",
                    color: "black",
                  }}
                >
                  {obj.value}
                </p>
                <p
                  style={{
                    color: "#7E84A3",
                    fontSize: "12px",
                    marginBottom: 0,
                  }}
                >
                  {obj.name}
                </p>
              </div>
            ))}
            <div
              style={{
                display: "flex",
                // justifyContent: "space-between",
                alignItems: "center",
                height: "17px",
                marginTop: "10px",
              }}
            >
              <p
                style={{
                  background: "white",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  marginBottom: 0,
                  marginRight: 10,
                }}
              ></p>
              <p
                style={{
                  fontWeight: "900",
                  fontSize: "13px",
                  marginBottom: "0",
                  marginRight: "40px",

                  width: "60px",

                  // marginRight: "20px",
                  color: "black",
                }}
              >
                {/* 4500 */}
                {data.reduce(function (previousValue, currentValue) {
                  return previousValue + Number(currentValue.value);
                }, 0)}
              </p>
              <p
                style={{
                  color: "#7E84A3",
                  fontSize: "13px",
                  fontWeight: "bold",
                  marginBottom: 0,
                }}
              >
                Total
              </p>
            </div>
          </div>
        );
      },
    },
    areaStyle: (value) => {
      let place = combination.find((obj) => {
        return obj.place === value.place;
      });
      if (place) {
        let color = hexToRgb(place?.color);
        return {
          fill: `l(270) 0:rgba(${color[0]},${color[1]},${color[2]},0.1) 0.5:rgba(${color[0]},${color[1]},${color[2]},0.2) 1:rgba(${color[0]},${color[1]},${color[2]},0.7)`,
        };
      }
    },
    isStack: true,
    // meta: {
    //   value: {
    //     min: 0,
    //     max: 200,
    //   },
    // },
    columnBackground: {
      style: {
        fill: "rgba(0,0,0,0.1)",
      },
    },
    xAxis: {
      line: null,
      grid: {
        line: {
          style: {
            stroke: "black",
            lineWidth: 0.1,
          },
        },
        alignTick: true,
        closed: true,
      },
    },
    yAxis: {
      title: {
        text: "kWh",
        style: {
          stroke: "#7E84A3",
          fontSize: 14,
          letterSpacing: "1px",
          fontWeight: 400,
          opacity: 0.7,
          shadowBlur: 0,
          strokeOpacity: 0,
        },
      },
      grid: {
        line: {
          style: {
            stroke: "black",
            lineWidth: 0,
          },
        },
        alignTick: true,
        closed: true,
      },
    },
  };

  return <Area {...config} animation={false} x />;
};

export default Stacked;
