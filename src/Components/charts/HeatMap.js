import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Heatmap, G2 } from "@ant-design/plots";

const DemoHeatmap = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/antvdemo/assets/data/github-commit.json"
    )
      .then((response) => response.json())
      .then((json) => {
        let filter = json.filter((obj) => {
          return obj.day <= 3;
        });
        setData(filter);
        // console.log("filter", filter);
      })
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  G2.registerShape("polygon", "boundary-polygon", {
    draw(cfg, container) {
      const group = container.addGroup();
      const attrs = {
        stroke: "#fff",
        lineWidth: 1,
        fill: cfg.color,
        paht: [],
      };
      const points = cfg.points;
      const path = [
        ["M", points[0].x, points[0].y],
        ["L", points[1].x, points[1].y],
        ["L", points[2].x, points[2].y],
        ["L", points[3].x, points[3].y],
        ["Z"],
      ]; // @ts-ignore

      attrs.path = this.parsePath(path);
      group.addShape("path", {
        attrs,
      });

      return group;
    },
  });
  const config = {
    data,
    height: 200,
    autoFit: true,
    xField: "week",
    yField: "day",
    colorField: "commits",
    reflect: "y",
    // color: ["#37a1db26", "#37a1db40", "#37a1db80", "#37a1dbd9"],
    color: ["#56addf", "#8cc9eb", "#e1f1fa", "#b7ddf2"],
    geometry: {
      pattern: {
        cfg: {
          size: 10,
          padding: 40,
        },
      },
    },

    // color: ["#d62728", "#2ca02c", "#000000"],
    shape: "boundary-polygon",
    meta: {
      day: {
        type: "cat",
        values: ["Spa", "Hotal", "Laundry", "Restaurant"],
      },
      week: {
        type: "cat",
      },
      commits: {
        sync: true,
      },
      date: {
        type: "cat",
      },
    },
    yAxis: {
      grid: null,
    },
    tooltip: {
      title: "date",
      showMarkers: false,
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
    xAxis: {
      position: "top",
      tickLine: null,
      line: null,
      label: {
        offset: 12,
        style: {
          fontSize: 12,
          fill: "#666",
          textBaseline: "top",
        },
        // formatter: (val) => {
        //   if (val === "2") {
        //     return "MAY";
        //   } else if (val === "6") {
        //     return "JUN";
        //   } else if (val === "10") {
        //     return "JUL";
        //   } else if (val === "15") {
        //     return "AUG";
        //   } else if (val === "19") {
        //     return "SEP";
        //   } else if (val === "24") {
        //     return "OCT";
        //   }

        //   return "";
        // },
      },
    },
  };

  return <Heatmap {...config} />;
};

export default DemoHeatmap;
