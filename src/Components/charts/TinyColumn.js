import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { TinyColumn, Column } from "@ant-design/plots";

const DemoTinyColumn = ({ Data, alias, tooltip, unit }) => {
  // const data = [
  //   {
  //     title: "12",
  //     value: 324,
  //   },
  //   {
  //     title: "13",
  //     value: 345,
  //   },
  //   {
  //     title: "14",
  //     value: 235,
  //   },
  //   {
  //     title: "15",
  //     value: 497,
  //   },
  //   {
  //     title: "16",
  //     value: 274,
  //   },
  //   {
  //     title: "17",
  //     value: 337,
  //   },
  //   {
  //     title: "18",
  //     value: 81,
  //   },
  //   {
  //     title: "19",
  //     value: 497,
  //   },
  //   {
  //     title: "20",
  //     value: 324,
  //   },
  //   {
  //     title: "21",
  //     value: 219,
  //   },
  //   {
  //     title: "22",
  //     value: 269,
  //   },
  //   {
  //     title: "23",
  //     value: 274,
  //   },
  //   {
  //     title: "24",
  //     value: 337,
  //   },
  //   {
  //     title: "25",
  //     value: 81,
  //   },
  //   {
  //     title: "26",
  //     value: 497,
  //   },
  //   {
  //     title: "27",
  //     value: 324,
  //   },
  //   {
  //     title: "28",
  //     value: 219,
  //   },
  //   {
  //     title: "29",
  //     value: 81,
  //   },
  //   {
  //     title: "30",
  //     value: 269,
  //   },
  //   {
  //     title: "31",
  //     value: 274,
  //   },
  // ];

  const data = [
    {
      title: "12",
      value: 9.2,
    },
    {
      title: "13",
      value: 11.8,
    },
    {
      title: "14",
      value: 6.4,
    },
    {
      title: "15",
      value: 4.8,
    },
    {
      title: "16",
      value: 7.5,
    },
    {
      title: "17",
      value: 5.7,
    },
    {
      title: "18",
      value: 8.3,
    },
  ];

  // const data = [
  //   274, 337, 81, 497, 324, 219, 269, 274, 337, 81, 497, 324, 219, 269, 274,
  //   337, 81, 497, 324, 219, 269, 274, 337, 81, 497, 324, 219, 269, 274, 337, 81,
  //   497, 324, 219, 269,
  // ];
  const config = {
    height: "100%",
    xField: "title",
    yField: "value",
    width: 100,
    autoFit: true,
    xAxis: false,
    yAxis: false,
    data: Data ? Data : data,
    color: "#37A1DB",
    meta: {
      value: {
        alias: alias ? alias : "Value",
      },
    },
    tooltip: tooltip,
    xAxis: {
      title: {
        text: "last week",
        style: {
          stroke: "#7E84A3",
          fontSize: 12,
          letterSpacing: "1px",
          fontWeight: 300,
          opacity: 0.7,
          shadowBlur: 0,
          strokeOpacity: 0,
        },
      },
      // position: "top",
      // tickLine: null,
      line: null,
      label: null,

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
      title: {
        text: unit ? unit : "tons",
        style: {
          stroke: "#7E84A3",
          fontSize: 12,
          letterSpacing: "1px",
          fontWeight: 300,
          opacity: 0.7,
          shadowBlur: 0,
          strokeOpacity: 0,
        },
      },
      // tickLine: null,
      // line: null,
      // position: "bottom",
      // label: null,
      // label: {
      //   formatter: (value) => {
      //     return value;
      //   },
      // },
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
    // tooltip: {
    //   customContent: function (x, data) {
    //     return `NO.${data[0]?.title}: ${Number(data[0]?.value).toFixed(2)}`;
    //   },
    // },
  };
  return <Column {...config} animation={false} />;
};

export default DemoTinyColumn;
