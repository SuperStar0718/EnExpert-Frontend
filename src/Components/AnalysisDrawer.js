import {
  Button,
  Drawer,
  Row,
  Col,
  Divider,
  Select,
  Typography,
  Checkbox,
  Switch,
} from "antd";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const AnalysisDrawer = () => {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  const { electricity, water, heat, gas } = useSelector(
    (state) => state.analysis
  );

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  // const checkSwitchCondition = (checked , type,name) => {

  //   if(type === "Electricity"){
  //     const data = analysisData?.axis?.find(data => {
  //       return data.title === type
  //     })

  //     //dataset
  //     if(checked){

  //     }
  //     let filtered = data.dataset.filter(obj => {return obj.seriesname === name})

  //   }

  // }

  console.log("electricity", electricity);
  console.log("electricity", electricity.indexOf("Spa"));

  let Data = [
    {
      channel: "Electricity",
      items: [
        {
          color: "#DBD621",
          name: "Spa",
        },
        {
          color: "#999817",
          name: "Restaurant",
        },
        {
          color: "#FFFEC9",
          name: "E-mobility",
        },
        {
          color: "#FFFE93",
          name: "Laundry",
        },
        {
          color: "#EBE77A",
          name: "Total",
        },
      ],
    },
    {
      channel: "Water",
      items: [
        {
          color: "#37A1DB",
          name: "Total",
        },
        {
          color: "#278099",
          name: "Spa",
        },
        {
          color: "#CFF5FF",
          name: "Pool",
        },
        {
          color: "#A0EAFF",
          name: "....",
        },
      ],
    },
    {
      channel: "Heat",
      items: [
        {
          color: "#E58448",
          name: "Total",
        },
        {
          color: "#A06432",
          name: "Rooms",
        },
        {
          color: "#FFE7D3",
          name: "Spa",
        },
        {
          color: "#FFCFA8",
          name: "Pool",
        },
        {
          color: "#ECA579",
          name: "....",
        },
      ],
    },
    {
      channel: "Gas",
      items: [
        {
          color: "#46C782",
          name: "Total",
        },
        {
          color: "#318B6E",
          name: "Rooms",
        },
        {
          color: "#D6FFF2",
          name: "Spa",
        },
        {
          color: "#D6FFF2",
          name: "Pool",
        },
        {
          color: "#76D6A3",
          name: "....",
        },
      ],
    },
  ];

  return (
    <div>
      <Button
        type="primary"
        style={{ minWidth: "max-content" }}
        onClick={showDrawer}
      >
        Filters
      </Button>
      <Drawer
        title="Analysis Filter Options"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <div className="analysis-drawer">
          <Row>
            <Col xs={24}>
              {Data?.map((data) => (
                <>
                  <div className="flex-between filter-head">
                    <Typography.Title level={5}>
                      {data.channel}
                    </Typography.Title>
                    <Switch
                      defaultChecked={
                        data.channel === "Electricity" &&
                        electricity?.length > 0
                          ? true
                          : data.channel === "Water" && water?.length > 0
                          ? true
                          : data.channel === "Heat" && heat?.length > 0
                          ? true
                          : data.channel === "Gas" && gas?.length > 0
                          ? true
                          : false
                      }
                      onChange={(value) => {
                        if (data.channel === "Electricity") {
                          if (value) {
                            dispatch({
                              type: "UPDATE_ELECTRICITY",
                              payload: [
                                "Spa",
                                "Restaurant",
                                "E-mobility",
                                "Laundry",
                                "Total",
                              ],
                            });
                          } else {
                            dispatch({
                              type: "CLEAR_ELECTRICITY",
                            });
                          }
                        }
                      }}
                    />
                  </div>
                  {data.items.map((item) => (
                    <div className="flex-between filter-switch">
                      <Typography.Text className="flex-between">
                        <p
                          style={{
                            background: item.color,
                            width: 8,
                            height: 8,
                            borderRadius: "2px",
                            marginBottom: 0,
                            marginRight: 10,
                          }}
                        />
                        {item.name}
                      </Typography.Text>
                      <Switch
                        checked={
                          data.channel === "Electricity" &&
                          electricity?.indexOf(item.name) !== -1
                            ? true
                            : data.channel === "Water" &&
                              water?.indexOf(item.name) !== -1
                            ? true
                            : data.channel === "Heat" &&
                              heat?.indexOf(item.name) !== -1
                            ? true
                            : data.channel === "Gas" &&
                              gas?.indexOf(item.name) !== -1
                            ? true
                            : false
                        }
                        onChange={(value) => {
                          if (data.channel === "Electricity") {
                            if (value) {
                              dispatch({
                                type: "UPDATE_ELECTRICITY",
                                payload: [...electricity, item.name],
                              });
                            } else {
                              let electricityCopy = JSON.parse(
                                JSON.stringify(electricity)
                              );
                              let index = electricityCopy?.indexOf(item.name);
                              electricityCopy.splice(index, 1);
                              dispatch({
                                type: "UPDATE_ELECTRICITY",
                                payload: electricityCopy,
                              });
                            }
                          }
                        }}
                      />
                    </div>
                  ))}
                </>
              ))}
            </Col>
            {/* <Col
              xs={24}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Button type="primary">Apply Filter</Button>
            </Col>
            <Col
              xs={24}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                margin: "20px 0",
              }}
            >
              <Button type="primary">Clear</Button>
            </Col> */}
          </Row>
        </div>
      </Drawer>
    </div>
  );
};

export default AnalysisDrawer;
