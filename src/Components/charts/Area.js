import { useState, useEffect } from "react";
import { Area } from "@ant-design/charts";

const DemoArea = ({ monthlyUsers = [] }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(monthlyUsers);
  }, [monthlyUsers]);

  const config = {
    data,
    xField: "date",
    yField: "count",
    height: 200,
    autoFit: true,
    xAxis: {
      range: [0, 1],
      tickCount: data.length,
    },
    areaStyle: () => {
      return {
        fill: "l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff",
      };
    },
  };

  return <Area {...config} />;
};

export default DemoArea;
