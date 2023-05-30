import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Column } from "@ant-design/plots";

import { each, groupBy } from "@antv/util";

const DemoColumn = ({ Data, colors }) => {
  const [data, setData] = useState([
    {
      type: "Heating",
      sales: 75,
    },
    {
      type: "Warm Water",
      sales: 58,
    },
  ]);

  // console.log("colors", colors);
  const annotations = [];
  each(groupBy(Data?.result ? Data?.result : [], "type"), (values, k) => {
    const value = values.reduce((a, b) => a + b.sales, 0);
    annotations.push({
      type: "text",
      position: [k, value],
      content: `${value} kW`,
      style: {
        textAlign: "center",
        fontSize: 14,
        fontWeight: "bold",
        fill: "#131523",
      },
      offsetY: -10,
    });
  });
  const config = {
    data: Data?.result ? Data?.result : [],
    xField: "type",
    color: colors ? colors : "#E58448",
    yField: "sales",
    label: false,
    autoFit: true,
    annotations,
    meta: {
      sales: {
        alias: "Consumption",
      },
    },
    xAxis: {
      grid: {
        line: {
          style: {
            stroke: "black",
            lineWidth: 0,
          },
        },
        alignTick: true,
        closed: false,
      },
    },
    yAxis: {
      max: Data?.maximum,
      title: {
        text: "kW",
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
      line: null,
      label: {
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
        closed: true,
      },
    },
  };

  return <Column {...config} animation={false} />;
};

export default DemoColumn;
