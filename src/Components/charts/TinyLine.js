import { Line } from "@ant-design/plots";
import { useEffect, useState } from "react";

const DemoTinyLine = ({ Data }) => {
  const data = [
    {
      minutes: "1",
      value: 236,
    },
    {
      minutes: "2",
      value: 267,
    },
    {
      minutes: "3",
      value: 282,
    },
    {
      minutes: "4",
      value: 163,
    },
    {
      minutes: "5",
      value: 191,
    },
    {
      minutes: "6",
      value: 173,
    },
    {
      minutes: "7",
      value: 249,
    },
    {
      minutes: "8",
      value: 180,
    },
    {
      minutes: "9",
      value: 263,
    },
    {
      minutes: "10",
      value: 166,
    },
    {
      minutes: "11",
      value: 187,
    },
    {
      minutes: "12",
      value: 237,
    },
    {
      minutes: "13",
      value: 286,
    },
    {
      minutes: "14",
      value: 183,
    },
    {
      minutes: "15",
      value: 209,
    },
    {
      minutes: "16",
      value: 154,
    },
    {
      minutes: "17",
      value: 279,
    },
    {
      minutes: "18",
      value: 173,
    },
    {
      minutes: "19",
      value: 284,
    },
    {
      minutes: "20",
      value: 233,
    },
    {
      minutes: "21",
      value: 175,
    },
    {
      minutes: "22",
      value: 226,
    },
    {
      minutes: "23",
      value: 238,
    },
    {
      minutes: "24",
      value: 236,
    },
    {
      minutes: "25",
      value: 155,
    },
    {
      minutes: "26",
      value: 200,
    },
    {
      minutes: "27",
      value: 250,
    },
    {
      minutes: "28",
      value: 272,
    },
    {
      minutes: "29",
      value: 163,
    },
    {
      minutes: "30",
      value: 242,
    },
    {
      minutes: "31",
      value: 223,
    },
    {
      minutes: "32",
      value: 194,
    },
    {
      minutes: "33",
      value: 282,
    },
    {
      minutes: "34",
      value: 185,
    },
    {
      minutes: "35",
      value: 260,
    },
    {
      minutes: "36",
      value: 249,
    },
    {
      minutes: "37",
      value: 201,
    },
    {
      minutes: "38",
      value: 293,
    },
    {
      minutes: "39",
      value: 290,
    },
    {
      minutes: "40",
      value: 247,
    },
    {
      minutes: "41",
      value: 226,
    },
    {
      minutes: "42",
      value: 154,
    },
    {
      minutes: "43",
      value: 196,
    },
    {
      minutes: "44",
      value: 233,
    },
    {
      minutes: "45",
      value: 235,
    },
    {
      minutes: "46",
      value: 188,
    },
    {
      minutes: "47",
      value: 285,
    },
    {
      minutes: "48",
      value: 277,
    },
    {
      minutes: "49",
      value: 285,
    },
    {
      minutes: "50",
      value: 214,
    },
    {
      minutes: "51",
      value: 166,
    },
    {
      minutes: "52",
      value: 196,
    },
    {
      minutes: "53",
      value: 154,
    },
    {
      minutes: "54",
      value: 178,
    },
    {
      minutes: "55",
      value: 269,
    },
    {
      minutes: "56",
      value: 266,
    },
    {
      minutes: "57",
      value: 263,
    },
    {
      minutes: "58",
      value: 286,
    },
    {
      minutes: "59",
      value: 212,
    },
    {
      minutes: "60",
      value: 193,
    },
  ];

  console.log("thermal ", Data);

  const [state, setState] = useState(2000);
  useEffect(() => {
    let interval = setInterval(() => {
      setState(Number(Math.random() * (4000 - 3000) + 3000).toFixed());
    }, 8000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const config = {
    data: Data,
    xField: "minutes",
    yField: "value",
    // seriesField: 'name',
    yAxis: {
      title: {
        text: "kW",
        style: {
          stroke: "#7E84A3",
          fontSize: 14,
          letterSpacing: "1px",
          fontWeight: 300,
          opacity: 0.7,
          shadowBlur: 0,
          strokeOpacity: 0,
        },
      },
      // label: {
      //   formatter: (v) => `${(v / 10e8).toFixed(1)} B`,
      // },
    },
    xAxis: {
      title: {
        text: "last 60 minutes",
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
    legend: false,
    smooth: true,
    // @TODO 后续会换一种动画方式
    animation: {
      appear: {
        animation: "path-in",
        duration: state,
      },
    },
  };
  return <Line {...config} />;
};

export default DemoTinyLine;
