import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Column } from "@ant-design/plots";
import { FaSleigh } from "react-icons/fa";
import moment from "moment";

const DemoColumn = ({ Data, Alias, label, unit }) => {
  // console.log(
  //   "date",
  //   moment().subtract(1, "hour").format("HH") + "-" + moment().format("HH A")
  // );
  // console.log("date", moment().toISOString());
  const config = {
    data: Data,
    xField: "type",
    yField: "sales",
    // height: 100,
    autoFit: true,
    color: "#37A1DB",

    // meta: {
    //   sales: {
    //     min: 0,
    //     max: 80,
    //   },
    // },
    label: {
      // 可手动配置 label 数据标签位置
      position: "top",
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
        // borderRadius : 10
      },
    },

    tooltip: {
      customContent: (title, data) => {
        return (
          <>
            {/* {displayAnnotation && ( */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: 65,
                width: 180,
                // boxShadow: "rgb(174 174 174) 0px 0px 10px",
                // transition:
                //   "left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s",
                color: "rgb(89, 89, 89)",
                backgroundColor: "white",
                fontFamily: "Poppins",
                borderRadius: "4px",
                padding: "0 20px",
                fontSize: "10px",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "13px",
                  color: "black",

                  // marginBottom: "5px",
                }}
              >
                {
                  data?.[0]?.data?.interval
                  // moment(data?.[0]?.data?.date).tz("Europe/Rome")
                  //   .subtract(1, "hour")
                  //   .format("HH") +
                  //   "-" +
                  //   moment(data?.[0]?.data?.date).tz("Europe/Rome").format("HH A")
                  // data?.[0]?.data?.date
                }
                {/* 10 - 11 AM */}
              </p>
              {/* <p>{title}</p> */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    background: data?.[0]?.color,
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    // opacity: value / totalLength,
                    marginBottom: 0,
                    marginRight: 10,
                  }}
                />
                <p
                  style={{
                    marginBottom: 0,
                    width: "35px",
                    // marginRight: "20px",
                    width: "50%",
                    fontSize: "12px",

                    fontWeight: "400",
                    color: "black",
                  }}
                >
                  {data?.[0]?.value} {unit ? " " + unit : " kWh"}
                </p>
                <p
                  style={{
                    color: "#7E84A3",
                    fontSize: "12px",
                    marginBottom: 0,
                  }}
                >
                  {data?.[0]?.name}
                </p>

                {/* <p style={{ marginBottom: "0" }}>
                  {data?.[0]?.name}: {data?.[0]?.value}
                </p> */}
              </div>
            </div>
            {/* )} */}
          </>
        );
      },
    },

    xAxis: {
      // position: "top",
      // tickLine: null,
      line: null,
      label: label
        ? {
            formatter: (value) => {
              return value % 2 === 0 ? value : "";
            },
          }
        : {
            formatter: (value) => {
              return value;
            },
          },

      grid: {
        line: {
          style: {
            stroke: "black",
            lineWidth: 0.1,
          },
        },
        alignTick: true,
        closed: false,
        nice: false,
      },
    },
    // yAxis: false,

    yAxis: {
      // tickLine: null,
      // line: null,
      // position: "bottom",
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
      label: {
        formatter: (value) => {
          return value;
          // return value + `${unit ? " " + unit : " kWh"}`;
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
    meta: {
      sales: {
        alias: Alias ? Alias : "Production",
      },
    },
    interactions: [
      {
        type: "active-region",
        enable: false,
      },
    ],
    minColumnWidth: 4,
    maxColumnWidth: 4,
    // columnBackground: {
    //   style: {
    //     fill: "l(0) 0:#fff  0.3:#fff 0.4:#E6E9F4 0.5:#000 0.6:#E6E9F4 0.7:#fff 1:#fff",
    //   },
    // },
    columnStyle: {
      fill: "#37A1DB",
      // fill: "r(0, 0.9, 1) 0:#37A1DB 0.9:#37A1DB 1:#fff",
      fillOpacity: 1,
    },
  };
  return <Column {...config} animation={false} />;
};

export default DemoColumn;
