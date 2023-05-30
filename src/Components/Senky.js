import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import SenkyImage from "../Assets/SENKY.jpeg";

export default function Senky() {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(width);

  const imgRef = useRef(null);

  //   useLayoutEffect(() => {
  //     console.log(imgRef?.current?.width);
  //     setHeight(imgRef?.current?.width);
  //     // imgRef?.current?.offsetHeight = imgRef?.current?.offsetWidth
  //   }, [imgRef?.current?.width]);

  const handleWindowSizeChange = () => {
    // console.log(imgRef?.current?.width);
    setHeight(imgRef?.current?.width);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <div style={{ display: "flex", flex: 1 }}>
      <img
        style={{ width: "100%", minHeight: height }}
        ref={imgRef}
        src={SenkyImage}
      />
      <p
        style={{
          left: imgRef?.current?.width / 2 - imgRef?.current?.width * 0.04,
          top: imgRef?.current?.width / 20,
          position: "absolute",
          fontSize: "1rem",
          height: "8%",
          width: "8%",
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        357kWh
      </p>

      <p
        style={{
          left: imgRef?.current?.width / 4.5 - imgRef?.current?.width * 0.04,
          top: imgRef?.current?.width / 5,
          position: "absolute",
          fontSize: "1rem",
          height: "8%",
          width: "8%",
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        275kWh
      </p>
      <p
        style={{
          left: imgRef?.current?.width / 2.9 - imgRef?.current?.width * 0.04,
          top: imgRef?.current?.width / 5,
          position: "absolute",
          fontSize: "1rem",
          height: "8%",
          width: "8%",
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        SPA
      </p>

      <p
        style={{
          left: imgRef?.current?.width / 4.5 - imgRef?.current?.width * 0.04,
          top: imgRef?.current?.width / 2.4,
          position: "absolute",
          fontSize: "1rem",
          height: "8%",
          width: "8%",
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        436kWh
      </p>
      <p
        style={{
          left: imgRef?.current?.width / 2.9 - imgRef?.current?.width * 0.04,
          top: imgRef?.current?.width / 2.4,
          position: "absolute",
          fontSize: "1rem",
          height: "8%",
          width: "8%",
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        436kWh
      </p>

      <p
        style={{
          left: imgRef?.current?.width / 4.5 - imgRef?.current?.width * 0.04,
          top: imgRef?.current?.width / 1.7,
          position: "absolute",
          fontSize: "1rem",
          height: "8%",
          width: "8%",
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        152kWh
      </p>
      <p
        style={{
          left: imgRef?.current?.width / 2.9 - imgRef?.current?.width * 0.04,
          top: imgRef?.current?.width / 1.7,
          position: "absolute",
          fontSize: "0.7rem",
          height: "8%",
          width: "8%",
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Restaurant
      </p>

      <p
        style={{
          left: imgRef?.current?.width / 4.5 - imgRef?.current?.width * 0.04,
          top: imgRef?.current?.width / 1.4,
          position: "absolute",
          fontSize: "1rem",
          height: "8%",
          width: "8%",
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        132kWh
      </p>

      <p
        style={{
          left: imgRef?.current?.width / 2.9 - imgRef?.current?.width * 0.04,
          top: imgRef?.current?.width / 1.4,
          position: "absolute",
          fontSize: "0.7rem",
          height: "8%",
          width: "8%",
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Laundry
      </p>
    </div>
  );
}
