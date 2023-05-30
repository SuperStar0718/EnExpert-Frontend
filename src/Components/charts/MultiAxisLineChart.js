import ReactFC from "react-fusioncharts";
import PowerCharts from "fusioncharts/fusioncharts.powercharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, PowerCharts, FusionTheme);

const MultiAxisLineChart = ({ data, colors }) => {
  const dataSource = {
    chart: {
      // caption: "IBRD Subscriptions and Voting Powers",
      // subcaption: "For OECD countries",
      showvalues: "1",
      labeldisplay: "AUTO",
      allowSelection: "0",
      rotatelabels: "1",
      plothighlighteffect: "fadeout",
      plottooltext: "$seriesName in $label : <b>$dataValue</b>",
      theme: "umber", //fusion
      baseFont: "Poppins",
      animation: "1",
      xAxisName: "Time",
      rotateValues: "0",
      showShadow: "1",
      showLimits: "1",
      bgColor: "#f5f6fa",
      showBorder: "0",
      legendItemFont: "Poppins",
      // paletteColors: "#FF0000, #0372AB, #FF5904",
      paletteColors: colors,
    },
    axis: data?.axis,
    categories: data?.categories,
    // axis: [
    //   {
    //     title: "Electricity",
    //     titlepos: "left",
    //     numbersuffix: " kW",
    //     // numberprefix: "$",
    //     divlineisdashed: "4",
    //     maxvalue: "100000",
    //     dataset: [
    //       {
    //         seriesname: "Spa",
    //         linethickness: "3",
    //         data: [
    //           {
    //             value: "38450.2",
    //           },
    //           {
    //             value: "16544.4",
    //           },
    //           {
    //             value: "10659.4",
    //           },
    //           {
    //             value: "9657.4",
    //           },
    //           {
    //             value: "9040.4",
    //           },
    //           {
    //             value: "9040.4",
    //           },
    //           {
    //             value: "6992.3",
    //           },
    //           {
    //             value: "6650.5",
    //           },
    //           {
    //             value: "6650.5",
    //           },
    //           {
    //             value: "6337.2",
    //           },
    //           {
    //             value: "5835.4",
    //           },
    //           {
    //             value: "4582.9",
    //           },
    //         ],
    //       },
    //       {
    //         seriesname: "Laundry",
    //         linethickness: "3",
    //         data: [
    //           {
    //             value: "48450.2",
    //           },
    //           {
    //             value: "26544.4",
    //           },
    //           {
    //             value: "50659.4",
    //           },
    //           {
    //             value: "8657.4",
    //           },
    //           {
    //             value: "9040.4",
    //           },
    //           {
    //             value: "9040.4",
    //           },
    //           {
    //             value: "6992.3",
    //           },
    //           {
    //             value: "6650.5",
    //           },
    //           {
    //             value: "6650.5",
    //           },
    //           {
    //             value: "6337.2",
    //           },
    //           {
    //             value: "5835.4",
    //           },
    //           {
    //             value: "4582.9",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     title: "m3/h",
    //     titlepos: "RIGHT",
    //     axisonleft: "0",
    //     numdivlines: "5",
    //     numbersuffix: " m3/h",
    //     divlineisdashed: "1",
    //     maxvalue: "400000",
    //     dataset: [
    //       {
    //         seriesname: "m3/h",
    //         linethickness: "3",
    //         data: [
    //           {
    //             value: "358196",
    //           },
    //           {
    //             value: "166138",
    //           },
    //           {
    //             value: "107288",
    //           },
    //           {
    //             value: "97268",
    //           },
    //           {
    //             value: "91098",
    //           },
    //           {
    //             value: "91098",
    //           },
    //           {
    //             value: "70617",
    //           },
    //           {
    //             value: "67199",
    //           },
    //           {
    //             value: "67199",
    //           },
    //           {
    //             value: "64066",
    //           },
    //           {
    //             value: "59048",
    //           },
    //           {
    //             value: "46523",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // ],
    // categories: [
    //   {
    //     category: [
    //       {
    //         label: "2006",
    //       },
    //       {
    //         label: "2007",
    //       },
    //       {
    //         label: "2008",
    //       },
    //       {
    //         label: "2009",
    //       },
    //       {
    //         label: "2010",
    //       },
    //       // {
    //       //   label: "2011",
    //       // },
    //       // {
    //       //   label: "2012",
    //       // },
    //       // {
    //       //   label: "2013",
    //       // },
    //       // {
    //       //   label: "2014",
    //       // },
    //       // {
    //       //   label: "2015",
    //       // },
    //       // {
    //       //   label: "2016",
    //       // },
    //       // {
    //       //   label: "2017",
    //       // },
    //     ],
    //   },
    // ],
  };

  return (
    <ReactFC
      type="multiaxisline"
      width="100%"
      height="80%"
      dataFormat="JSON"
      dataSource={dataSource}
    />
  );
};

export default MultiAxisLineChart;
