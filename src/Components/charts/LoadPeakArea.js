import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Line } from "@ant-design/plots";

const LoadPeakArea = ({ Data }) => {
  const config = {
    data: Data,
    padding: "auto",
    xField: "Date",
    smooth: true,
    yField: "scales",
    color: "#37A1DB", //above threshold

    xAxis: {
      line: null,
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
    yAxis: {
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
      scales: {
        alias: "Load (kW)",
      },
    },
    annotations: [
      {
        type: "regionFilter",
        start: ["min", "median"],
        end: ["max", "0"],
        color: "#37A1DB", //below threshold
        //
      },

      {
        type: "text",
        position: ["min", "median"],
        content: "max load peak",
        offsetY: -4,
        style: {
          textBaseline: "bottom",
          fontSize: 12, //size of threshold text
        },
      },

      // {
      //   type: "text",
      //   position: ["min", "max"],
      //   content: "max load peak",
      //   offsetY: -4,
      //   style: {
      //     textBaseline: "bottom",
      //     fontSize: 12, //size of threshold text
      //   },
      // },

      {
        type: "line",
        start: ["min", "median"],
        end: ["max", "median"],
        style: {
          stroke: "#ff0000",
          lineDash: 0,
          lineWidth: 2,
        },
      },
      // {
      //   type: "line",
      //   start: ["min", "max"],
      //   end: ["max", "max"],
      //   style: {
      //     stroke: "#111221",
      //     lineDash: 0,
      //     lineWidth: 2,
      //   },
      // },
    ],
  };

  return <Line {...config} />;
};

export default LoadPeakArea;
