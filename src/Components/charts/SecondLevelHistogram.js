import { Histogram } from "@ant-design/plots";
import { Divider } from "antd";
import { useState } from "react";

const DemoHistogram = ({ Data, color, height }) => {
  const data = [
    {
      value: 1.2,
    },
    {
      value: 3.4,
    },
    {
      value: 3.7,
    },
    {
      value: 4.3,
    },
    {
      value: 5.2,
    },
    {
      value: 5.8,
    },
    {
      value: 6.1,
    },
    {
      value: 6.5,
    },
    {
      value: 6.8,
    },
    {
      value: 7.1,
    },
    {
      value: 7.3,
    },
    {
      value: 7.7,
    },
    {
      value: 8.3,
    },
    {
      value: 8.6,
    },
    {
      value: 8.8,
    },
    {
      value: 9.1,
    },
    {
      value: 9.2,
    },
    {
      value: 9.4,
    },
    {
      value: 9.5,
    },
    {
      value: 9.7,
    },
    {
      value: 10.5,
    },
    {
      value: 10.7,
    },
    {
      value: 10.8,
    },
    {
      value: 11.0,
    },
    {
      value: 11.0,
    },
    {
      value: 11.1,
    },
    {
      value: 11.2,
    },
    {
      value: 11.3,
    },
    {
      value: 11.4,
    },
    {
      value: 11.4,
    },
    {
      value: 11.7,
    },
    {
      value: 12.0,
    },
    {
      value: 12.9,
    },
    {
      value: 12.9,
    },
    {
      value: 13.3,
    },
    {
      value: 13.7,
    },
    {
      value: 13.8,
    },
    {
      value: 13.9,
    },
    {
      value: 14.0,
    },
    {
      value: 14.2,
    },
    {
      value: 14.5,
    },
    {
      value: 15,
    },
    {
      value: 15.2,
    },
    {
      value: 15.6,
    },
    {
      value: 16.0,
    },
    {
      value: 16.3,
    },
    {
      value: 17.3,
    },
    {
      value: 17.5,
    },
    {
      value: 17.9,
    },
    {
      value: 18.0,
    },
    {
      value: 18.0,
    },
    {
      value: 20.6,
    },
    {
      value: 21,
    },
    {
      value: 23.4,
    },
  ];

  var maximum = Math.max.apply(
    Math,
    Data.map((o) => o.value)
  );

  const config = {
    data: Data ? Data : data,
    binField: "value",
    binWidth: ((Math.round(maximum / 1000) * 1000) / 10).toFixed(),
    color: color ? color : "#37A1DB",
    tooltip: {
      customContent: (title, data) => {
        return (
          data && (
            <div style={{ minWidth: 150, padding: "20px 0" }}>
              <div>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "13px",
                    color: "black",
                    marginBottom: "15px",
                  }}
                >
                  {(data?.[0]?.data?.range?.[0] / 1000).toLocaleString("de-DE")}{" "}
                  kW {" - "}
                  {(data?.[0]?.data?.range?.[1] / 1000).toLocaleString(
                    "de-DE"
                  )}{" "}
                  kW
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <p
                    style={{
                      background: data?.[0]?.color,
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      marginBottom: 0,
                      marginRight: 10,
                    }}
                  />
                  <p
                    style={{
                      marginBottom: 0,
                      width: "35px",
                      width: "50%",
                      fontSize: "12px",

                      fontWeight: "400",
                      color: "black",
                    }}
                  >
                    {data?.[0]?.value}
                  </p>
                  <p
                    style={{
                      color: "#7E84A3",
                      fontSize: "12px",
                      marginBottom: 0,
                    }}
                  >
                    Hours
                  </p>
                </div>
              </div>
            </div>
          )
        );
      },
    },
    meta: {
      count: {
        alias: "Hours",
      },
    },

    interactions: [
      {
        type: "element-highlight",
      },
    ],

    // meta: {
    //   range: {
    //     min: 0,
    //     tickInterval: 2,
    //   },
    //   count: {
    //     max: 20,
    //     nice: true,
    //   },
    // },
  };
  return (
    <Histogram {...config} animation={false} height={height ? height : 400} />
  );
};

export default DemoHistogram;
