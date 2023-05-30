import { useState, useEffect } from "react";
import { Column } from "@ant-design/plots";

import { each, groupBy } from "@antv/util";

const ColumnStack = () => {
  const [data, setData] = useState([
    {
      year: "1",
      value: 169,
      type: "Grid",
    },
    {
      year: "2",
      value: 118,
      type: "Grid",
    },
    {
      year: "3",
      value: 107,
      type: "Grid",
    },
    {
      year: "4",
      value: 181,
      type: "Grid",
    },
    {
      year: "5",
      value: 163,
      type: "Grid",
    },
    {
      year: "6",
      value: 134,
      type: "Grid",
    },
    {
      year: "7",
      value: 103,
      type: "Grid",
    },
    {
      year: "8",
      value: 109,
      type: "Grid",
    },
    {
      year: "9",
      value: 58,
      type: "Grid",
    },
    {
      year: "10",
      value: 104,
      type: "Grid",
    },
    {
      year: "11",
      value: 146,
      type: "Grid",
    },
    {
      year: "12",
      value: 59,
      type: "Grid",
    },
    {
      year: "13",
      value: 86,
      type: "Grid",
    },
    {
      year: "14",
      value: 51,
      type: "Grid",
    },
    {
      year: "15",
      value: 190,
      type: "Grid",
    },
    {
      year: "16",
      value: 174,
      type: "Grid",
    },
    {
      year: "17",
      value: 187,
      type: "Grid",
    },
    {
      year: "18",
      value: 108,
      type: "Grid",
    },
    {
      year: "19",
      value: 58,
      type: "Grid",
    },
    {
      year: "20",
      value: 52,
      type: "Grid",
    },
    {
      year: "21",
      value: 198,
      type: "Grid",
    },
    {
      year: "22",
      value: 140,
      type: "Grid",
    },
    {
      year: "23",
      value: 71,
      type: "Grid",
    },
    {
      year: "24",
      value: 160,
      type: "Grid",
    },
    {
      year: "25",
      value: 181,
      type: "Grid",
    },
    {
      year: "26",
      value: 55,
      type: "Grid",
    },
    {
      year: "27",
      value: 166,
      type: "Grid",
    },
    {
      year: "28",
      value: 155,
      type: "Grid",
    },
    {
      year: "29",
      value: 94,
      type: "Grid",
    },
    {
      year: "30",
      value: 145,
      type: "Grid",
    },
    {
      year: "31",
      value: 184,
      type: "Grid",
    },
    {
      year: "1",
      value: 50,
      type: "Renewable",
    },
    {
      year: "2",
      value: 22,
      type: "Renewable",
    },
    {
      year: "3",
      value: 57,
      type: "Renewable",
    },
    {
      year: "4",
      value: 139,
      type: "Renewable",
    },
    {
      year: "5",
      value: 61,
      type: "Renewable",
    },
    {
      year: "6",
      value: 63,
      type: "Renewable",
    },
    {
      year: "7",
      value: 107,
      type: "Renewable",
    },
    {
      year: "8",
      value: 41,
      type: "Renewable",
    },
    {
      year: "9",
      value: 85,
      type: "Renewable",
    },
    {
      year: "10",
      value: 146,
      type: "Renewable",
    },
    {
      year: "11",
      value: 36,
      type: "Renewable",
    },
    {
      year: "12",
      value: 79,
      type: "Renewable",
    },
    {
      year: "13",
      value: 110,
      type: "Renewable",
    },
    {
      year: "14",
      value: 42,
      type: "Renewable",
    },
    {
      year: "15",
      value: 27,
      type: "Renewable",
    },
    {
      year: "16",
      value: 25,
      type: "Renewable",
    },
    {
      year: "17",
      value: 35,
      type: "Renewable",
    },
    {
      year: "18",
      value: 56,
      type: "Renewable",
    },
    {
      year: "19",
      value: 99,
      type: "Renewable",
    },
    {
      year: "20",
      value: 94,
      type: "Renewable",
    },
    {
      year: "21",
      value: 46,
      type: "Renewable",
    },
    {
      year: "22",
      value: 126,
      type: "Renewable",
    },
    {
      year: "23",
      value: 70,
      type: "Renewable",
    },
    {
      year: "24",
      value: 87,
      type: "Renewable",
    },
    {
      year: "25",
      value: 107,
      type: "Renewable",
    },
    {
      year: "26",
      value: 32,
      type: "Renewable",
    },
    {
      year: "27",
      value: 23,
      type: "Renewable",
    },
    {
      year: "28",
      value: 100,
      type: "Renewable",
    },
    {
      year: "29",
      value: 50,
      type: "Renewable",
    },
    {
      year: "30",
      value: 45,
      type: "Renewable",
    },
    {
      year: "31",
      value: 51,
      type: "Renewable",
    },
  ]);

  const annotations = [];
  each(groupBy(data, "year"), (values, k) => {
    const value = values.reduce((a, b) => a + b.value, 0);
    annotations.push({
      type: "text",
      position: [k, value],
      content: `${value}`,
      style: {
        textAlign: "center",
        fontSize: 14,
        fontWeight: "bold",

        fill: "rgba(0,0,0,0.85)",
      },
      offsetY: -10,
    });
  });

  var maximum = Math.max.apply(
    Math,
    data.map((o) => o.value)
  );

  const config = {
    data,
    isStack: true,
    autoFit: true,
    xField: "year",
    yField: "value",
    yAxis: {
      max: maximum * 2,
    },
    legend: false,
    meta: {
      type: {
        alias: "Renewable (kWH)",
      },
      Grid: {
        alias: "Grid (kWH)",
      },
    },
    // legend: {
    //   layout: "horizontal",
    //   position: "bottom",
    // },
    // color: ["#37A1DB", "#eef207"],
    // colorField: "type",
    color: ({ type }) => {
      if (type === "Grid") {
        return "#37A1DB";
      }
      return "#eef207";
    },
    seriesField: "type",
    // annotations,
    // label: {
    //   position: "top",
    //   style: {
    //     fontSize: 14,
    //     fontWeight: "600",
    //   },
    //   // 'top', 'bottom', 'middle'
    //   layout: [
    //     {
    //       type: "interval-adjust-position",
    //     },
    //     {
    //       type: "interval-hide-overlap",
    //     },
    //     {
    //       type: "adjust-color",
    //     },
    //   ],
    // },
  };

  return <Column {...config} animation={false} height={500} />;
};

export default ColumnStack;
