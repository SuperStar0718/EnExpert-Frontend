import { Typography, Row, Col, Switch } from "antd";
import { useEffect, useState, useRef } from "react";
import { RiChargingPileLine } from "react-icons/all";

const ChargingStationCard = ({ height, setHeight }) => {
  const heightRef = useRef(null);

  let [data, setData] = useState([
    {
      id: 1,
      name: "Station 1",
      status: true,
    },
    {
      id: 2,
      name: "Station 2",
      status: false,
    },
    {
      id: 3,
      name: "Station 3",
      status: false,
    },
    {
      id: 4,
      name: "Station 4",
      status: true,
    },
  ]);

  useEffect(() => {
    setHeight(heightRef?.current?.offsetHeight);
  }, [heightRef?.current?.offsetHeight]);

  return (
    <div
      className="live-card white-card"
      style={{ height: height ? height : "inherit" }}
      ref={heightRef}
    >
      <Typography.Title
        className="title"
        level={5}
        style={{ fontWeight: "400" }}
      >
        Charging Stations
      </Typography.Title>

      <Row gutter={[0, 20]}>
        {data.map((battery) => (
          <Col xs={12} md={6}>
            <div className="charging-card">
              <div
                className="section"
                style={{
                  background: battery.status ? "var(--green)" : "grey",
                }}
              >
                <RiChargingPileLine size={30} color="white" />
              </div>
              <p>{battery.name}</p>
              <Switch
                checkedChildren="ON"
                unCheckedChildren="OFF"
                checked={battery.status}
                onChange={(value) => {
                  let index = data.findIndex((obj) => {
                    return obj.id === battery.id;
                  });
                  data[index].status = value;
                  setData([...data]);
                }}
              />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ChargingStationCard;
