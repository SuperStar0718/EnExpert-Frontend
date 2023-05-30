import { TinyLine, TinyArea, Area } from "@ant-design/plots";

const DemoTinyLine = () => {
  // const data = [
  //   264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513,
  //   546, 983, 340, 539, 243, 226, 192,
  // ];

  const data = [
    {
      time: "1",
      value: 25,
    },
    {
      time: "2",
      value: 31,
    },
    {
      time: "3",
      value: 6,
    },
    {
      time: "4",
      value: 42,
    },
    {
      time: "5",
      value: 45,
    },
    {
      time: "6",
      value: 35,
    },
    {
      time: "7",
      value: 38,
    },
  ];
  // const data = [25, 31, 6, 42, 45, 35, 38];
  const config = {
    height: 60,
    xField: "time",
    yField: "value",
    autoFit: true,
    color: "#37A1DB",
    data,
    meta: {
      value: {
        alias: "Grade",
        min: 0,
        max: 100,
      },
    },

    // {
    //   line: null,
    //   grid: {
    //     line: {
    //       style: {
    //         stroke: "black",
    //         lineWidth: 0.1,
    //       },
    //     },
    //     alignTick: true,
    //     closed: true,
    //   },
    // }
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
    },
    yAxis: {
      tickCount: 3,
      title: {
        text: "%",
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

    smooth: true,
    areaStyle: (value) => {
      return {
        fill: `l(270) 0:rgba(55,161,219,0.1) 0.5:rgba(55,161,219,0.2) 1:rgba(55,161,219,0.7)`,
      };
    },
    //   fill: "#d6e3fd",
    //   fill: "#37A1DB",
    //   fillOpacity: 0.5,
    //   stroke: "#37A1DB",
    // },
  };
  return <Area {...config} />;
};

export default DemoTinyLine;
