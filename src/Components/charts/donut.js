import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Pie, measureTextWidth } from "@ant-design/plots";

const Donut = () => {
  function renderStatistic(containerWidth, text, style) {
    const { width: textWidth, height: textHeight } = measureTextWidth(
      text,
      style
    );
    const R = containerWidth / 2; // r^2 = (w / 2)^2 + (h - offsetY)^2

    let scale = 1;

    if (containerWidth < textWidth) {
      scale = Math.min(
        Math.sqrt(
          Math.abs(
            Math.pow(R, 2) /
              (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2))
          )
        ),
        1
      );
    }

    const textStyleStr = `width:${containerWidth}px;`;
    return `<div style="${textStyleStr};font-size:${scale}em;line-height:${
      scale < 1 ? 1 : "inherit"
    };">${text}</div>`;
  }

  const data = [
    {
      type: "Spa",
      value: 27,
    },
    {
      type: "Hotal",
      value: 25,
    },
    {
      type: "Laundry",
      value: 18,
    },
    {
      type: "Restaurant",
      value: 15,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    height: 250,
    autoFit: false,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.88,
    color: ["#37A1DB", "#46C782", "#DBD621", "#E58448"],
    legend: {
      position: "bottom",
      offsetY: 0,
      flipPage: false,
      itemWidth: 120,
      itemValue: {
        formatter: (text, item) => {
          const items = data.filter((d) => d.type === item.value);
          return items.length
            ? items.reduce((a, b) => a + b.value, 0) / items.length + "%"
            : "-";
        },
        style: {
          fontWeight: "700",
          color: "#0000",
        },
      },
    },
    label: false,
    // label: {
    //   type: "inner",
    //   offset: "-50%",
    //   style: {
    //     textAlign: "center",
    //     fontSize: 10,
    //   },
    //   autoRotate: false,
    // },
    statistic: {
      title: {
        offsetY: 10,
        style: {
          fontSize: 30,
          color: "var(--text)",
        },
        customHtml: (container, view, datum, data) => {
          const { width } = container.getBoundingClientRect();
          const text = datum ? ` ${datum.value}` : `699.613`;
          // : ` ${data.reduce((r, d) => r + d.value, 0)}`;
          return renderStatistic(width, text);
        },
      },
      content: {
        offsetY: 10,
        style: {
          fontSize: 10,
          color: "var(--secondaryText)",
          fontWeight: "50px",
        },

        customHtml: (container, view, datum) => {
          const { width, height } = container.getBoundingClientRect();
          //   const d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));

          return renderStatistic(width, "kWh");
        },
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
      {
        type: "pie-statistic-active",
      },
    ],
  };
  return <Pie {...config} />;
};
export default Donut;
