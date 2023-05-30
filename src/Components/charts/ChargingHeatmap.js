import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { getHeatmap } from "../../redux";
import moment from "moment";
import { Tooltip } from "antd";
import Loader from "../Loader";

export default function CUSTOMHM({ filter }) {
  const ref = useRef(null);
  const [height, setHeight] = useState(50);
  const labelRef = useRef(null);
  const [labelWidth, setLabelWidth] = useState(50);
  const [clientX, setClientx] = useState(0);
  const [clientY, setClientY] = useState(0);
  const [currentInd, setCurrentInd] = useState(null);
  const [displayAnnotation, setDisplayAnnotation] = useState(false);
  const [selectedItem, setItem] = useState("");

  const [heatMapData, setHeatMapData] = useState([
    {
      name: "",
      values: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    {
      name: "00:00",
      values: [
        {
          time: "2022-09-18 , 15:09 pm",
          value: "13480.81",
        },
        {
          time: "2022-09-18 , 16:09 pm",
          value: "9323.11",
        },
        {
          time: "2022-09-18 , 17:09 pm",
          value: "8774.57",
        },
        {
          time: "2022-09-18 , 18:09 pm",
          value: "6775.65",
        },
        {
          time: "2022-09-18 , 19:09 pm",
          value: "6658.29",
        },
        {
          time: "2022-09-18 , 20:09 pm",
          value: "10033.34",
        },
        {
          time: "2022-09-18 , 21:09 pm",
          value: "10038.96",
        },
      ],
    },
    {
      name: "02:00",
      values: [
        {
          time: "2022-09-18 , 22:09 pm",
          value: "6661.14",
        },
        {
          time: "2022-09-18 , 23:09 pm",
          value: "6763.44",
        },
        {
          time: "2022-09-19 , 00:09 am",
          value: "8770.46",
        },
        {
          time: "2022-09-19 , 01:09 am",
          value: "9308.84",
        },
        {
          time: "2022-09-19 , 02:09 am",
          value: "13461.17",
        },
        {
          time: "2022-09-19 , 03:09 am",
          value: "21514.45",
        },
        {
          time: "2022-09-19 , 04:09 am",
          value: "25681.45",
        },
      ],
    },
    {
      name: "04:00",
      values: [
        {
          time: "2022-09-19 , 05:09 am",
          value: "26234.07",
        },
        {
          time: "2022-09-19 , 06:09 am",
          value: "28231.14",
        },
        {
          time: "2022-09-19 , 07:09 am",
          value: "28351.32",
        },
        {
          time: "2022-09-19 , 08:09 am",
          value: "24958.96",
        },
        {
          time: "2022-09-19 , 09:09 am",
          value: "24950.51",
        },
        {
          time: "2022-09-19 , 10:09 am",
          value: "28337.80",
        },
        {
          time: "2022-09-19 , 11:09 am",
          value: "28233.62",
        },
      ],
    },
    {
      name: "06:00",
      values: [
        {
          time: "2022-09-19 , 12:09 pm",
          value: "26231.60",
        },
        {
          time: "2022-09-19 , 13:09 pm",
          value: "25690.17",
        },
        {
          time: "2022-09-19 , 14:09 pm",
          value: "21534.29",
        },
        {
          time: "2022-09-19 , 14:09 pm",
          value: "17540.82",
        },
        {
          time: "2022-09-18 , 15:09 pm",
          value: "37829.27",
        },
        {
          time: "2022-09-18 , 16:09 pm",
          value: "26114.09",
        },
        {
          time: "2022-09-18 , 17:09 pm",
          value: "24577.88",
        },
      ],
    },
    {
      name: "08:00",
      values: [
        {
          time: "2022-09-18 , 18:09 pm",
          value: "18996.21",
        },
        {
          time: "2022-09-18 , 19:09 pm",
          value: "18618.43",
        },
        {
          time: "2022-09-18 , 20:09 pm",
          value: "28059.06",
        },
        {
          time: "2022-09-18 , 21:09 pm",
          value: "28138.28",
        },
        {
          time: "2022-09-18 , 22:09 pm",
          value: "18674.16",
        },
        {
          time: "2022-09-18 , 23:09 pm",
          value: "18913.66",
        },
        {
          time: "2022-09-19 , 00:09 am",
          value: "24546.42",
        },
      ],
    },
    {
      name: "10:00",
      values: [
        {
          time: "2022-09-19 , 01:09 am",
          value: "26048.92",
        },
        {
          time: "2022-09-19 , 02:09 am",
          value: "37602.66",
        },
        {
          time: "2022-09-19 , 03:09 am",
          value: "60152.28",
        },
        {
          time: "2022-09-19 , 04:09 am",
          value: "71885.18",
        },
        {
          time: "2022-09-19 , 05:09 am",
          value: "73433.66",
        },
        {
          time: "2022-09-19 , 06:09 am",
          value: "79010.25",
        },
        {
          time: "2022-09-19 , 07:09 am",
          value: "79404.92",
        },
      ],
    },
    {
      name: "12:00",
      values: [
        {
          time: "2022-09-19 , 08:09 am",
          value: "69906.85",
        },
        {
          time: "2022-09-19 , 09:09 am",
          value: "69821.43",
        },
        {
          time: "2022-09-19 , 10:09 am",
          value: "79320.85",
        },
        {
          time: "2022-09-19 , 11:09 am",
          value: "79077.86",
        },
        {
          time: "2022-09-19 , 12:09 pm",
          value: "73454.48",
        },
        {
          time: "2022-09-19 , 13:09 pm",
          value: "71944.95",
        },
        {
          time: "2022-09-19 , 14:09 pm",
          value: "60368.91",
        },
      ],
    },
    {
      name: "14:00",
      values: [
        {
          time: "2022-09-18 , 15:09 pm",
          value: "13480.81",
        },
        {
          time: "2022-09-18 , 16:09 pm",
          value: "9323.11",
        },
        {
          time: "2022-09-18 , 17:09 pm",
          value: "8774.57",
        },
        {
          time: "2022-09-18 , 18:09 pm",
          value: "6775.65",
        },
        {
          time: "2022-09-18 , 19:09 pm",
          value: "6658.29",
        },
        {
          time: "2022-09-18 , 20:09 pm",
          value: "10033.34",
        },
        {
          time: "2022-09-18 , 21:09 pm",
          value: "10038.96",
        },
      ],
    },
    {
      name: "16:00",
      values: [
        {
          time: "2022-09-18 , 22:09 pm",
          value: "6661.14",
        },
        {
          time: "2022-09-18 , 23:09 pm",
          value: "6763.44",
        },
        {
          time: "2022-09-19 , 00:09 am",
          value: "8770.46",
        },
        {
          time: "2022-09-19 , 01:09 am",
          value: "9308.84",
        },
        {
          time: "2022-09-19 , 02:09 am",
          value: "13461.17",
        },
        {
          time: "2022-09-19 , 03:09 am",
          value: "21514.45",
        },
        {
          time: "2022-09-19 , 04:09 am",
          value: "25681.45",
        },
      ],
    },
    {
      name: "18:00",
      values: [
        {
          time: "2022-09-19 , 05:09 am",
          value: "26234.07",
        },
        {
          time: "2022-09-19 , 06:09 am",
          value: "28231.14",
        },
        {
          time: "2022-09-19 , 07:09 am",
          value: "28351.32",
        },
        {
          time: "2022-09-19 , 08:09 am",
          value: "24958.96",
        },
        {
          time: "2022-09-19 , 09:09 am",
          value: "24950.51",
        },
        {
          time: "2022-09-19 , 10:09 am",
          value: "28337.80",
        },
        {
          time: "2022-09-19 , 11:09 am",
          value: "28233.62",
        },
      ],
    },
    {
      name: "20:00",
      values: [
        {
          time: "2022-09-19 , 12:09 pm",
          value: "26231.60",
        },
        {
          time: "2022-09-19 , 13:09 pm",
          value: "25690.17",
        },
        {
          time: "2022-09-19 , 14:09 pm",
          value: "21534.29",
        },
        {
          time: "2022-09-19 , 14:09 pm",
          value: "17540.82",
        },
        {
          time: "2022-09-18 , 15:09 pm",
          value: "37829.27",
        },
        {
          time: "2022-09-18 , 16:09 pm",
          value: "26114.09",
        },
        {
          time: "2022-09-18 , 17:09 pm",
          value: "24577.88",
        },
      ],
    },
    {
      name: "22:00",
      values: [
        {
          time: "2022-09-18 , 18:09 pm",
          value: "18996.21",
        },
        {
          time: "2022-09-18 , 19:09 pm",
          value: "18618.43",
        },
        {
          time: "2022-09-18 , 20:09 pm",
          value: "28059.06",
        },
        {
          time: "2022-09-18 , 21:09 pm",
          value: "28138.28",
        },
        {
          time: "2022-09-18 , 22:09 pm",
          value: "18674.16",
        },
        {
          time: "2022-09-18 , 23:09 pm",
          value: "18913.66",
        },
        {
          time: "2022-09-19 , 00:09 am",
          value: "24546.42",
        },
      ],
    },
  ]);
  const [isData, setIsData] = useState(false);

  const setDate = () => {
    var getDateArray = function (start, end) {
      var arr = [];
      let startDate = new Date(start);
      let endDate = new Date(end);
      while (startDate <= endDate) {
        arr.push(new Date(startDate).toISOString().slice(0, 10));
        startDate.setDate(startDate.getDate() + 1);
      }
      return arr;
    };
    var dateArr = getDateArray(
      moment().subtract(5, "days").format("YYYY-MM-DD"),
      moment().format("YYYY-MM-DD")
    );
    let intervals = ["0-6", "6-12", "12-18", "18-24"];
    let hours = [];
    //Mon 0-6
    dateArr?.map((date) => {
      intervals?.map((interval, ind) => {
        hours.push(moment(date).startOf("day").format("ddd") + " " + interval);
      });
    });
    return hours;
  };

  const getLast24Days = () => {
    var getDateArray = function (start, end) {
      var arr = [];
      let startDate = new Date(start);
      let endDate = new Date(end);
      while (startDate <= endDate) {
        arr.push(moment(startDate).format("DD"));
        startDate.setDate(startDate.getDate() + 1);
      }
      return arr;
    };
    var dateArr = getDateArray(
      moment().subtract(23, "days").format("YYYY-MM-DD"),
      moment().format("YYYY-MM-DD")
    );

    return dateArr;
  };

  const getData = async () => {
    const result = await getHeatmap({ filter: filter.key });

    setHeatMapData([
      ...result,
      filter.key === "24h"
        ? {
            name: "",
            values: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 21, 22, 23, 24,
            ],
          }
        : filter.key === "6d"
        ? {
            name: "",
            values: setDate(),
            // values: [
            //   "6h",
            //   "12h",
            //   "18h",
            //   "1d",
            //   "1d6h",
            //   "1d12h",
            //   "1d18h",
            //   "2d",
            //   "2d6h",
            //   "2d12h",
            //   "2d18h",
            //   "3d",
            //   "3d6h",
            //   "3d12h",
            //   "3d18h",
            //   "4d",
            //   "4d6h",
            //   "4d12h",
            //   "4d18h",
            //   "5d",
            //   "5d6h",
            //   "5d12h",
            //   "5d18h",
            //   "6d",
            // ].reverse(),
          }
        : {
            name: "",
            values: getLast24Days(),
            // values: [
            //   "1d",
            //   "2d",
            //   "3d",
            //   "4d",
            //   "5d",
            //   "6d",
            //   "7d",
            //   "8d",
            //   "9d",
            //   "10d",
            //   "11d",
            //   "12d",
            //   "13d",
            //   "14d",
            //   "15d",
            //   "16d",
            //   "17d",
            //   "18d",
            //   "19d",
            //   "20d",
            //   "21d",
            //   "22d",
            //   "23d",
            //   "24d",
            // ].reverse(),
          },
    ]);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsData(!isData);
  //   }, 1000);
  //   if (heatMapData?.length > 0) {
  //     setIsData(!isData);
  //   }
  // }, [isData]);

  //   useEffect(() => {
  //     setHeatMapData([]);
  //     getData();
  //     setHeight(ref?.current?.offsetWidth * 1.33);
  //   }, [filter]);

  useEffect(() => {
    setInterval(() => {
      setDisplayAnnotation(false);
    }, 500);
  }, []);

  //   useLayoutEffect(() => {
  //     console.log(ref?.current?.offsetWidth);
  //     // setHeight(ref?.current?.offsetWidth * 1.33);

  //     setHeight(ref?.current?.offsetWidth * 1.33);
  //   }, [ref?.current?.offsetWidth]);

  const Annotation = ({ name, totalLength }) => {
    // console.log("opacity : ", item.value / totalLength);
    return (
      <>
        {displayAnnotation && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              flex: 1,
              height: 65,
              width: 250,
              boxShadow: "rgb(174 174 174) 0px 0px 10px",
              transition:
                "left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s",
              color: "rgb(89, 89, 89)",
              backgroundColor: "white",
              fontFamily: "Poppins",
              // color: "white",
              //   // left: clientX,
              left: clientX - 100,
              top: clientY - 100,
              position: "fixed",
              borderRadius: "4px",
              padding: "0 20px",
              fontSize: "10px",
              paddingTop: "5px",
              opacity: selectedItem.name === "" ? 0 : 1,
              zIndex: 100000,
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                fontSize: "13px",
                marginBottom: "5px",
                color: "black",
              }}
            >
              {selectedItem.title}
              {/* 10 - 11 AM */}
            </p>
            {/* <p>{title}</p> */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  background: "#37A1DB",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  opacity: selectedItem.opacity,
                  marginBottom: 0,
                  marginRight: 10,
                }}
              />
              <p
                style={{
                  marginBottom: 0,
                  width: "35px",
                  // marginRight: "20px",
                  width: "50%",
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "black",
                }}
              >
                {selectedItem.value?.toLocaleString("de-DE")} kW
              </p>
              <p
                style={{
                  color: "#7E84A3",
                  fontSize: "12px",
                  marginBottom: 0,
                }}
              >
                {selectedItem.name}
              </p>

              {/* <p style={{ marginBottom: "0" }}>
              {value} {name}
            </p> */}
            </div>
          </div>
        )}
      </>
    );
  };

  const BOX = ({
    item,
    value,
    numberOnly,
    totalLength,
    itemObj,
    arrayLength,
  }) => {
    return (
      <div
        onMouseOver={(e) => {
          setCurrentInd(value);
          setDisplayAnnotation(true);
          setClientx(e.clientX);
          setClientY(e.clientY);
          setItem({
            ...itemObj,
            opacity: item / totalLength,
          });
        }}
        ref={ref}
        style={{
          width: `calc(100%/7)`,
          // width: `${Math.floor(100 / arrayLength)}%`,
          // height: "40px",
          height: "100%",
          // height: "calc(100%/13)",
          //   height: numberOnly && filter.key === "6d" ? "80px" : "40px",
          backgroundColor: numberOnly ? "#fff" : "#37A1DB",
          opacity: numberOnly ? 1 : item / totalLength, // we will divide value by max value
          borderRadius: "4px",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          border: "1px solid white",
          color: "#131523",
          margin: "1px",
          textAlign: "center",
          // marginTop: numberOnly ? "8px" : "auto",
          fontSize: "0.9rem",
          //   writingMode:
          //     numberOnly && filter.key === "6d" ? "vertical-rl" : "horizontal-tb",
          // transform: numberOnly
          //   ? filter.key === "6d"
          //     ? "rotate(90deg)"
          //     : "rotate(0deg)"
          //   : "rotate(0deg)",
        }}
      >
        <span>{numberOnly ? value : ""}</span>
      </div>
    );
  };

  return (
    <>
      {heatMapData?.length > 0 ? (
        <>
          <Annotation />
          <div style={{ overflow: "auto", height: "-webkit-fill-available" }}>
            <div style={{ minWidth: "100%", height: "-webkit-fill-available" }}>
              {[...heatMapData, { name: heatMapData?.[1].name }]?.map(
                (item) => {
                  return (
                    <div style={{ display: "flex", height: "calc(92%/13)" }}>
                      <div
                        ref={labelRef}
                        style={{
                          minWidth: 60,
                          maxWidth: 60,
                          display: "flex",
                          alignItems: "flex-start",
                          color: "#131523",
                          marginRight: "10px",
                          fontSize: "0.9rem",
                          justifyContent: "flex-end",
                          marginTop: "-10px",
                        }}
                      >
                        {item.name}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flex: 1,
                          flexDirection: "row",
                          justifyContent: "space-evenly",
                          // margin: 1,
                        }}
                      >
                        {item?.values?.map((itemC, ind) => {
                          return (
                            <>
                              <BOX
                                // item={Math.random() * 20}
                                item={itemC.value ? itemC.value : itemC}
                                value={itemC.value ? itemC.value : itemC}
                                // name={item.name}
                                numberOnly={item.name === ""}
                                arrayLength={item.values.length}
                                totalLength={Math.max(
                                  ...item.values.map((o) => o.value)
                                )}
                                itemObj={{
                                  name: item.name,
                                  value: itemC.value ? itemC.value : itemC,
                                  title: itemC?.time,
                                  // moment()
                                  //   .tz("Europe/Rome")
                                  //   .format("YYYY-MM-DD"),
                                  // +
                                  // "-" +
                                  // moment(itemC?.intervalEnd)
                                  //   .tz("Europe/Rome")
                                  //   .format("HH A"),
                                }}
                              />
                            </>
                          );
                        })}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="loading">
          <Loader />
        </div>
      )}
    </>
  );
}
