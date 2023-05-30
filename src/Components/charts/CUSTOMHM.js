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

  const [heatMapData, setHeatMapData] = useState([]);
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

  console.log('heatMapData', heatMapData)

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

  useEffect(() => {
    setHeatMapData([]);
    getData();
    setHeight(ref?.current?.offsetWidth * 1.33);
  }, [filter]);

  useEffect(() => {
    setInterval(() => {
      setDisplayAnnotation(false);
    }, 500);
  }, []);

  useLayoutEffect(() => {
    console.log(ref?.current?.offsetWidth);
    // setHeight(ref?.current?.offsetWidth * 1.33);

    setHeight(ref?.current?.offsetWidth * 1.33);
  }, [ref?.current?.offsetWidth]);

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
          width: `35px`,
          // width: `${Math.floor(100 / arrayLength)}%`,
          // height: "40px",
          height: numberOnly && filter.key === "6d" ? "80px" : "40px",
          backgroundColor: numberOnly ? "#fff" : "#37A1DB",
          opacity: numberOnly ? 1 : item / totalLength, // we will divide value by max value
          borderRadius: "6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid white",
          color: "#7E84A3",
          margin: 1.5,
          textAlign: "center",
          // marginTop: numberOnly ? "8px" : "auto",
          fontSize: "14px",
          writingMode:
            numberOnly && filter.key === "6d" ? "vertical-rl" : "horizontal-tb",
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
          <div style={{ overflow: "auto" }}>
            <div style={{ minWidth: 600 }}>
              {heatMapData?.map((item) => {
                return (
                  <div style={{ display: "flex" }}>
                    <div
                      ref={labelRef}
                      style={{
                        minWidth: 100,
                        maxWidth: 100,
                        display: "flex",
                        alignItems: "center",
                        color: "#131523",
                        marginRight: "10px",
                        fontSize: "12px",
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
                      {item.values.map((itemC, ind) => {
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
              })}
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
