import { Liquid } from "@ant-design/plots";

const DemoLiquid = ({ percentage, status, color }) => {
  const config = {
    height: 150,
    width: 150,
    percent: percentage,
    statistic: {
      style: {
        fontSize: 20,
        color: "white",
      },
    },
    color: status === "Completed" ? "#46C782" : color ? color : "#37A1DB",
    outline: {
      border: 2,
      distance: 4,
      style: {
        stroke: status === "Completed" ? "#46C782" : "#D5D7E3",
      },
    },
    wave: {
      length: 128,
    },
  };
  return <Liquid {...config} className="" />;
};

export default DemoLiquid;
