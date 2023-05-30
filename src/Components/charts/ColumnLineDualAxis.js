import { DualAxes } from "@ant-design/plots";
import { useEffect, useState } from "react";

const DemoDualAxes = ({
  leftUnit,
  rightUnit,
  xUnit,
  sliced,
  alias,
  animate,
}) => {
  const data = [
    {
      date: "01",
      value: 50,
      count: 50,
    },
    {
      date: "02",
      value: 22,
      count: 72,
    },
    {
      date: "03",
      value: 57,
      count: 129,
    },
    {
      date: "04",
      value: 139,
      count: 268,
    },
    {
      date: "05",
      value: 61,
      count: 329,
    },
    {
      date: "06",
      value: 63,
      count: 392,
    },
    {
      date: "07",
      value: 107,
      count: 499,
    },
    {
      date: "08",
      value: 41,
      count: 540,
    },
    {
      date: "09",
      value: 85,
      count: 625,
    },
    {
      date: "10",
      value: 146,
      count: 771,
    },
    {
      date: "11",
      value: 36,
      count: 807,
    },

    {
      date: "12",
      value: 79,
      count: 886,
    },
    {
      date: "13",
      value: 110,
      count: 996,
    },
    {
      date: "14",
      value: 42,
      count: 1038,
    },
    {
      date: "15",
      value: 27,
      count: 1065,
    },
    {
      date: "16",
      value: 25,
      count: 1090,
    },
    {
      date: "17",
      value: 35,
      count: 1125,
    },
    {
      date: "18",
      value: 56,
      count: 1181,
    },
    {
      date: "19",
      value: 99,
      count: 1280,
    },
    {
      date: "20",
      value: 94,
      count: 1374,
    },
    {
      date: "21",
      value: 46,
      count: 1420,
    },
    {
      date: "22",
      value: 126,
      count: 1546,
    },
    {
      date: "23",
      value: 70,
      count: 1616,
    },
    {
      date: "24",
      value: 87,
      count: 1703,
    },
    {
      date: "25",
      value: 107,
      count: 1810,
    },
    {
      date: "26",
      value: 32,
      count: 1842,
    },
    {
      date: "27",
      value: 23,
      count: 1865,
    },
    {
      date: "28",
      value: 100,
      count: 1965,
    },
    {
      date: "29",
      value: 50,
      count: 2015,
    },
    {
      date: "30",
      value: 45,
      count: 2060,
    },
    {
      date: "31",
      value: 51,
      count: 2111,
    },
  ];

  const [state, setState] = useState(15000);
  useEffect(() => {
    let interval = setInterval(() => {
      setState(Number(Math.random() * (15000 - 14000) + 14000).toFixed());
    }, 30000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const config = {
    data: sliced
      ? [data.slice(0, sliced), data.slice(0, sliced)]
      : [data, data],
    xField: "date",
    yField: ["count", "value"],
    legend: false,
    meta: {
      value: {
        alias: alias[0],
      },
      count: {
        alias: alias[1],
      },
    },
    xAxis: {
      title: {
        text: xUnit,
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
    },
    yAxis: {
      value: {
        title: {
          text: leftUnit,
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
      },
      count: {
        title: {
          text: rightUnit,
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
      },
    },

    animation: animate
      ? {
          appear: {
            easing: "easeSinInOut",
            duration: state,
          },
        }
      : false,
    geometryOptions: [
      {
        geometry: "column",
        color: "#37A1DB",
      },
      {
        geometry: "line",
        color: "#46C782",
        lineStyle: {
          lineWidth: 3,
        },
      },
    ],
  };
  return <DualAxes {...config} />;
};

export default DemoDualAxes;
