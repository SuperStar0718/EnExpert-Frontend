import { Bar } from "@ant-design/plots";
import { useSelector } from "react-redux";

const BarChart = ({ Data }) => {
  const colors = useSelector((state) => state.userReducer.barColors);
  const config = {
    data: Data,
    // height: 100,
    xField: "value",
    yField: "type",
    // style: {
    //   lineWidth: 2,
    //   lineDash: [4, 5],
    // },
    seriesField: "type",
    legend: false,
    color: colors,
    // legend: {
    //   position: "top-left",
    // },
  };
  return <Bar {...config} />;
};

export default BarChart;
