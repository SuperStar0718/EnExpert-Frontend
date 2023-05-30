import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Sankey } from "@ant-design/plots";

const DemoSankey = ({ Data }) => {
  const dummy2 = [
    {
      main: "Grid",
      child1: "",
      child2: "",
      end: "CHP/BHKW",
      value: 357,
    },
    {
      main: "Grid",
      child1: "Spa",
      child2: "",
      end: "",
      value: 275,
    },
    {
      main: "Grid",
      child1: "Spa",
      child2: "",
      end: "CHP/BHKW",
      value: 75,
    },
    {
      main: "",
      child1: "Spa",
      child2: "Battery",
      end: "",
      value: 177,
    },
    {
      main: "",
      child1: "",
      child2: "Battery",
      end: "PV",
      value: 325,
    },
    {
      main: "Grid",
      child1: "E-Mobility",
      child2: "",
      end: "",
      value: 436,
    },
    {
      main: "",
      child1: "E-Mobility",
      child2: "Battery",
      end: "",
      value: 230,
    },
    {
      main: "Grid",
      child1: "Restaurant",
      child2: "",
      end: "",
      value: 152,
    },
    {
      main: "",
      child1: "Restaurant",
      child2: "Battery",
      end: "",
      value: 114,
    },

    {
      main: "Grid",
      child1: "Laundry",
      child2: "",
      end: "",
      value: 132,
    },
    {
      main: "",
      child1: "Laundry",
      child2: "Battery",
      end: "",
      value: 7,
    },
    {
      main: "Grid",
      child1: "",
      child2: "",
      end: "PV",
      value: 450,
    },
  ];

  const sankeyData = [];
  const keys = ["main", "child1", "child2", "end"];
  Data.forEach((d) => {
    keys.reduce((a, b) => {
      if (a && b) {
        sankeyData.push({
          source: d[a],
          target: d[b],
          value: d.value,
          path: `${d[keys[0]]} -> ${d[keys[1]]} -> ${d[keys[2]]} -> ${
            d[keys[3]]
          }`,
        });
      }

      return b;
    });
  });
  const config = {
    // data: sankeyData,
    data: sankeyData,
    sourceField: "source",
    targetField: "target",
    weightField: "value",
    nodeWidthRatio: 0.01,
    nodePaddingRatio: 0.03,
    nodeDraggable: false,
    rawFields: ["path"],
    tooltip: {
      fields: ["path", "value"],
      formatter: ({ path, value }) => {
        return {
          name: path,
          value: value,
        };
      },
    },
  };

  return <Sankey {...config} />;
};

export default DemoSankey;
