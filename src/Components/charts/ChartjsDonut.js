import { Doughnut, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from "chart.js";
import { useSelector } from "react-redux";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  ArcElement,
  Tooltip
);

// const data = {
//   labels: ["Red", "Blue", "Yellow"],
//   datasets: [
//     {
//       label: "My First Dataset",
//       data: [300, 50, 100],
//       backgroundColor: [
//         "rgb(255, 99, 132)",
//         "rgb(54, 162, 235)",
//         "rgb(255, 205, 86)",
//       ],
//       hoverOffset: 4,
//     },
//   ],
// };

// const config = {
//   type: "doughnut",
//   data: data,
//   options: {
//     borderRadius: 20,
//     cutout: "90%",
//   },
// };

const ChartjsDonut = ({ Data }) => {
  const colors = useSelector((state) => state.userReducer.colors);
  return (
    <Doughnut
      // height={"100%"}
      // width={"100%"}

      data={{
        labels: Data ? Data?.labels : [],
        datasets: [
          {
            data: Data ? Data?.data : [],
            backgroundColor: colors
              ? colors
              : ["#37A1DB", "#46C782", "#DBD621", "#E58448"],
            hoverOffset: 0,
          },
        ],
      }}
      options={{
        responsive: true,
        aspectRatio: 1,
        borderRadius: 30,
        cutout: "85%",
        plugins: {
          tooltip: {
            enabled: false,

            external: function (context) {
              let tooltipEl = document.getElementById("chartjs-tooltip");

              if (!tooltipEl) {
                tooltipEl = document.createElement("div");
                tooltipEl.id = "chartjs-tooltip";
                tooltipEl.innerHTML = "<table></table>";
                document.body?.appendChild(tooltipEl);
              }

              // Hide if no tooltip
              const tooltipModel = context.tooltip;
              if (tooltipModel.opacity === 0) {
                tooltipEl.style.opacity = 0;
                return;
              }

              // Set caret Position
              tooltipEl.classList.remove("above", "below", "no-transform");
              if (tooltipModel.yAlign) {
                tooltipEl.classList.add(tooltipModel.yAlign);
              } else {
                tooltipEl.classList.add("no-transform");
              }

              function getBody(bodyItem) {
                return bodyItem.lines;
              }

              if (tooltipModel.body) {
                const bodyLines = context.tooltip.dataPoints;

                let innerHtml =
                  "<div style='display:flex;justify-content:space-between;align-items:center;width:120px'>";

                var total = context.tooltip.dataPoints[0].dataset.data.reduce(
                  function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                  }
                );
                var currentValue =
                  context.tooltip.dataPoints[0].dataset.data[
                    context.tooltip.dataPoints[0].dataIndex
                  ];
                var precentage = Math.floor((currentValue / total) * 100 + 0.5);

                bodyLines.forEach(function (body, i) {
                  innerHtml += `<p style='background:${context.tooltip.labelColors[0].backgroundColor};width:8px;height:8px;border-radius:50%;margin-bottom:0;margin-right:10px'></p>`;
                  innerHtml +=
                    "<p style='width:30%;font-size:12px;margin-bottom:0;font-weight:400;color:black;'>" +
                    precentage +
                    "%" +
                    "</p>";
                  innerHtml +=
                    "<p style='color:#7E84A3;opacity:0.8;width:60%;font-size:12px;margin-bottom:0;'>" +
                    body.label +
                    "</p>";
                });
                innerHtml += "</div>";

                let tableRoot = tooltipEl.querySelector("table");
                tableRoot.innerHTML = innerHtml;
              }

              const position = context.chart.canvas.getBoundingClientRect();
              tooltipEl.style.opacity = 1;
              tooltipEl.style.position = "absolute";
              tooltipEl.style.left =
                position.left + window.pageXOffset + tooltipModel.caretX + "px";
              tooltipEl.style.top =
                position.top + window.pageYOffset + tooltipModel.caretY + "px";
              // tooltipEl.style.font = bodyFont.string;
              tooltipEl.style.padding = "10px";
              // tooltipModel.padding + "px " + tooltipModel.padding + "px";
              tooltipEl.style.pointerEvents = "none";
              tooltipEl.style.background = "white";
              tooltipEl.style.boxShadow = "rgb(174 174 174) 0px 0px 10px";
              tooltipEl.style.color = "black";
              tooltipEl.style.fontFamily = "Poppins";
            },
            // callbacks: {
            //   label: function (context) {
            //     var dataset = context.dataset[context.datasetIndex];
            //     var total = context.dataset.data.reduce(function (
            //       previousValue,
            //       currentValue,
            //       currentIndex,
            //       array
            //     ) {
            //       return previousValue + currentValue;
            //     });
            //     var currentValue = context.dataset.data[context.dataIndex];
            //     var precentage = Math.floor((currentValue / total) * 100 + 0.5);
            //     return precentage + "%";
            //   },
            // },
          },
        },
      }}
    />
  );
};

export default ChartjsDonut;
