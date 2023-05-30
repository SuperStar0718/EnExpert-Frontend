import { Doughnut } from "react-chartjs-2";
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

const ChartjsDonut = () => {
  // const colors = useSelector((state) => state.userReducer.colors);
  return (
    <Doughnut
      // height={"100%"}
      // width={"100%"}

      data={{
        labels: ["", "", ""],
        datasets: [
          {
            data: [33, 33, 33],
            backgroundColor: ["#37A1DB", "#46C782", "#DBD621", "#E58448"],
            hoverOffset: 0,
          },
        ],
      }}
      options={{
        responsive: true,
        aspectRatio: 1,
        borderRadius: 30,
        cutout: "90%",
        plugins: {
          tooltip: {
            enabled: false,
          },
        },
      }}
    />
  );
};

export default ChartjsDonut;
