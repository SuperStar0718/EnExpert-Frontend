// import { Gauge } from "@ant-design/plots";

// const DemoGauge = () => {
//   const ticks = [0, 1 / 3, 2 / 3, 1];
//   const color = ["#F4664A", "#FAAD14", "#30BF78"];
//   const config = {
//     percent: 0.2,
//     range: {
//       ticks: [0, 100],
//       color: ["l(0) 0:#F4664A 0.5:#FAAD14 1:#30BF78"],
//     },
//     indicator: {
//       pointer: {
//         style: {
//           stroke: "#37A1DB",
//         },
//       },
//       pin: {
//         style: {
//           stroke: "#37A1DB",
//         },
//       },
//     },
//     // statistic: {
//     //   content: {
//     //     offsetY: 36,
//     //     style: {
//     //       fontSize: "24px",
//     //       color: "#4B535E",
//     //     },
//     //   },
//     // },
//   };

//   return <Gauge {...config} width="100%" />;
// };

// export default DemoGauge;

import { Gauge } from "@ant-design/plots";

const DemoGauge = () => {
  const config = {
    percent: 0.32,
    range: {
      color: "l(0) 0:#37A1DB 1:#3D76DD",
    },
    startAngle: Math.PI,
    endAngle: 2 * Math.PI,
    indicator: null,
    statistic: {
      title: {
        offsetY: -36,
        style: {
          fontSize: "1.75rem",
          color: "var(--green)",
          fontWeight: "600",
          margin: "0",
        },
        formatter: () => 0.32 * 100 + "%",
      },
      //   content: {
      //     style: {
      //       fontSize: "24px",
      //       lineHeight: "44px",
      //       color: "#4B535E",
      //     },
      //   },
    },
  };
  return <Gauge {...config} />;
};

export default DemoGauge;
