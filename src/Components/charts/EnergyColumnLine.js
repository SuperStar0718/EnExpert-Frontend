// import ReactFC from "react-fusioncharts";
// import PowerCharts from "fusioncharts/fusioncharts.powercharts";
// import FusionCharts from "fusioncharts";
// import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// ReactFC.fcRoot(FusionCharts, PowerCharts, FusionTheme);

import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const EnergyColumnLine = ({ Data }) => {
  const dataSource = {
    chart: {
      //   caption: "Analysing Subsidies by Youth Population",
      //   subcaption: "By province",
      yaxisname: "Energy Production Daily",
      syaxisname: "Energy Production Hourly",
      labeldisplay: "rotate",
      snumbersuffix: "%",
      plothighlighteffect: "fadeout",
      scrollheight: "10",
      numvisibleplot: "10",
      drawcrossline: "0",
      theme: "fusion", //fusion
      baseFont: "Poppins",
      animation: "1",
      showShadow: "1",
      showLimits: "1",
      bgColor: "#f5f6fa",
      showBorder: "0",
      legendItemFont: "Poppins",
      exportenabled: "1",
    },
    categories: [
      {
        category: [
          {
            label: "Matzikama",
          },
          {
            label: "Cederberg",
          },
          {
            label: "Bergrivier",
          },
          {
            label: "Saldanha Bay",
          },
          {
            label: "Swartland",
          },
          {
            label: "Witzenberg",
          },
          {
            label: "Drakenstein",
          },
          {
            label: "Stellenbosch",
          },
          {
            label: "Breede Valley",
          },
          {
            label: "Langeberg",
          },
          {
            label: "Swellendam",
          },
          {
            label: "Theewaterskloof",
          },
          {
            label: "Overstrand",
          },
          {
            label: "Cape Agulhas",
          },
          {
            label: "Kannaland",
          },
          {
            label: "Hessequa",
          },
          {
            label: "Mossel Bay",
          },
          {
            label: "George",
          },
          {
            label: "Oudtshoorn",
          },
          {
            label: "Bitou",
          },
          {
            label: "Knysna",
          },
          {
            label: "Laingsburg",
          },
          {
            label: "Prince Albert",
          },
          {
            label: "Beaufort West",
          },
        ],
      },
    ],
    dataset: [
      {
        seriesname: "Total Population",
        plottooltext: "Population: $dataValue",
        data: [
          {
            value: "71045",
          },
          {
            value: "52949",
          },
          {
            value: "67474",
          },
          {
            value: "111173",
          },
          {
            value: "133762",
          },
          {
            value: "130548",
          },
          {
            value: "280195",
          },
          {
            value: "173419",
          },
          {
            value: "176578",
          },
          {
            value: "105483",
          },
          {
            value: "40211",
          },
          {
            value: "117109",
          },
          {
            value: "93466",
          },
          {
            value: "36000",
          },
          {
            value: "24168",
          },
          {
            value: "54237",
          },
          {
            value: "94135",
          },
          {
            value: "208237",
          },
          {
            value: "97509",
          },
          {
            value: "59157",
          },
          {
            value: "73835",
          },
          {
            value: "8895",
          },
          {
            value: "14272",
          },
          {
            value: "51080",
          },
        ],
      },
      //   {
      //     seriesname: "Youth",
      //     renderas: "area",
      //     showanchors: "0",
      //     plottooltext: "Youth: $dataValue",
      //     data: [
      //       {
      //         value: "24598",
      //       },
      //       {
      //         value: "18302",
      //       },
      //       {
      //         value: "22162",
      //       },
      //       {
      //         value: "40696",
      //       },
      //       {
      //         value: "47420",
      //       },
      //       {
      //         value: "49981",
      //       },
      //       {
      //         value: "97230",
      //       },
      //       {
      //         value: "73162",
      //       },
      //       {
      //         value: "60668",
      //       },
      //       {
      //         value: "34594",
      //       },
      //       {
      //         value: "12567",
      //       },
      //       {
      //         value: "39907",
      //       },
      //       {
      //         value: "30681",
      //       },
      //       {
      //         value: "11323",
      //       },
      //       {
      //         value: "7801",
      //       },
      //       {
      //         value: "15785",
      //       },
      //       {
      //         value: "31478",
      //       },
      //       {
      //         value: "72762",
      //       },
      //       {
      //         value: "32301",
      //       },
      //       {
      //         value: "21401",
      //       },
      //       {
      //         value: "27863",
      //       },
      //       {
      //         value: "3254",
      //       },
      //       {
      //         value: "5562",
      //       },
      //       {
      //         value: "19047",
      //       },
      //     ],
      //   },
      {
        seriesname: "Subsidies received %",
        parentyaxis: "S",
        renderas: "line",
        plottooltext: "$dataValue subsidies received",
        showvalues: "0",
        data: [
          {
            value: "28.0",
          },
          {
            value: "35.2",
          },
          {
            value: "23.9",
          },
          {
            value: "11.8",
          },
          {
            value: "18.0",
          },
          {
            value: "26.9",
          },
          {
            value: "11.1",
          },
          {
            value: "11.2",
          },
          {
            value: "24.0",
          },
          {
            value: "18.9",
          },
          {
            value: "35.6",
          },
          {
            value: "37.9",
          },
          {
            value: "12.9",
          },
          {
            value: "27.6",
          },
          {
            value: "40.5",
          },
          {
            value: "19.9",
          },
          {
            value: "15.6",
          },
          {
            value: "28.2",
          },
          {
            value: "23.3",
          },
          {
            value: "26.2",
          },
          {
            value: "16.9",
          },
          {
            value: "41.9",
          },
          {
            value: "62.1",
          },
          {
            value: "31.2",
          },
        ],
      },
    ],
  };

  const dataSource2 = {
    chart: {
      //   caption: "Analysing Subsidies by Youth Population",
      //   subcaption: "By province",
      yaxisname: "Energy Production",
      labeldisplay: "rotate",
      numbersuffix: "Wh",
      plothighlighteffect: "fadeout",
      theme: "fusion", //fusion
      baseFont: "Poppins",
      animation: "1",
      showShadow: "1",
      showLimits: "1",
      bgColor: "#ffffff",
      showBorder: "0",
      //   lineColor: "#37A1DB",
      legendItemFont: "Poppins",
    },
    categories: Data?.categories,
    dataset: Data?.axis,
    // categories: [
    //   {
    //     category: [
    //       {
    //         label: "10 Sept",
    //       },
    //       {
    //         label: "11 Sept",
    //       },
    //       {
    //         label: "12 Sept",
    //       },
    //       {
    //         label: "13 Sept",
    //       },
    //       {
    //         label: "14 Sept",
    //       },
    //       {
    //         label: "15 Sept",
    //       },
    //       {
    //         label: "16 Sept",
    //       },
    //       {
    //         label: "17 Sept",
    //       },
    //       {
    //         label: "18 Sept",
    //       },
    //       {
    //         label: "19 Sept",
    //       },
    //     ],
    //   },
    // ],
    // dataset: [
    //   {
    //     seriesname: "Daily Production",
    //     color: "#37A1DB",
    //     data: [
    //       {
    //         value: "1441290",
    //       },
    //       {
    //         value: "855912",
    //       },
    //       {
    //         value: "911404",
    //       },
    //       {
    //         value: "648136",
    //       },
    //       {
    //         value: "1441290",
    //       },
    //       {
    //         value: "855912",
    //       },
    //       {
    //         value: "911404",
    //       },
    //       {
    //         value: "648136",
    //       },
    //       {
    //         value: "648136",
    //       },
    //       {
    //         value: "648136",
    //       },
    //     ],
    //   },
    //   {
    //     seriesname: "Hourly Production",
    //     renderas: "line",
    //     data: [
    //       {
    //         value: "1297430",
    //       },
    //       {
    //         value: "776485",
    //       },
    //       {
    //         value: "685352",
    //       },
    //       {
    //         value: "726791",
    //       },
    //       {
    //         value: "426731",
    //       },
    //       {
    //         value: "1297430",
    //       },
    //       {
    //         value: "776485",
    //       },
    //       {
    //         value: "685352",
    //       },
    //       {
    //         value: "726791",
    //       },
    //       {
    //         value: "426731",
    //       },
    //     ],
    //   },
    // ],
  };

  return (
    <ReactFusioncharts
      //   type="scrollcombidy2d"
      type="mscombi2d"
      width="100%"
      height="80%"
      dataFormat="JSON"
      dataSource={dataSource2}
    />
  );
};

export default EnergyColumnLine;
