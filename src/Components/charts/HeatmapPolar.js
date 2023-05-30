import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Heatmap } from "@ant-design/plots";

const DemoHeatmap = ({ Data, colors }) => {
  const [data, setData] = useState([]);

  const setDataCount = () => {
    let filtered = [];
    let temp = [];
    Data?.map((data) => {
      let index = temp.indexOf(data.time + data.series);
      if (index === -1) {
        temp.push(data.time + data.series);
        filtered.push({
          time: data.time,
          series: data.series,
          value: data.value === 0 ? 0 : 1,
        });
      } else {
        filtered[index].value += data.value === 0 ? 0 : 1;
      }
    });
    return filtered;
  };

  const config = {
    // data,
    data: setDataCount(),
    xField: "time",
    // yField: "week",
    yField: "series",
    colorField: "value",
    legend: false,
    // color: colors.join("-"),
    color: "#BAE7FF-#1890FF-#1028ff",
    coordinate: {
      // 坐标轴属性配置
      type: "polar",
      // 极坐标
      cfg: {
        innerRadius: 0.2,
      },
    },
    heatmapStyle: {
      stroke: "#f5f5f5",
      opacity: 0.8,
    },
    meta: {
      value: {
        alias: "count",
      },
      //   time: {
      //     type: "cat",
      //   },
      //   value: {
      //     min: 0,
      //     max: 1,
      //   },
    },
    xAxis: {
      line: null,
      grid: null,
      tickLine: null,
      label: {
        offset: 12,
        style: {
          fill: "#666",
          fontSize: 12,
          textBaseline: "top",
        },
      },
    },
    yAxis: {
      top: true,
      line: null,
      grid: null,
      tickLine: null,
      label: {
        offset: 0,
        style: {
          fill: "#131523",
          textAlign: "center",
          shadowBlur: 6,
          fontSize: 10,
          shadowColor: "rgba(0, 0, 0, .25)",
        },
      },
    },
    // tooltip: {
    //   showMarkers: false,
    // },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };

  return <Heatmap {...config} />;
};

export default DemoHeatmap;
