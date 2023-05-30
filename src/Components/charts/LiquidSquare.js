import { Liquid } from "@ant-design/plots";

const DemoLiquid = ({ percentage, color }) => {
  const config = {
    // height: "100%",
    // width: "100%",
    // autoFit: true,
    shape: "rect",
    percent: percentage,
    color: color ? color : "#37A1DB",
    outline: {
      border: 0,
      distance: 4,
    },
    wave: {
      length: 128,
    },
    indicator: null,
    statistic: {
      title: {
        offsetY: -36,
        style: {
          fontSize: "1.6rem",
          // color: "#4B535E",
        },
        formatter: () => (percentage * 100).toFixed(3) + " l",
      },
    },
  };
  return <Liquid {...config} width={600} />;
};

export default DemoLiquid;
